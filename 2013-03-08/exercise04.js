function select(data, key, values){
var result = data.filter(function(item1){
	return values.some(function(item2){
	return item1[key] === item2;
	})
	})
	return result;
}