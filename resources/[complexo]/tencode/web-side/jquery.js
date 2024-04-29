/* ---------------------------------------------------------------------------------------------------------------- */
$(document).ready(function(){
	document.onkeyup = function(data){
		if (data["which"] == 27){
			$.post("http://tencode/closeSystem");
		};
	};
});
/* ---------------------------------------------------------------------------------------------------------------- */
window.addEventListener("message",function(event){
	if (event["data"]["tencode"] == true){
		$("#divCode").css("display","block");
	}

	if (event["data"]["tencode"] == false){
		$("#divCode").css("display","none");
	}

	if (event["data"]["radar"] == true){
		$("#topRadar").css("display","block");
		$("#botRadar").css("display","block");
	}

	if (event["data"]["radar"] == false){
		$("#topRadar").css("display","none");
		$("#botRadar").css("display","none");
	}

	if (event["data"]["radar"] == "top"){
		$("#topRadar").html("<legend>RADAR DIANTEIRO</legend><c>PLACA:</c> "+ event["data"]["plate"] +"<br><c>MODELO:</c> <v>"+ event["data"]["Model"] +"</v><br><c>VELOCIDADE:</c> "+ parseInt(event["data"]["speed"]) +" KMH");
	}

	if (event["data"]["radar"] == "bot"){
		$("#botRadar").html("<legend>RADAR TRASEIRO</legend><c>PLACA:</c> "+ event["data"]["plate"] +"<br><c>MODELO:</c> <v>"+ event["data"]["Model"] +"</v><br><c>VELOCIDADE:</c> "+ parseInt(event["data"]["speed"]) +" KMH");
	}
});
/* ---------------------------------------------------------------------------------------------------------------- */
const clickCode = (data) => {
	$.post("http://tencode/sendCode",JSON.stringify({ code: data }));
};