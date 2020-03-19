var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var tabela = document.querySelector("#tabela-pacientes");
	var form = document.querySelector("#form-adiciona");
	var paciente = getPaciente(form);
	var trPaciente = montaTr(paciente);
	var erros = validaPaciente(paciente);

	if(erros.length){
		exibeErros(erros);
		return;
	}

	tabela.appendChild(trPaciente);
	form.reset();
	limpaErros();
});

function getPaciente(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente){
	var trPaciente = document.createElement("tr");
	trPaciente.classList.add("paciente");

	trPaciente.appendChild(montaTd(paciente.nome, "info-nome"));
	trPaciente.appendChild(montaTd(paciente.peso, "info-peso"));
	trPaciente.appendChild(montaTd(paciente.altura, "info-altura"));
	trPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"));
	trPaciente.appendChild(montaTd(paciente.imc, "info-imc"));

	return trPaciente;
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
	var erros = [];

	if(paciente.nome.length == 0)
		erros.push("O nome não pode ser em branco.");

	if(paciente.peso.length == 0)
		erros.push("O peso não pode ser em branco.");
	else if(!validaPeso(paciente.peso))
		erros.push("Peso inválido.");
	
	if(paciente.altura.length == 0)
		erros.push("A altura não pode ser em branco.");
	else if(!validaAltura(paciente.altura))
		erros.push("Altura inválida.");

	if(paciente.gordura.length == 0)
		erros.push("A gordura não pode ser em branco.");
	
		return erros;
}

function exibeErros(erros){
	var log = document.querySelector(".log-erros");
	limpaErros();
	erros.forEach(function(erro){
		var liErro = document.createElement("li");
		liErro.textContent = erro;
		log.appendChild(liErro);
	});
}

function limpaErros(){
	var log = document.querySelector(".log-erros");
	log.innerHTML = "";
}