/* PEDIR AO USUÁRIO A QUANTIDADE DE CARTAS QUE ELE DESEJA, DE ACORDO COM AS CONDIÇÕES*/
let num = prompt("Por favor, insira a quantidade de cartas que deseja jogar:");
solicitaQtddeCartas();

function solicitaQtddeCartas(){
while ( num % 2 !== 0 || num < 2 || num >14) {
  num = prompt("Você não inseriu um número par. Por favor, insira um número par entre 2 e 14");
}

console.log(num);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------
