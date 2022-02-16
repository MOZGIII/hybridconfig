import PlainConfig from "./PlainConfig";
import formatEnvKeyWithPrefix from "./utils/formatEnvKeyWithPrefix";
import loadRemoteConfig from "./utils/loadRemoteConfig";
import mergeFromEnv from "./utils/mergeFromEnv";

export interface IOptions {
  remoteConfigPath: string;
  envKeyPrefix: string;
}

type LoadFn = <TKeys extends string>(
  options: IOptions
) => Promise<PlainConfig<TKeys>>;

// For production we just return remote config, we're not interested in using
// *build-time* env variables, since we're solving the *runtime*
// configuration problem.
export const loadProduction: LoadFn = ({ remoteConfigPath }) =>
  loadRemoteConfig(remoteConfigPath);

// For non-production environments we assume development mode of some kind,
// so want we do is to load the remote config (that contains the defaults),
// and apply some manual overrides.
export const loadNonProduction: LoadFn = ({
  remoteConfigPath,
  envKeyPrefix,
}) => {
  const formatEnvKey = formatEnvKeyWithPrefix(envKeyPrefix);

  return loadRemoteConfig(remoteConfigPath).then((cfg) =>
    mergeFromEnv(cfg, formatEnvKey)
  );
};

const env = process?.env?.NODE_ENV;

export const load: LoadFn =
  !env || env === "production" ? loadProduction : loadNonProduction;
