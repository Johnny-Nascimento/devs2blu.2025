//const btnExemplo01 = document.getElementById('btnExemplo01');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');
const divContadores = document.getElementById('divContadores');

const clickBotaoExemplo01 = function () {
    alert('Bolinha!')
}

const clickBotaoExemplo02 = () => {
    alert('Clicou!')
}

const clickBtnIncrementar = () => {
    let contadores = document.getElementsByClassName('contador');
    let contador = contadores[contadores.length - 1];

    if (contador.innerText == 10) {
        adicionarContador();
    } else {
        contador.innerText++;
    }
}

const clickBtnDecrementar = () => {
    let contadores = document.getElementsByClassName('contador');
    let contador = contadores[contadores.length - 1];

    contador.innerText--;

    if (contador.innerText == 0) {
        divContadores.removeChild(contador);
    }
}

const adicionarContador = () => {
    let contadorBase = document.getElementsByClassName('contador')[0];
    let contadorNovo = contadorBase.cloneNode();

    contadorNovo.innerText = 1;
    divContadores.appendChild(contadorNovo);
}

const limparTela = () => {
    let contadorBase = document.getElementsByClassName('contador')[0];
    let contadorNovo = contadorBase.cloneNode();

    divContadores.innerHTML = "";

    contadorNovo.innerText = 0;
    divContadores.appendChild(contadorNovo);
}

//btnExemplo01.addEventListener('click', clickBotaoExemplo01)
btnIncrementar.addEventListener('click', clickBtnIncrementar)
btnDecrementar.addEventListener('click', clickBtnDecrementar)
btnLimpar.addEventListener('click', limparTela);