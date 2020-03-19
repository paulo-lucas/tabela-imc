var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente");

    //Filtro
    if(this.value.length > 0){
        pacientes.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var filtro = new RegExp(campoFiltro.value, "i");
            if( !filtro.test(nome) ){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    }
});