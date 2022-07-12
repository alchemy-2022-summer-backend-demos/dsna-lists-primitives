const { reverseWords, titleCase } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});

describe("titleCase", () => {
  it("should title case the words of a sentence", () => {
    expect(titleCase("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
});
