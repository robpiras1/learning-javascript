//exercise03a
function capitalizeWord(w) {
	var a = w.charAt(0);
	var b = w.slice(1);
	return a.toUpperCase().concat(b);
}

// exercise03b
function capitalizeText(t){
	var a = t.split(' ');
	a = a.map(function(item){
	return capitalizeWord(item);
	});
	var c = a.join(' ');
	return c;
}

capitalizeText("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");