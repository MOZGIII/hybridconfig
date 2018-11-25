import PlainConfig from "./PlainConfig";
import formatEnvKeyWithPrefix from "./utils/formatEnvKeyWithPrefix";
import loadRemoteConfig from "./utils/loadRemoteConfig";
import mergeFromEnv from "./utils/mergeFromEnv";

export interface IOptions {
  remoteConfigPath: string;
  envKeyPrefix: string;
}

// For production we just return remote config, we're not interested in using
// *build-time* env variables, since we're solving the *runtime*
// configuration problem.
export const loadProduction = <TKeys extends string>({
  remoteConfigPath
}: IOptions): Promise<PlainConfig<TKeys>> =>
  loadRemoteConfig<TKeys>(remoteConfigPath);

// For non-production environments we assume development mode of some kind,
// so want we do is to load the remote config (that contains the defaults),
// and apply some manual overrides.
export const loadNonProduction = <TKeys extends string>({
  remoteConfigPath,
  envKeyPrefix
}: IOptions): Promise<PlainConfig<TKeys>> => {
  const formatEnvKey = formatEnvKeyWithPrefix(envKeyPrefix);

  return loadRemoteConfig<TKeys>(remoteConfigPath).then(cfg =>
    mergeFromEnv<TKeys>(cfg, formatEnvKey)
  );
};

export const load =
  !process || process.env.NODE_ENV === "production"
    ? loadProduction
    : loadNonProduction;
