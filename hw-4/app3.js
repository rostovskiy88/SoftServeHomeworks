function ipsBetween(address1, address2) {
  const split1 = address1.split('.');
  const split2 = address2.split('.');
  let result1 = 0;
  for (let i = 0; i < split1.length; i++) {
    result1 += split1[i] * Math.pow(256, 3 - i);
  }
  let result2 = 0;
  for (let i = 0; i < split2.length; i++) {
    result2 += split2[i] * Math.pow(256, 3 - i);
  }
  return result2 - result1;
}

console.log(ipsBetween('10.0.0.0', '10.0.0.50')); // 50
console.log(ipsBetween('20.0.0.10', '20.0.1.0')); // 246
console.log(ipsBetween('10.0.0.0', '10.0.1.0')); // 256
console.log(ipsBetween('0.0.0.0', '255.255.255.255')); // all-1
