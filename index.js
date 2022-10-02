
let flag = false;

function power(val){
	if(val=='on' && flag===false){
		flag = true;
	}else if(val=='on' && flag===true){
		remove('ac');
	}else{
		flag = false;
		document.getElementById("userInput").innerText='';
	}
}

function display(val) {
	if(flag===true){
		let a = document.getElementById("userInput").innerText;
		let b = a + val;
		document.getElementById("userInput").innerText=b;
	}
}

function calc(){
	if(flag===true){
		let a = document.getElementById("userInput").innerText;
		let first = a.substring(0,1);
		if(first=='/' || first=='*' || first=='+' || first=='-' || first=='%'){
			document.getElementById("userInput").innerText='';
		}else{
			let b = eval(a);
			document.getElementById("userInput").innerText=b;
		}
	}
}

function remove(val){
	if(flag===true && val=='del'){
		let a = document.getElementById("userInput").innerText;
		let size = a.length;
		let b = a.substring(0,size-1);
		document.getElementById("userInput").innerText=b;
	}

	if(flag===true && val=='ac'){
		document.getElementById("userInput").innerText='';
	}
}