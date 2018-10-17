let number;
let ones;
let tens;
let hundreds;
let tensones;
let hundredstr = "";
let tenstr = "";
let onestr = "";

function ask () {
	number = prompt(`please input a integer number between 0 and 999`);
	console.log(number);
}

function toInt () {
	parseInt(number);
	console.log(number);
	return number;
}

function check () {	
	if (number < 0 || number > 999) {
		ask();
	}
	else {
		alert('ok')
		return true;
	}
}

function modulo () {
	 // let hundreds = number - (number % 100);
	 // console.log(hundreds);
	 // let tens = number - (number % 10);
	 ones = Math.floor(number % 10);
	 tens = Math.floor(number/10 % 10);
	 hundreds = Math.floor(number/100 % 10);
	 console.log(hundreds); 	
	 console.log(tens);
	 console.log(ones);
}

function onetostr () {
		switch (ones) {
			case 0: 
				onestr = "";
				return onestr;
			case 1:
				onestr = "one";
				return onestr;	
			case 2:
				onestr = "two";
				return onestr;	
			case 3:
				onestr = "three"
				return onestr;	
			case 4:
				onestr = "four";
				return onestr;
			case 5:
				onestr = "five";
				return onestr;	
			case 6:
				onestr = "six";
				return onestr;
			case 7:
				onestr = "seven";
				return onestr;	
			case 8:
				onestr = "eight";
				return onestr;
			case 9:
				onestr = "nine";
				return onestr;	
			default:
				break;
	}
}

function tentoninteen () {
	if (tens === 1) {
		switch (ones) {
			case 0:
				tensones = "ten";
				return tensones;
			case 1:
				tensones = "eleven";
				return tensones;
			case 2:
				tensones = "twelve";
				return tensones;	
			case 3:
				tensones = "thirteen"
				return tensones;	
			case 4:
				tensones = "fourteen";
				return tensones;
			case 5:
				tensones = "fifteen";
				return tensones;	
			case 6:
				tensones = "sixteen";
				return tensones;
			case 7:
				tensones = "seventeen";
				return tensones;	
			case 8:
				tensones = "eighteen";
				return tensones;
			case 9:
				tensones = "nineteen";
				return tensones;	
			default:
				break;
		}
	}

	else {
		tensones = "tenstr-" + "onestr";
		return tensones;
	}	

}

function tentostr () {
		if (tens != 1)	{
			switch (tens) {
			case 0:
				tenstr = "";
				return tenstr;
			case 2:
				tenstr = "twenty";
				return tenstr;	
			case 3:
				tenstr = "thirty"
				return tenstr;	
			case 4:
				tenstr = "forty";
				return tenstr;
			case 5:
				tenstr = "fifty";
				return tenstr;	
			case 6:
				tenstr = "sixty";
				return tenstr;
			case 7:
				tenstr = "seventy";
				return tenstr;	
			case 8:
				tenstr = "eighty";
				return tenstr;
			case 9:
				tenstr = "ninety";
				return tenstr;	
			default:
				break;
		}
	}
	else {
		tentoninteen();
	}
}	

function hundredtostr () {
		switch (hundreds) {
			case 0: 
				hundredstr = "";
				return hundredstr;
			case 1:
				hundredstr = "one hundred ";
				return hundredstr;	
			case 2:
				hundredstr = "two hundred ";
				return hundredstr;	
			case 3:
				hundredstr = "three hundred "
				return hundredstr;	
			case 4:
				hundredstr = "four hundred ";
				return hundredstr;
			case 5:
				hundredstr = "five hundred ";
				return hundredstr;	
			case 6:
				hundredstr = "six hundred ";
				return hundredstr;
			case 7:
				hundredstr = "seven hundred ";
				return hundredstr;	
			case 8:
				hundredstr = "eight hundred ";
				return hundredstr;
			case 9:
				hundredstr = "nine hundred ";
				return hundredstr;	
			default:
				break;
	}
}

function main () {
	ask();
	toInt();
	check();	
	modulo();
	tentoninteen();
	tentostr();
	onetostr();
	hundredtostr();
	if (tens != 1){
		alert(hundredstr +  tenstr + "-" + onestr);
	}
	else if (ones = 0) {
		console.log(hundredstr + tenstr);
		alert(hundredstr + tenstr);
	}
	else {
		alert(hundredstr +  tensones);
	}
	main();
	
}




document.querySelector("#eng").addEventListener("click", function(){
	main();
});

