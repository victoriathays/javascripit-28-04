//mapear o h1
let elemento = document.getElementById("titulo");

elemento.style.backgroundColor = "#FF69B4";

elemento.innerText = "É muito bom aprender!";

elemento.innerHTML = "Outro html <p>aqui é um parágrafo</p>"
console.log(elemento);

//CRIAR UM ELEMENTO
let img = document.createElement('img');
img.src ="Henry e Alex.jpg";
img.style.width = "300px";
img.style.height = "300px";


let body = document.querySelector("body");

body.appendChild(img);