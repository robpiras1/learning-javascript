// exercise02a
function randomArray(n){
	var a = [];
	for(var i=0; i<n; i++)
	a.push(Math.round(Math.random()*100))
	return a;
}

var a = randomArray(10);

//exercise02b
var odd = a.filter(function(item){
return item % 2 !== 0;
});

//exercise02c
odd.sort(function(value1,value2){
	return value1-value2;
});