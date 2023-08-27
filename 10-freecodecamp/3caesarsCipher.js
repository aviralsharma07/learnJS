function rot13(str) {
    let code = {
        A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z",
        N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"
    };
    let encryptedWord = str.split("");
    let decryptedWord = "";
    for (let i = 0; i < encryptedWord.length; i++) {
        if (code.hasOwnProperty(encryptedWord[i])){
            decryptedWord += code[encryptedWord[i]];
        }else{
            decryptedWord += encryptedWord[i];
        }
    }
    return decryptedWord;
  }
  
  let ans = rot13("SERR PBQR PNZC");

console.log(ans);