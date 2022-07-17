const assert = require("assert");
const word_search = require("../calculator/word_search");

describe("LeetCode No.79: Word Search", () => {
  describe("test1", () => {
    it("should return true for the word_search function", () => {
      let board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ];
      let word = "ABCCED";
      let result = true;
      assert.equal(word_search(board, word), result);
    });
  });

  describe("test2", () => {
    it("should return false for the word_search function", () => {
      let board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ];
      let word = "ABCB";
      let result = false;
      assert.equal(word_search(board, word), result);
    });
  });
});
