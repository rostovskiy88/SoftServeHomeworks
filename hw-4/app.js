const boardArray = [
  [1, 2, 2], // 0 1 2
  [2, 1, 1], // 3 4 5
  [1, 2, 1], // 6 7 8
];

function check(board) {
  let fl = [];
  fl = board[0].concat(board[1], board[2]);

  // check player 1 and player 2 win condition
  for (let i = 1; i <= 2; i++) {
    if (fl[0] === i && fl[1] === i && fl[2] === i) return i;
    if (fl[3] === i && fl[4] === i && fl[5] === i) return i;
    if (fl[6] === i && fl[7] === i && fl[8] === i) return i;
    if (fl[0] === i && fl[3] === i && fl[6] === i) return i;
    if (fl[1] === i && fl[4] === i && fl[7] === i) return i;
    if (fl[2] === i && fl[5] === i && fl[8] === i) return i;
    if (fl[0] === i && fl[4] === i && fl[8] === i) return i;
    if (fl[6] === i && fl[4] === i && fl[2] === i) return i;
  }

  // check draw and unfinished game

  for (let i = 0; i < fl.length; i++) {
    if (!fl[i]) return -1;
  }
  for (let i = 0; i < fl.length; i++) {
    if (fl[i]) return 0;
  }
}

console.log(check(boardArray));
