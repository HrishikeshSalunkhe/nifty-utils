import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/test"],
  testMatch: ["**/*.test.ts"], // pick up all *.test.ts files
  moduleFileExtensions: ["ts", "js", "json", "node"], // make sure TS is recognized
};

export default config;
