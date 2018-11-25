import defExport, {
  IOptions,
  load,
  loadNonProduction,
  loadProduction,
  PlainConfig
} from "./index";

describe("Public interface", () => {
  test("Public interface is properly exported", () => {
    expect(defExport).toBeDefined();
    expect(load).toBeDefined();
    expect(loadNonProduction).toBeDefined();
    expect(loadProduction).toBeDefined();
  });

  test("Public interface types are properly exported", () => {
    const anyVal: any = undefined;
    const testIPlainConfigBase = anyVal as PlainConfig<any>;
    const testIOptions = anyVal as IOptions;
  });

  test("Export load as default export", () => {
    expect(defExport).toBe(load);
  });

  test("Export load to be loadNonProduction at test (current) environment", () => {
    expect(load).toBe(loadNonProduction);
  });
});
