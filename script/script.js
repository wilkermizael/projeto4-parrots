/* PEDIR AO USUÁRIO A QUANTIDADE DE CARTAS QUE ELE DESEJA, DE ACORDO COM AS CONDIÇÕES*/
/*let num = prompt("Por favor, insira a quantidade de cartas que deseja jogar:");
solicitaQtddeCartas();

function solicitaQtddeCartas(){
while ( num % 2 !== 0 || num < 4 || num >14) {
  num = prompt("Você não inseriu um número par. Por favor, insira um número par entre 4 e 14");
}

console.log(num);
}

*/


// Aplicar virar a carta com o click---------------------------------------------------------------------------------------------------------------------
function turnCard(){
    const carta1 = document.querySelector('.carta1');
    carta1.classList.toggle("front");

    const carta2 = document.querySelector('.carta2');
    carta2.classList.toggle("back");
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// Aplicar dinamicamente a quantidade de cartas passadasd pelo Usuario-----------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------------------------------------------