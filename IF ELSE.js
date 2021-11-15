//<!--CHRISTIAN ALDANA 0909-21-697-->

// Inicialización de variables
let cartasDestapadas = 0;
let temporizador = false;
const timerInicial = 30;
let timer = timerInicial;
let aciertos = 0;
let movimientos = 0;

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.3;});

// Apuntado a documento HTML
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');
let mostratrMovimientos = document.getElementById('movimientos');

//Funciones

function contarTiempo(){
  tiempoRegresivoID = setInterval(()=>{
    timer--;
    mostrarTiempo.innerHTML = `Tiempo restante: ${timer} segundos`;
    if(timer == 0){
      clearInterval(tiempoRegresivoID);
      bloquearCartas();
    }    
  },1000)
}

function bloquearCartas(){
  for (let i =0; i<=15; i++){
    let cartaBloqueada = document.getElementById(i);
    cartaBloqueada.innerHTML = numeros[i];
    cartaBloqueada.disabled = true;
  }
}

//Función principal

function destapar(id){
  //Inicializar contador tiempo regresivo
  if (temporizador == false){
    contarTiempo();
    temporizador = true;
  }

  cartasDestapadas++;

  if(cartasDestapadas == 1){
    //Mostrar Número
    let carta1 = document.getElementById(id);
    primerResultado = numeros[id];
    carta1.innerHTML = primerResultado;

    //Deshabilitar Botón
    carta1.disabled = true;

    //Guardar Primer ID
    primerId = id;

  }else if(cartasDestapadas == 2){
    //Mostrar Número
    let carta2 = document.getElementById(id);
    segundoResultado = numeros[id]
    carta2.innerHTML = segundoResultado;

    //Deshabilitar Botón
    carta2.disabled = true;

    //Incrementar movimientos
    movimientos++;
    mostratrMovimientos.innerHTML = `Movimientos: ${movimientos}`

    //Guardar Segundo ID
    segundoId = id;

    if(primerResultado == segundoResultado){
      //Encerar contador de cartas destapadas
      cartasDestapadas = 0;

      //Aumentar aciertos
      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

      //Mostrar mensajes finales
      if(aciertos == 8){
        clearInterval(tiempoRegresivoID);
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} `;
        mostrarTiempo.innerHTML = `Fantastico!  ${timerInicial - timer} NUEVO RECORD`;
        mostratrMovimientos.innerHTML = `Movimientos: ${movimientos} NICE`;
      }

    }else{
      //Mostrar Momentaneamente valores y volver a tapar
      setTimeout(()=>{
        carta1 = document.getElementById(primerId);
        carta2 = document.getElementById(segundoId);
        carta1.disabled = false;
        carta2.disabled = false;
        carta1.innerHTML = ' ';
        carta2.innerHTML = ' ';
        cartasDestapadas = 0;
      },800)
    }
  }
}