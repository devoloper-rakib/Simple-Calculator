// create a display function
function calculator(calculate) {
	document.getElementById('myResult').value += calculate;
}

// create a delete function when clicking in
function deleteMe() {
	document.getElementById('myResult').value = '';
}

// create a functional calculator by eval(it's risky do not use second time )
function answer() {
	const a = document.getElementById('myResult').value;
	const b = eval(a);
	document.getElementById('myResult').value = b;
}
