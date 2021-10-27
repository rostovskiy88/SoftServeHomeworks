function meeting([...rooms], chairs) {
  let numChairs;
  availChairs = [];
  let count = 0;

  if (chairs === 0) {
    return console.log('Game On');
  }

  for (let i = 0; i < rooms.length; i++) {
    if (count >= chairs) {
      console.log(availChairs);
      return;
    }
    if (rooms[i].slice(0, 1).join().length <= rooms[i][1]) {
      numChairs = rooms[i][1] - rooms[i].slice(0, 1).join().length;
      availChairs.push(numChairs);
      count += numChairs;
    } else {
      numChairs = 0;
      availChairs.push(numChairs);
    }
  }
  if (count >= chairs) {
    console.log(availChairs);
    return;
  } else {
    console.log('Not enough!');
    return;
  }
}

//check
meeting(
  [
    ['XXX', 3],
    ['XXXXX', 6],
    ['XXXXXX', 9],
  ],
  4
);

meeting(
  [
    ['XXX', 1],
    ['XXXXXX', 6],
    ['X', 2],
    ['XXXXXX', 8],
    ['X', 3],
    ['XXX', 1],
  ],
  5
);

meeting(
  [
    ['XX', 2],
    ['XXXX', 6],
    ['XXXXX', 4],
  ],
  0
);
