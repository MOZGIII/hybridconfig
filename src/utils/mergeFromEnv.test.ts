import mockProcessEnv from "../testutils/mockProcessEnv";
import mergeFromEnv from "./mergeFromEnv";

const upperCaseFormatEnvKey = (key: string) => key.toUpperCase();

describe("mergeFromEnv", () => {
  interface IMyConfig {
    my_key: string;
  }

  mockProcessEnv({
    MY_KEY: "custom",
    OTHER_UNUSED_KEY: "other"
  }).useForEach();

  it("overwrites the key", () => {
    const base: IMyConfig = {
      my_key: "default"
    };

    const result: IMyConfig = mergeFromEnv(base as any, upperCaseFormatEnvKey);

    expect(result).toEqual({
      my_key: "custom"
    });
  });
});
