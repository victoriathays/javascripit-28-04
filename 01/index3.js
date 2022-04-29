//caixa de confirmação
let jogo = confirm("Você quer jogar?")

console.log(typeof jogo);
console.log(jogo);

if(jogo){
    window.location.href ="https://www.leagueoflegends.com/pt-br/";
}else{
    alert("Beleza, deixa para proxima!");
}