// var flagop=0;
// var string="";
// var result="";
// function reply_click(clicked_id){
// 	var str="";
// 	if (clicked_id=="*" || clicked_id=="+" || clicked_id=="-" || clicked_id=="/") {
// 		flagop=flagop+1;
// 		if (flagop==2) {
// 			str=string;
// 			string=calculate(str);
// 			flagop=1;
// 		}
// 		op=clicked_id;
// 	}
// 	string=string+clicked_id;
// 	document.getElementById("op").innerHTML=string;
// }

// function calculate(str){
// 	var op="";
// 	var n=0;
// 	var n1=str.indexOf("+");
// 	var n2=str.indexOf("-");
// 	var n3=str.indexOf("*");
// 	var n4=str.indexOf("/");
// 	if (n1>0) {op="+";n=n1;}
// 	else if (n2>0) {op="-";n=n2;}
// 	else if (n3>0) {op="*";n=n3;}
// 	else {op="/";n=n4;}
// 	var num1=Number(str.substring(0, n));
// 	var num2 = Number(str.substring((n+1), str.length));
//       	switch(op) {
//       			case "*":
//     				result=num1*num2;
//     				document.getElementById("op").innerHTML =result;
//     				break;
//     			case "+":
//     				result=num1+num2;
//     				document.getElementById("op").innerHTML =result;
//     				break;
//     			case "-":
//     				result=num1-num2;
//     				document.getElementById("op").innerHTML =result;
//     				break;
//     			case "/":
//     				result=num1/num2;
//     				document.getElementById("op").innerHTML =result;
//     				break;
//       	}
// 	str=result;
// 	return str;
// }

var string="";
var op="";
var flag=0;
var result=0;

function reply_click(clicked_id){
	string=string+clicked_id;
	console.log(string);
	document.getElementById("op").innerHTML =string;
}

function reply_op(clicked_id){
	flag=flag+1;
	if (flag==1) {
		op=clicked_id;
		result=string;
		string="";
	}
	if (flag==2) {
		result=calculate(result,string,op);
		console.log(result+op+string);
		op=clicked_id;
		console.log(op);
		flag=1;
		string="";
	}
}

function calculate(result,string,op){
	switch(op) {
      	case "*":
    		result=Number(result)*Number(string);
    		document.getElementById("op").innerHTML =result;
    		return result;
    		break;
    	case "+":
    		result=Number(result)+Number(string);
    		document.getElementById("op").innerHTML =result;
    		return result;
    		break;
    	case "-":
    		result=Number(result)-Number(string);
    		document.getElementById("op").innerHTML =result;
    		return result;
    		break;
    	case "/":
    		result=Number(result)/Number(string);
    		document.getElementById("op").innerHTML =result;
    		return result;
    		break;
      	}
}