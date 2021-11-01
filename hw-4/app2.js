var string =
  "Yesterday, we bumped into Laura. It had to happen, but you can't deny the timing couldn't be worse. The \"mission\" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn't been a pleasurable experience to go through it. I wanted to feel done with it first. Actually, forget I said that. It was probably for the best - staying on this forever wasn't going lead anywhere good. I mean, I should not hold on to it forever. For what it's worth, I'm glad it forced me to get out of this dreamy illusion. A lesson for further down the road. A sort of instructions manual for life is what these past weeks have been, and it was all thanks to her.";

function decryptMessage(string) {
  // split into sentences and push to array
  let sentencesArray = [];
  sentencesArray = string.match(/[^\.!\?]+[\.!\?]+/g);
  //console.log(sentencesArray);
  let allSentences = [];
  let wordFirstLength = [];
  let secretMessage = '';
  let wordCountRest = [];
  let mymessage;

  for (let i = 0; i < string.length; i++) {
    //sentencesArray = message.match(/[^\.!\?]+[\.!\?]+/g);
    for (let i = 0; i < sentencesArray.length; i++) {
      sentencesArray[i].match(/\b(\w+)\b/g);
    }
    allSentences = [];
    for (let i = 0; i < sentencesArray.length; i++) {
      allSentences.push(
        sentencesArray[i].replace(/[.,\/#!%\^&\*;":'\_`()]/g, '').trimLeft()
      );
    }
    // divide fisrt and rest sentences
    let firstSentence = allSentences[0];
    if (firstSentence === undefined) return mymessage;
    //console.log(firstSentence); // check if different parts of encrypted message involved
    allSentences.shift();
    // count number of words
    let wordCountFirst = firstSentence.match(/(\w+)/g);
    wordFirstLength = wordCountFirst.map((el) => el.length);
    wordCountRest = allSentences.map((el) => el.match(/(\w+)/g));
    // add words to secret message
    decrypt();
    sentencesArray.splice(0, wordFirstLength.length + 1);
  }
  function decrypt() {
    for (let i = 0; i < wordFirstLength.length; i++) {
      secretMessage += wordCountRest[i][wordFirstLength[i] - 1] + ' ';
    }
    mymessage =
      secretMessage.charAt(0).toUpperCase() +
      secretMessage.slice(1).trimEnd() +
      '.';
  }
  return mymessage;
}

console.log(decryptMessage(string));
