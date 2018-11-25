type ProcessEnv = typeof process.env;

const mockProcessEnv = (mockValue: ProcessEnv) => {
  let recordedEnv: ProcessEnv | null = null;

  const activate = () => {
    if (recordedEnv !== null) {
      throw new Error("Expected process.env to be not null");
    }
    recordedEnv = process.env;
    process.env = mockValue;
  };

  const deactivate = () => {
    if (recordedEnv === null) {
      throw new Error("Expected process.env to be null");
    }
    process.env = recordedEnv;
    recordedEnv = null;
  };

  return {
    activate,
    deactivate,

    useForEach: () => {
      beforeEach(activate);
      afterEach(deactivate);
    },

    useForAll: () => {
      beforeAll(activate);
      afterAll(deactivate);
    }
  };
};

export default mockProcessEnv;
