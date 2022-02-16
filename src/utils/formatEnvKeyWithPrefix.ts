import { constantCase } from "constant-case";

const formatEnvKeyWithPrefix = (prefix: string) => {
  return (configKey: string) => prefix + constantCase(configKey);
};

export default formatEnvKeyWithPrefix;
