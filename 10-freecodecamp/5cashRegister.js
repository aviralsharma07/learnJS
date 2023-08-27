const DENOMINATIONS = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
}; 

const REGISTER_STATUS = {
    "closed": "CLOSED",
    "insufficientFunds": "INSUFFICIENT_FUNDS",
    "open": "OPEN"
};

function checkCashRegister(price,cash,cid){

    let change = cash*100 - price*100;
    let cidTotal = getTotalDrawerMoney(cid);
    
    if (change > cidTotal){
        return {status: REGISTER_STATUS.insufficientFunds, change:[]};
    }
    
    else if (change === cidTotal){
        return {status: REGISTER_STATUS.closed, change:cid};
    }
    
    else{
        let answer = [];
        cid = cid.reverse();
        for (let currency of cid){
            let  holder = [currency[0],0];
            currency[1] = currency[1]*100;
            while (change >= DENOMINATIONS[currency[0]] && currency[1]>0){
                console.log(currency[1]);
                change -= DENOMINATIONS[currency[0]];
                currency[1] = DENOMINATIONS[currency[0]];
                holder[1] += DENOMINATIONS[currency[0]]/100;
            }
            if (holder[1] > 0){
                answer.push(holder);
            }
        }
        if (change >= 0){
            return {status: REGISTER_STATUS.insufficientFunds, change:[]};
        }

        return {status: REGISTER_STATUS.open, change:answer};
    }

}

function getTotalDrawerMoney(cid){
    let total = 0;
    for (let currency of cid){
        total += currency[1]*100;
    }
    return total;
}


let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let res = checkCashRegister(19.5, 20, cid);

console.log(res);