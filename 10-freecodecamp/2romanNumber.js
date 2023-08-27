function convertToRoman(num) {
    let obj = {
        M:	1000,
        CM:	900,
        D:	500,
        CD:	400,
        C:	100,
        XC:	90,
        L:	50,
        XL:	40,
        X:	10,
        IX:	9,
        V:	5,
        IV:	4,
        I:	1
    };
    let romanNumber = "";
    for (let key in obj){
        while (num >= obj[key]){
            romanNumber += key;
            num -= obj[key];
        }
    }
    return romanNumber;
   }
   
   console.log(convertToRoman(36));