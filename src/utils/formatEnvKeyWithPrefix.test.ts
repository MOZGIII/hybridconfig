import formatEnvKeyWithPrefix from "./formatEnvKeyWithPrefix";

it("works with empty prefix", () => {
  expect(formatEnvKeyWithPrefix("")("key")).toBe("KEY");
});

it("works with non-empty prefix", () => {
  expect(formatEnvKeyWithPrefix("test_")("key")).toBe("TEST_KEY");
});
