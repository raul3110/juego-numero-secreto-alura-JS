let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario===numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos}${(intentos ===1) ? ' vez' : ' veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        console.log(intentos);
    }
    console.log(numeroDeUsuario===numeroSecreto); //aqui ya comparo el numero secreto con el del usuario.*/
    return;// = = = es decir igual en valor e igual en tipo de datos...
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del juego secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${(numeroMaximo)}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja de texto
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //este espera dos parametros coloca esto en tal valor.
}

condicionesIniciales();
