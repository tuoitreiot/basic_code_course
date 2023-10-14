function init() {	
	var usdBtn = document.getElementById("usd_btn");
	var sgdBtn = document.getElementById("sgd_btn");
	var jpyBtn = document.getElementById("JPY_btn");
	usdBtn.onclick = convertVndToUsd;
	sgdBtn.onclick = convertVndToSgd;
	jpyBtn.onclick = convertVndToJpy;

}
	function convertVndToJpy() {
		var vndValue = document.getElementById(vnd_money).value;
		var jpyConverted = vndValue / 163;
		alert(vndValue + "VND" + " is equal " + jpyConverted + " JPY");
	}

	function  convertVndToSgd() {
		var vndValue = document.getElementById(vnd_money).value;
		var sgdConverted = vndValue / 17000;
		alert(vndValue + " VND " + " is eual " + sgdConverted + " SGD" );
	} 	


	function convertVndToUsd() {
		var vndValue = document.getElementById(vnd_money).value;
		var usdConverted = vndValue / 25000;
		alert(vndValue + " VND " +"is equal " + usdConverted + " USD");

	}


window.onload = init;