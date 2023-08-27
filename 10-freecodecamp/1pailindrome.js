function palindrome(str) {
    let word = str.replace(/[\W_]+/g,"").toLowerCase();
    let reverseWord = word.split("").reverse().join("");
    return (word === reverseWord);
  }
  
  console.log(palindrome("eye"));