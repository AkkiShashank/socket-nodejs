function placeOrder(placeNumber){
	console.log("Customer order:",placeNumber);

	cookAndFood(function(){
		console.log("Delivery Customer order:",placeNumber);
	});
}

function cookAndFood(callback){
	setTimeout(callback,5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);