var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var mensagemErro = document.querySelector("#erro-ajax");
        
        if( xhr.status == 200){
            var pacientes = JSON.parse(this.responseText);
            pacientes.forEach(function(paciente){
                adicionaPaciente(paciente);
            });

            mensagemErro.classList.add("invisivel");
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            mensagemErro.classList.remove("invisivel");
        }

    });
    xhr.send();
});