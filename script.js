let btnProj = document.querySelector(".btnProj");
let btnSobr = document.querySelector(".btnSobr");
let btnCont = document.querySelector(".btnCont");
let divProjetos = document.getElementById("projetos");
let divSobre = document.getElementById("sobre");
let divContato = document.getElementById("contato");

let btnEsq = document.getElementById("esquerda");
let btnDir = document.getElementById("direita");

const projetos = {
    titulos : [
        "Clone Tiliform",
        "Clone Facebook",
        "Clone Starbucks",
        "API MARVEL"
    ], 
    resumos : [
        "Desenvolvi esse clone com objetivo de estética e procurando ser o mais fiel ao site original." ,
        "Desenvolvi esse clone do Facebook enquanto aprendia animações, e também fiz sua tela de Login, Perfil e Timeline.",
        "Desenvolvi esse clone com o intuito de fazer um carrossel de imagens, usando o Javascript.",
        "Desenvolvi esse projeto com a API da Marvel fazendo uma wiki de personagens, contando poucas informações."
    ],
    imagens : [
        "https://user-images.githubusercontent.com/67977860/142426612-cd40f5ff-7246-462f-bb56-97b60c9d7353.png",
        "https://user-images.githubusercontent.com/67977860/142443039-f248d279-a4b2-4600-bf70-1ae62ae797a6.gif",
        "https://user-images.githubusercontent.com/67977860/142000259-426dd3ea-4423-4c1b-bd69-b96c48085934.png",
        "https://user-images.githubusercontent.com/67977860/148709755-1fab68e3-70ed-43f4-b39b-d9281c46c732.png",
    ],
    links : [
        "https://github.com/jvinicius1505/Clone-Tiliform",
        "https://github.com/jvinicius1505/Clone-do-Facebook",
        "https://github.com/jvinicius1505/Clone-Starbucks",
        "https://github.com/jvinicius1505/API-Marvel",
    ]    
}

let i = 0;
let tamanho = projetos.titulos.length - 1;
console.log(tamanho);

let caixaImagem = document.querySelector(".caixaImagem");
let titulo = document.querySelector(".nome");
let resumo = document.querySelector(".resumo");
let link = document.querySelector(".link");

window.onload = function(){    
    titulo.textContent = projetos.titulos[i];
    caixaImagem.setAttribute("src", projetos.imagens[i]);
    resumo.textContent = projetos.resumos[i]; 
    link.setAttribute("href", projetos.links[i]);
}

btnDir.onclick = function(){    
    if(i == tamanho){
        i = 0;
        titulo.textContent = projetos.titulos[i];
        caixaImagem.setAttribute("src", projetos.imagens[i]);
        resumo.textContent = projetos.resumos[i];  
        link.setAttribute("href", projetos.links[i]);

    } else{
        i++;
        titulo.textContent = projetos.titulos[i];
        caixaImagem.setAttribute("src", projetos.imagens[i]);
        resumo.textContent = projetos.resumos[i];   
        link.setAttribute("href", projetos.links[i]);
    } 
}

btnEsq.onclick = function(){    
    if(i == 0){
        i = tamanho;
        titulo.textContent = projetos.titulos[i];
        caixaImagem.setAttribute("src", projetos.imagens[i]);
        resumo.textContent = projetos.resumos[i];  
        link.setAttribute("href", projetos.links[i]);

    } else{
        i--;
        titulo.textContent = projetos.titulos[i];
        caixaImagem.setAttribute("src", projetos.imagens[i]);
        resumo.textContent = projetos.resumos[i];  
        link.setAttribute("href", projetos.links[i]); 
    } 
}

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