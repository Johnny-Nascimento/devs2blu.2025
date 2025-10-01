
let numeroDivAtual = 0;
divAtual = document.getElementById('divContador' + numeroDivAtual);

// Incremento

const Incrementar = () => {

    if (numeroDivAtual == 0 || divAtual.innerText == 10)
        CriaDiv();

    ++divAtual.innerText;
}

let intervaloIncrementar;

const IncrementarDown = () => {
    intervaloIncrementar = setInterval(Incrementar, 100);
}

document.getElementById('btnIncrementar').
addEventListener('click', Incrementar);

// ****************
document.getElementById('btnIncrementar').
addEventListener('mousedown', IncrementarDown);

document.getElementById('btnIncrementar').
addEventListener('mouseup', ()=>{clearInterval(intervaloIncrementar)});

// ****************

// Decremento

const Decrementar = () => {

    if (numeroDivAtual <= 0)
        return;

    if (divAtual.innerText == 0)
    {
        const mainTag = document.querySelector('main');
        mainTag.removeChild(divAtual);

        numeroDivAtual--;
        divAtual = document.getElementById('divContador' + numeroDivAtual);
    }

    if (divAtual != null)
        --divAtual.innerText;
}

let intervaloDecrementar;

const DecrementarDown = () => {
    intervaloDecrementar = setInterval(Decrementar, 100);
}

document.getElementById('btnDecrementar').
addEventListener('click', Decrementar);

// ****************
document.getElementById('btnDecrementar').
addEventListener('mousedown', DecrementarDown);

document.getElementById('btnDecrementar').
addEventListener('mouseup', ()=>{clearInterval(intervaloDecrementar)});

// ****************

// Clear

const Limpar = () => {
    const mainTag = document.querySelector('main');
    mainTag.innerHTML = '';
    numeroDivAtual = 0;
    divAtual = null;
}

document.getElementById('btnLimpar').
addEventListener('click', Limpar);

function CriaDiv(){
    const mainTag = document.querySelector('main');
    const newDiv = document.createElement('div');
    ++numeroDivAtual;
    newDiv.id = 'divContador' + numeroDivAtual;
    newDiv.textContent = '0';
    newDiv.className = 'divContador';

    mainTag.appendChild(newDiv);

    divAtual = document.getElementById('divContador' + numeroDivAtual);
}
