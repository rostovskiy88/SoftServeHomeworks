let EncryptedMessage =
  'Yesterday, we bumped into Laura. It had to happen, but you cant deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';

function decryptMessage(message) {
  // split into sentences and push to array
  let result = message.match(/[^\.!\?]+[\.!\?]+/g);
  for (let i = 0; i < result.length; i++) {
    result[i].match(/\b(\w+)\b/g);
  }
  let allSentences = [];
  for (let i = 0; i < result.length; i++) {
    allSentences.push(
      result[i].replace(/[.,\/#!%\^&\*;":'\_`()]/g, '').trimLeft()
    );
  }

  // divide fisrt and rest sentences
  let firstSentence = allSentences[0];
  allSentences.shift();

  // count number of words
  let wordCountFirst = firstSentence.match(/(\w+)/g);
  let wordFirstLength = wordCountFirst.map((el) => el.length);
  let wordCountRest = allSentences.map((el) => el.match(/(\w+)/g));

  // add words to secret message
  let secretMessage = '';
  for (let i = 0; i < wordFirstLength.length; i++) {
    secretMessage += wordCountRest[i][wordFirstLength[i] - 1] + ' ';
  }
  return (
    secretMessage.charAt(0).toUpperCase() +
    secretMessage.slice(1).trimEnd() +
    '.'
  );
}

console.log(decryptMessage(EncryptedMessage));
// 'The mission has been done.'  //result
