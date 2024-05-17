const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultext = document.getElementById("resultado");
const counterText = document.getElementById("counter-text");

let player1Score = 0;
let player2Score = 0;

const piedra = 0;
const papel = 1;
const tijera = 2;

const empate = 0;
const gana = 1;
const pierde = 2;

piedraBtn.addEventListener("click", () => {
    play("piedra");
});

papelBtn.addEventListener("click", () => {
    play("papel");
});

tijeraBtn.addEventListener("click", () => {
    play("tijera");
});

function play(userOption) {
    const machineOption = Math.floor(Math.random() * 3);

    const resultado = calcResultado(userOption, machineOption);

    if (resultado === gana) {
        player1Score++;
    } else if (resultado === pierde) {
        player2Score++;
    }

    resultext.innerHTML = `Jugador ${resultado === empate ? 'empató' : resultado === gana ? 'ganó' : 'perdió'} (${player1Score} - ${player2Score})`;
    counterText.innerHTML = `Player 1: ${player1Score} | Player 2: ${player2Score}`;

    if (player1Score === 3 || player2Score === 3) {
        if (player1Score === 3) {
            resultext.innerHTML = "Player 1 gana la partida!";
        } else {
            resultext.innerHTML = "Player 2 gana la partida!";
        }
        piedraBtn.disabled = true;
        papelBtn.disabled = true;
        tijeraBtn.disabled = true;
    }
}

function calcResultado(userOption, machineOption) {
    if (userOption === machineOption) {
        return empate;
    } else if (userOption === piedra) {
        if (machineOption === papel) {
            return pierde;
        } else {
            return gana;
        }
    } else if (userOption === papel) {
        if (machineOption === tijera) {
            return pierde;
        } else {
            return gana;
        }
    } else {
        if (machineOption === piedra) {
            return pierde;
        } else {
            return gana;
        }
    }
}