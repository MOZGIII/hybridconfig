const formatEnvKeyWithPrefix = (prefix: string) => {
  const upPrefix = prefix.toUpperCase();
  return (configKey: string) => upPrefix + configKey.toUpperCase();
};

export default formatEnvKeyWithPrefix;
