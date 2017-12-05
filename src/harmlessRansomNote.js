function harmlessransomnote(noteText, magazineText) {
  let noteArr = noteText.split(' ');
  let magArr = magazineText.split(' ');
  let magObj = {};

  magArr.forEach(word => {
    if (!magObj[word]) magObj[word] = 0;
      magObj[word]++;
    });

  let isNotePossible = true;
  noteArr.forEach(word => {
    if (magObj[word]) {
      magObj[word]--;
    if (magObj[word] < 0) isNotePossible = false;
  }
    else noteIsPossible = false;
  });
  return isNotePossible;
}

harmlessRansomNote('hello there what is your name', 'is there a hello in what is in your name');
