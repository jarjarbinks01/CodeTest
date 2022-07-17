const assert = require('assert');
const sayHello = require('../index');
const getTheFirstLetterMatched = require('../test/demo')

describe('index', () => {
  describe('demo', () => {
    it('test', () => {
      let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
      let word = "ABCCED";
      assert.deepEqual(getTheFirstLetterMatched(board, word), [0, 1])
    })
  })
})
