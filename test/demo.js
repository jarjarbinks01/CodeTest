/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCCED";
 var exist = function(board, word) {

    return word[0];
};

const getTheFirstLetterMatched = (board, word) => {
    for(let i = 0 ; i<=board.length ;  i++){
        for(let j = 0 ; j<=board[i].length ; j++){
            if(board[i][j] == word[1]){
                return [i, j];
            }
        }
    }
}

const getAdjacentLetter = (board, word) => {
    
}

module.exports = getTheFirstLetterMatched;