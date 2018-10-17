let nombre = 0;
let uns = 0;
let dix = 0;
let cent = 0;
let dixun = "";
let centstr = "";
let dixstr = "";
let unstr = "";
let nonante = "";

function demande () {
	nombre = prompt(`veuillez entrer un nombre entier entre 0 et 999`);
	console.log(nombre);
}

function versEnt () {
	parseInt(nombre);
	console.log(nombre);
	return nombre;
}

function verif () {	
	if (nombre < 0 || nombre > 999) {
		demande();
	}
	else {
		alert('ok')
		return true;
	}
}

function modulus () {
	 // let cent = nombre - (nombre % 100);
	 // console.log(cent);
	 // let dix = nombre - (nombre % 10);
	 uns = Math.floor(nombre % 10);
	 dix = Math.floor(nombre/10 % 10);
	 cent = Math.floor(nombre/100 % 10);
	 console.log(cent); 	
	 console.log(dix);
	 console.log(uns);
}

function unenstr () {
		switch (uns) {
			case 0: 
				unstr = "";
				return unstr;
			case 1:
				unstr = "un";
				return unstr;	
			case 2:
				unstr = "deux";
				return unstr;	
			case 3:
				unstr = "trois"
				return unstr;	
			case 4:
				unstr = "quatre";
				return unstr;
			case 5:
				unstr = "cinq";
				return unstr;	
			case 6:
				unstr = "six";
				return unstr;
			case 7:
				unstr = "sept";
				return unstr;	
			case 8:
				unstr = "huit";
				return unstr;
			case 9:
				unstr = "neuf";
				return unstr;	
			default:
				break;
	}
}

function dixadixneuf (a) {
	switch (a) {
		case 0:
			dixun = "dix";
			return dixun;
		case 1:
			dixun = "onze";
			return dixun;
		case 2:
			dixun = "douze";
			return dixun;	
		case 3:
			dixun = "treize"
			return dixun;	
		case 4:
			dixun = "quatorze";
			return dixun;
		case 5:
			dixun = "quinze";
			return dixun;	
		case 6:
			dixun = "seize";
			return dixun;
		case 7:
			dixun = "dix-sept";
			return dixun;	
		case 8:
			dixun = "dix-huit";
			return dixun;
		case 9:
			dixun = "dix-neuf";
			return dixun;	
		default:
			break;
	}
}


function dixenstr (b) {
		if (b != 1)	{
			switch (b) {
			case 0:
				dixstr = "";
				return dixstr;
			case 2:
				dixstr = "vingt";
				return dixstr;	
			case 3:
				dixstr = "trente"
				return dixstr;	
			case 4:
				dixstr = "quarante";
				return dixstr;
			case 5:
				dixstr = "cinquante";
				return dixstr;	
			case 6:
				dixstr = "soixante";
				return dixstr;
			case 7:
				dixstr = "soixante-dix";
				return dixstr;	
			case 8:
				dixstr = "quatre-vingt";
				return dixstr;
			case 9:
				dixstr = "quatre-vingt";
				return dixstr;	
			default:
				break;
		}
	}
	else {
		dixadixneuf();
	}
}	





function centenstr () {
		switch (cent) {
			case 0: 
				centstr = "";
				return centstr;
			case 1:
				centstr = "cent ";
				return centstr;	
			case 2:
				centstr = "deux cent ";
				return centstr;	
			case 3:
				centstr = "trois cent "
				return centstr;	
			case 4:
				centstr = "quatre cent ";
				return centstr;
			case 5:
				centstr = "cinq cent ";
				return centstr;	
			case 6:
				centstr = "six cent ";
				return centstr;
			case 7:
				centstr = "sept cent ";
				return centstr;	
			case 8:
				centstr = "huit cent ";
				return centstr;
			case 9:
				centstr = "neuf cent ";
				return centstr;	
			default:
				break;
	}
}


function principale () {
	demande();
	versEnt();
	verif();	
	modulus();
	dixadixneuf(ones);
	dixenstr(dix);
	unenstr();
	centenstr();
	if (dix == 7 || dix == 9) {
		dix = dix - 1;
		alert(centstr + dixenstr(dix) + "-" + dixadixneuf(uns));
	}
	else if (dix != 1 && dixstr != 0){
		alert(centstr +  dixstr + "-" + unstr);
	}
	else if (dix != 1 && dixstr == 0){
		alert(centstr + unstr);
	}
	else if (uns = 0) {
		console.log(centstr + dixstr);
		alert(centstr + dixstr);
	}
	else {
		alert(centstr +  dixun);
	}
	principale();
	
}




document.querySelector("#fr").addEventListener("click", function(){
	principale();
});

