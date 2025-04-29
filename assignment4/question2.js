const amdPrices2 = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let averagePrice = 0;
let sumPrice = 0;

for(let prices of amdPrices2){
    sumPrice += prices;
}
averagePrice = sumPrice/amdPrices2.length;
console.log("The 7-day SMA of AMD is "  + averagePrice.toFixed(2));