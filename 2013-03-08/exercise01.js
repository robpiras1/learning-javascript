//exercise01a

function f(n){
var a = [];
for(var i=1; i<=n; i++)
a.push(i);
return a;
}


//exercise01b

var array = f(10);
array = array.filter(function(item){
return (item % 2 === 0);
});

//exercise01c

array = array.map(function(item){
   return item * 2;
});

//exercise01d

array = array.filter(function(item){
return (item % 4 === 0);
});

//exercise01e

var sum = array.reduce(function(prev, cur){
 return prev + cur;
});