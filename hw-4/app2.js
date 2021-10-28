const boardArray = [
  [1, 1, 2], // 0 1 2
  [2, 2, 2], // 3 4 5
  [1, 2, 1], // 6 7 8
];

function check(board) {
  let fl = [];
  fl = board[0].concat(board[1], board[2]);

  // check player 1
  if (fl[0] === 1 && fl[1] === 1 && fl[2] === 1) return 1;
  if (fl[3] === 1 && fl[4] === 1 && fl[5] === 1) return 1;
  if (fl[6] === 1 && fl[7] === 1 && fl[8] === 1) return 1;
  if (fl[0] === 1 && fl[3] === 1 && fl[6] === 1) return 1;
  if (fl[1] === 1 && fl[4] === 1 && fl[7] === 1) return 1;
  if (fl[2] === 1 && fl[5] === 1 && fl[8] === 1) return 1;
  if (fl[0] === 1 && fl[4] === 1 && fl[8] === 1) return 1;
  if (fl[6] === 1 && fl[4] === 1 && fl[2] === 1) return 1;

  // check player 2
  if (fl[0] === 2 && fl[1] === 2 && fl[2] === 2) return 2;
  if (fl[3] === 2 && fl[4] === 2 && fl[5] === 2) return 2;
  if (fl[6] === 2 && fl[7] === 2 && fl[8] === 2) return 2;
  if (fl[0] === 2 && fl[3] === 2 && fl[6] === 2) return 2;
  if (fl[1] === 2 && fl[4] === 2 && fl[7] === 2) return 2;
  if (fl[2] === 2 && fl[5] === 2 && fl[8] === 2) return 2;
  if (fl[0] === 2 && fl[4] === 2 && fl[8] === 2) return 2;
  if (fl[6] === 2 && fl[4] === 2 && fl[2] === 2) return 2;

  // check draw and unfinished game

  for (let i = 0; i < fl.length; i++) {
    if (!fl[i]) return -1;
  }
  for (let i = 0; i < fl.length; i++) {
    if (fl[i]) return 0;
  }
}

console.log(check(boardArray));
