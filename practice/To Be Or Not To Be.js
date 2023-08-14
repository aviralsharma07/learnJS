/**
 * @param {string} val
 * @return {Object}
 */
var expect = function expect(val) {
    var obj = {};
    obj.val = val;
    obj.toBe = function(value){
        if (this.val !== value){
            throw new Error("Not Equal");
        }else{
            return true;
        }
    }
    
    obj.notToBe = function(value){
        if (this.val === value){
            throw new Error("Equal");
        }else{
            return true;
        }
    }

    return obj;
};


 console.log(expect(5).toBe(5)); // true
 console.log(expect(5).notToBe(5)); // throws "Equal";
 console.log(expect(5).toBe(null)); // throws "Not Equal"
