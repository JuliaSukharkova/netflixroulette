import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  testEnvironment: "jsdom",
  transform:{
    "^.+\\.tsx?$" :  "ts-jest" 
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
]
};

export default config;