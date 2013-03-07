function identity(n){
	for(var i=1; i<=n; i+=1){
	var raw = '';
	for(var j=1; j<=n; j+=1){
	if(i===j)
	raw += 1+'\t';
	else raw += 0+"\t";
	}
	console.log(raw);
	}
}