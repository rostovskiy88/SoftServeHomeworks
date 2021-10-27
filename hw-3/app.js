const s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

function meeting(names) {
  let upperCase = names.toUpperCase();
  let newNames = upperCase.split(';');
  let mappedNames = newNames.map((el) => {
    return el.split(':');
  });
  let mappedArray;
  let pushed = [];
  for (let i = 0; i < mappedNames.length; i++) {
    mappedArray = mappedNames[i].map((el) => el.split(','));
    [mappedArray[0][0], mappedArray[1][0]] = [
      mappedArray[1][0],
      mappedArray[0][0],
    ];
    pushed.push([...mappedArray[(0, 0)], ...mappedArray[(0, 1)]]);
  }
  pushed.sort();
  let result = '';
  for (let i = 0; i < pushed.length; i++) {
    result += `(${pushed[i][0]}, ${pushed[i][1]})`;
  }
  console.log(result);
}

meeting(s);
