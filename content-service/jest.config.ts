import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  verbose: true,
  coveragePathIgnorePatterns: ["/node_modules"],
  coverageProvider: "v8",
  moduleDirectories: ["node_modules", "src"],
};

export default config;
