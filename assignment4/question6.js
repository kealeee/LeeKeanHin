// Modify the code below:

const amdPrices6 = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]


let data = [];
let index = 0;

amdPrices6.sort((a, b) => a - b);
for (let price of amdPrices6){

	if (index < 3){
        data.push(price);
    }
    index++;
}

console.log("The three lowest prices are " + data[0] + ", " + data[1] + " and " + data[2]);
