const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let sumOfClosePrice = 0;
let AverageSumOfClosePrice = 0;

for(let closePrice in msftData){
	sumOfClosePrice += msftData[closePrice][3];
}

AverageSumOfClosePrice = sumOfClosePrice/msftData.length;
console.log("Average closing price of MSFT is " + AverageSumOfClosePrice.toFixed(2));
