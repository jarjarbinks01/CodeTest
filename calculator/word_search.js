/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


const checkNext = (x, y, board, word) => {
  if (!word.length) {
    return true;
  }
  if((x < 0) | (y < 0) | (x >= board.length) | (y >= board[0].length)){
    return false;
  }
  if (board[x][y] != word[0]) {
    return false;
  }

  const word2 = word.slice(1);

  board[x][y] = null;

  const result = checkNext(x + 1, y, board, word2)|
  checkNext(x - 1, y, board, word2)|
  checkNext(x, y + 1, board, word2)|
  checkNext(x, y - 1, board, word2);

  board[x][y] = word[0];

  return result;
};

const word_search = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
        if(checkNext(i, j, board, word)){
            return true;
        }
    }
  }
  return false;
};

module.exports = word_search;
