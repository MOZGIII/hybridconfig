import formatEnvKeyWithPrefix from "./formatEnvKeyWithPrefix";

it("works with empty prefix", () => {
  expect(formatEnvKeyWithPrefix("")("key")).toBe("KEY");
});

it("works with non-empty prefix", () => {
  expect(formatEnvKeyWithPrefix("test_")("key")).toBe("TEST_KEY");
});

it("convers multiple words", () => {
  expect(formatEnvKeyWithPrefix("test_")("myKey")).toBe("TEST_MY_KEY");
  expect(formatEnvKeyWithPrefix("test_")("my_key")).toBe("TEST_MY_KEY");
});
