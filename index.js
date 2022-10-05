let flag = false;
let element = document.getElementById("userInput");

function power(val){
	if(val=='on'){
		flag = true;
		element.innerText='';
		element.style.fontSize="20px";
		element.style.textAlign="left";
		element.style.backgroundColor="white";
	}else{
		flag = false;
		element.innerText='OFF';
		element.style.fontSize="40px";
		element.style.textAlign="center";
		element.style.backgroundColor="gray";
	}
}

function display(val){
	if(flag===true){
		let a = element.innerText;
		let b = a + val;
		element.innerText=b;
	}
}

function calc(){
	if(flag===true){
		let a = element.innerText;
		try {
			let b = eval(a);
			element.innerText=b;
		} catch (error) {
			element.innerText='';
		}
	}
}

function remove(val){
	if(flag===true && val=='del'){
		let a = element.innerText;
		let size = a.length;
		let b = a.substring(0,size-1);
		element.innerText=b;
	}
}