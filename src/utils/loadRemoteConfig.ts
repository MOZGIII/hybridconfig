import PlainConfig from "../PlainConfig";

const loadRemoteConfig = <TKey extends string>(path: string) =>
  fetch(path).then(data => data.json() as Promise<PlainConfig<TKey>>);

export default loadRemoteConfig;
