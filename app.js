const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const titleElement = document.querySelector('.titulo');
const messageElement = document.querySelector('.texto-mensagem');
const inputElement = document.querySelector('.input');
const guessButton = document.querySelector('#botao-chute');
const restartButton = document.querySelector('#botao-reinicio');

const initializeGame = () => {
    titleElement.textContent = 'Jogo do Número Secreto';
    messageElement.textContent = 'Escolha um número entre 1 e 100';
    inputElement.value = '';
    guessButton.disabled = false;
    restartButton.disabled = true;
};

const shakeInput = () => {
    inputElement.classList.add('shake');
    inputElement.style.color = 'red';

    setTimeout(() => {
        inputElement.classList.remove('shake');
        inputElement.style.color = '#1875E8';
    }, 400);
};

const checkGuess = () => {
    const userGuess = parseInt(inputElement.value, 10);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Por favor, escolha um número válido entre 1 e 100.';
        shakeInput();
        return;
    }
    
    attempts++;
    if (userGuess === randomNumber) {
        messageElement.textContent = `Parabéns! Você acertou o número secreto em ${attempts} tentativas.`;
        guessButton.disabled = true;
        restartButton.disabled = false;
        inputElement.style.color = 'black';
    } else {
        messageElement.textContent = userGuess > randomNumber ? 'O número secreto é menor. Tente novamente!' : 'O número secreto é maior. Tente novamente!';
        shakeInput();
    }
};

const restartGame = () => {
    location.reload();
};

guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);

document.addEventListener('DOMContentLoaded', initializeGame);