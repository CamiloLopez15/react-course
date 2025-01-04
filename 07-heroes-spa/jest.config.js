export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "^@src/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
