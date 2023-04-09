/* PEDIR AO USUÁRIO A QUANTIDADE DE CARTAS QUE ELE DESEJA, DE ACORDO COM AS CONDIÇÕES*/
let num = prompt("Por favor, insira a quantidade de cartas que deseja jogar:");
solicitaQtddeCartas();

function solicitaQtddeCartas(){
while ( num % 2 !== 0 || num < 4 || num >14) {
  num = prompt("Você não inseriu um número par. Por favor, insira um número par entre 4 e 14");
}


}
//------------------------------------------------------------------------------------------------------------------------------------
let carta1='';
let carta2 ='';
let primeiraCarta='';
let segundaCarta = '';
let contadorJogadas = 0;
let contadorClick = 0;
let contadorDeParesVirados =0;


const gifs=[
  'bobrossparrot.gif', 
  'explodyparrot.gif',
  'fiestaparrot.gif',
  'metalparrot.gif',
  'revertitparrot.gif',
  'tripletsparrot.gif',
  'unicornparrot.gif'
];


// Sortear as gifs-------------------------------------------------------------------------------------------------------------------------------------
const arrayParaSortear = [];
for( let i =0; i < num/2; i++){
  arrayParaSortear.push(gifs[i]);
  arrayParaSortear.push(gifs[i]);
}
arrayParaSortear.sort(comparador); 

function comparador() { 
	return Math.random() - 0.5; 
}

// Função que impede mais de dois clicks----------------------------------------------------------------------------------------------------------------



// Aplicar virar a carta com o click---------------------------------------------------------------------------------------------------------------------

function clickTurnCard(carta){
  
     carta1= carta.querySelector('.carta1');
     carta2 = carta.querySelector('.carta2');
    
    if(carta1.classList.contains('front') !== true && contadorClick === 0){
      contadorClick++;
      primeiraCarta = carta.querySelector('.carta2');
      contadorJogadas++;

      carta1.classList.add('front');
      carta2.classList.add('back');
    } else if(carta1.classList.contains('front') !== true && contadorClick ===1){
      
      contadorClick++;
      contadorJogadas++;
      segundaCarta = carta.querySelector('.carta2');
      carta1.classList.add('front');
      carta2.classList.add('back');

      //comparaCarta(primeiraCarta , segundaCarta);
      setTimeout(comparaCarta, 1000, primeiraCarta, segundaCarta);

    }

  
}
// Função que compara as imagens do verso-----------------------------------------------------------------------------------

function comparaCarta(a,b){
  const asrc = a.querySelector('img').src;
  const bsrc = b.querySelector('img').src;
  if(asrc === bsrc){
    contadorDeParesVirados++;

    contadorClick =0;
    primeiraCarta ='';
    segundaCarta ='';
  }else if(asrc !== bsrc){
    a.classList.remove('back');
    b.classList.remove('back');
    
    const aParent = a.parentNode.querySelector('.carta1')
    const bParent = b.parentNode.querySelector('.carta1')

    aParent.classList.remove('front');
    bParent.classList.remove('front');

    contadorClick =0;
    primeiraCarta =0;
    segundaCarta =0;
  }
  if(contadorDeParesVirados == num/2){
    alert(`Você ganhou em ${contadorJogadas} jogadas!`)
  }
}
// Aplicar setTimeOut-----------------------------------------------------------------------------------

// Aplicar dinamicamente a quantidade de cartas passadas pelo Usuario-----------------------------------------------------------------------------------

function addCards(){
    const listOfCards = document.querySelector('.allCards');
   
    for(let i = 0; i < num; i++){
      
   
      listOfCards.innerHTML +=  `<ul data-test:"card" onclick="clickTurnCard(this)" class="card">
            
                                  <li  class="carta1 face ">
                                    <img data-test:"face-down-image" src="../imagens/back.png">
                                  </li>

                                  <li class="carta2 back-face face">
                                    <img data-test:"face-up-image" src="./imagens/${arrayParaSortear[i]}">
                                  </li>

                                  </ul>`;
    }

    //Lista de Cartas do verso.

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------


addCards();