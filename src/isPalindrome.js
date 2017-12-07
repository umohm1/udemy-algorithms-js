function isPalindrome(string) {
  string = string.toLowerCase();
  let charsArr = string.split("");
  let validChars = "abcdefghijklmnopqrstuvwxyz".split("");

  let newArr = [];
  charsArr.forEach(letter => {
    if (validChars.indexOf(letter) > -1) newArr.push(letter);
  })

  return newArr.join("") === newArr.reverse().join("");
}

isPalindrome("Madam, I'm Adam");
