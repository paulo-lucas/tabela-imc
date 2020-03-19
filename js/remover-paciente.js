var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	var alvo = event.target;

	alvo.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		alvo.parentNode.remove();
	}, 500);
});