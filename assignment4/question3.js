const amdPrices3 = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let avgPrice = 0;
let sumOfPrices = 0;
let count = 0;
for(let prices of amdPrices3){
    sumOfPrices += prices;
}
avgPrice = sumOfPrices/amdPrices3.length;

for(let prices of amdPrices3){
    if(prices>avgPrice){
        count++;

    }
}

console.log("Number of days AMD was above the 7-day SMA is: " + count);