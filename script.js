var botaoLigar = document.querySelector(".ligar")
var pegarimg = document.querySelector("#lampada")
var botaodesligar = document.querySelector(".desligar")
botaoLigar.addEventListener ("click", (e)=>{
    pegarimg.src="./img/ligada.jpg"
})

botaodesligar.addEventListener("click" , (e)=>{
    pegarimg.src=" ./img/desligada.jpg"
})

pegarimg.addEventListener("dblclick" ,(e)=>{
    pegarimg.src=" ./img/quebrada.jpg"
})