// What could go wrong?
// Commit is not there!
// Commit is not a valid object
// Commit information invalid (future date)

// What could right?
// Return the nice object!

// Test runner!

// Jest => is the test runner for CRA

// Mocha is a test runner
// Chai is an assertion library

import { convertCommitObj } from "./commitHelpers";
import mockCommitData from "../mocks/commitData.json";

describe("Convert Commit Response to Commit Object helper", () => {
  it("should return null if the commit object is not there", () => {
    const result = convertCommitObj();
    const expectedResult = null;

    expect(result).toBe(expectedResult);
  });
  it("should throw an error if the commit object is invalid type", () => {
    const throwyFunction = () => convertCommitObj([1, 2, 3, 4]);
    const expectedResult = "THAT AINT AN OBJECT CHIEF.";

    expect(throwyFunction).toThrow(expectedResult);
  });
  it("should throw an error if the commit object information is invalid", () => {
    const commit = mockCommitData[0];
    commit.commit.message = null;

    const throwyFunction = () => convertCommitObj(commit);
    const expectedResult = "WHY YOU GIVE BAD OBJECT";

    expect(throwyFunction).toThrow(expectedResult);
  });
  it("should return an object if the commit object is there and well formed", () => {
    const expectedResult = {
      author: "Francis Bourgouin",
      commitUrl:
        "https://github.com/FrancisBourgouin/lectures-web-ft-apr03-2023/commit/cbf7646bc8ef0caf4685e08e9c51e3c69d7a08a8",
      dateCreated: "2023-05-19T17:52:25Z",
      message: "add w7d5 lecture",
    };
    const result = convertCommitObj(mockCommitData[1]);

    expect(result).toEqual(expectedResult);
  });
});
