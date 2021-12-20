let btnProj = document.querySelector(".btnProj");
let btnSobr = document.querySelector(".btnSobr");
let btnCont = document.querySelector(".btnCont");
let divProjetos = document.getElementById("projetos");
let divSobre = document.getElementById("sobre");
let divContato = document.getElementById("contato");




btnProj.onclick = function(){
    divSobre.style.display = "none"
    divContato.style.display = "none"
    divProjetos.style.display = "flex"
    divProjetos.style.animation = "chegandoDir 2.5s"
}

btnSobr.onclick = function(){
    divProjetos.style.display = "none"
    divContato.style.display = "none"
    divSobre.style.display = "grid"
    divSobre.style.animation = "chegando 0.8s"
}

btnCont.onclick = function(){
    divSobre.style.display = "none"
    divProjetos.style.display = "none"
    divContato.style.display = "block"
    divContato.style.animation = "chegandoEsq 2s"
}

