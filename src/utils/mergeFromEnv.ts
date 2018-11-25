import PlainConfig from "../PlainConfig";
import fillFromEnv from "./fillFromEnv";

const mergeFromEnv = <
  TKeys extends string,
  TConfig extends PlainConfig<TKeys> = PlainConfig<TKeys>
>(
  base: TConfig,
  formatEnvKey: (configKey: TKeys) => string
): TConfig => {
  // Prepare result.
  const result: TConfig = { ...(base as any) };

  // Go through over all config fields and overwrite anything we find in
  // the environment.
  const keys = Object.keys(result) as TKeys[];
  fillFromEnv(result, keys, formatEnvKey);

  // Return result.
  return result;
};

export default mergeFromEnv;
