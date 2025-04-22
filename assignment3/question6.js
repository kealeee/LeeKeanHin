const disneyData3 = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
if (disneyData3['close'] > disneyData3['open']){
	if (disneyData3['volume']  > 100000){
		console.log("Strong Bullish")
	} 
    else{
		console.log("Bullish")
	}

}

else if (disneyData3['close'] < disneyData3['open']){
    if (disneyData3['volume'] > 10000){
		console.log("Strong Bearish")
	}
    else{
		console.log("Bearish")
	}
}

else if (disneyData3['close'] === disneyData3['open']){
    - console.log("neutral")

}
