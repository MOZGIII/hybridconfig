import PlainConfig from "../PlainConfig";

const fillFromEnv = <
  TKey extends string,
  TConfig extends PlainConfig<TKey> = PlainConfig<TKey>
>(
  config: TConfig,
  keys: TKey[],
  formatEnvKey: (configKey: TKey) => string
) =>
  keys.forEach(key => {
    const envKey = formatEnvKey(key);
    const value: string | undefined = process.env[envKey];
    if (value) {
      (config as PlainConfig<TKey>)[key] = value;
    }
  });

export default fillFromEnv;
