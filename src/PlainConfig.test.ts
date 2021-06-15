import PlainConfig from "./PlainConfig";

describe("PlainConfig", () => {
  it("Has the required properties", () => {
    interface ITestType {
      myConfig: string;
    }

    const a: ITestType = {
      myConfig: "test",
    };

    const b: PlainConfig<keyof ITestType> = a;

    const c: ITestType = b;
  });
});
