var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i++){
	var peso = paciente[i].querySelector(".info-peso").textContent;
	var altura  = paciente[i].querySelector(".info-altura").textContent;
	var tdImc = paciente[i].querySelector(".info-imc");
	var imc = calculaImc(peso, altura);	
		
	if(!validaPeso(peso)){
		tdImc.textContent = "Peso inválido";
		paciente[i].classList.add("paciente-invalido");
	}
	else if(!validaAltura(altura)){
		tdImc.textContent = "Altura inválida";
		paciente[i].classList.add("paciente-invalido");
	}
	else{
		tdImc.textContent = imc;
	}
}

function validaPeso(peso){
	if(peso > 0 && peso < 1000)
		return true;
	else
		return false;
}

function validaAltura(altura){
	if(altura > 0 && altura < 3.00)
		return true;
	else
		return false;
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso/(altura * altura);
	return imc.toFixed(2);
}