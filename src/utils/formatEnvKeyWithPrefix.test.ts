import formatEnvKeyWithPrefix from "./formatEnvKeyWithPrefix";

it("works with empty prefix", () => {
  expect(formatEnvKeyWithPrefix("")("key")).toBe("KEY");
});

it("works with non-empty prefix", () => {
  expect(formatEnvKeyWithPrefix("test_")("key")).toBe("test_KEY");
});

it("convers multiple words", () => {
  expect(formatEnvKeyWithPrefix("test_")("myKey")).toBe("test_MY_KEY");
  expect(formatEnvKeyWithPrefix("test_")("my_key")).toBe("test_MY_KEY");
  expect(formatEnvKeyWithPrefix("test")("my_key")).toBe("testMY_KEY");

  expect(formatEnvKeyWithPrefix("TEST_")("my_key")).toBe("TEST_MY_KEY");
  expect(formatEnvKeyWithPrefix("TEST")("my_key")).toBe("TESTMY_KEY");
});
