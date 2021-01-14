var display = 0;
var operand = 0;
var option = '+';
var result;

function myClear(){
	
    result=0;
	display=0;
	operand=0;
	option='+';
	document.getElementById("screen").value = result;
}

function show(operand){
	display += operand;
	document.getElementById("screen").value = display;
}

function calculate(operator){
	console.log(operand);

	switch (option){

		case '+':
		result = parseFloat(parseFloat(operand) + parseFloat(display));
		document.getElementById("screen").value = result;
		break;

        case '-':
		result = parseFloat(parseFloat(operand) - parseFloat(display));
		document.getElementById("screen").value = result;
		break;

        case '*':
		result = parseFloat(parseFloat(operand) * parseFloat(display));
		document.getElementById("screen").value = result;
		break;

        case '/':
		result = parseFloat(parseFloat(operand) / parseFloat(display));
		document.getElementById("screen").value = result;
		break;

        case '=':
		document.getElementById("screen").value = result;
		break;
	}
    operand=result;
	display=0;
	option=operator;
	console.log("hello");
}	

