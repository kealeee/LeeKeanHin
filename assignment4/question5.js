const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let sumClosePrice = 0;
let avgClosePrice = 0;
for(let twoDaysPrices of disneyData){
	for(let prices in twoDaysPrices){
		
		if(prices === "close"){
			sumClosePrice += parseFloat(twoDaysPrices[prices]);
		}
	}
}

avgClosePrice = sumClosePrice/disneyData.length;
let roundedPrice = Math.round(avgClosePrice * 100) / 100;
console.log("Average closing price of Disney is " + roundedPrice.toFixed(2));
