/* PEDIR AO USUÁRIO A QUANTIDADE DE CARTAS QUE ELE DESEJA, DE ACORDO COM AS CONDIÇÕES*/
let num = prompt("Por favor, insira a quantidade de cartas que deseja jogar:");
solicitaQtddeCartas();

function solicitaQtddeCartas(){
while ( num % 2 !== 0 || num < 4 || num >14) {
  num = prompt("Você não inseriu um número par. Por favor, insira um número par entre 4 e 14");
}


}

addCards();

const array=[
  'bobrossparrot.gif', 
  'explodyparrot.gif',
  'fiestaparrot.gif',
  'metalparrot.gif',
  'revertitparrot.gif',
  'tripletsparrot.gif',
  'unicornparrot.gif'
];
sorteando(array);

console.log(myArray);

//console.log(array)

// Aplicar virar a carta com o click---------------------------------------------------------------------------------------------------------------------

function clickTurnCard(carta){
  

    const carta1= carta.querySelector('.carta1');
    carta1.classList.toggle('front');

    const carta2 = carta.querySelector('.carta2');
    carta2.classList.toggle('back');
  
}


// Aplicar dinamicamente a quantidade de cartas passadas pelo Usuario-----------------------------------------------------------------------------------

function addCards(){
    const listOfCards = document.querySelector('.allCards');
    
   for(let i = 0; i < num; i++){

   
      listOfCards.innerHTML +=  `<ul onclick="clickTurnCard(this)" class="card">
            
                                  <li class="carta1 face ">
                                    <img src="../imagens/back.png">
                                  </li>

                                  <li class="carta2 back-face face">
                                    Verso
                                  </li>

                                  </ul>`;
    }

  
}


//Aplicar as cartas no verso de maneira aleatória--------------------------------------------------------------------------------------------------------
const myArray= [];
function sorteando(este){
  for( let i = 0; i < num; i++){
    myArray.push(este[i]);
  }

}
//-------------------------------------------------------------------------------------------------------------------------------------------------------
