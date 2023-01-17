const ball = document.querySelectorAll('.ball');
const text = document.getElementById('answer');
const rgbText = document.querySelector('#rgb-color');
const reset = document.getElementById('reset-game');
const scoreboard = document.getElementById('score');

let password;
let correctElement;
let counter = 0;
let tester;

const randomColor = () => {
    const r = Math.trunc(Math.random() * 254);
    const g = Math.trunc(Math.random() * 255);
    const b = Math.trunc(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

const changeColor = () => {
    for (let i = 0; i < ball.length; i += 1) {
        ball[i].style.backgroundColor = randomColor();
    }
    correctElement = ball[2];
    ball[tester].style.backgroundColor = 'rgb' + rgbText.innerHTML;
};

const getIndex = (password) => {
    ball.forEach((key, index) => {
        key.addEventListener("click", () => {
            password = index;
            if (password === tester) {
                text.innerHTML = 'Acertou!';
                counter = counter + 3;
                scoreboard.innerHTML = counter;
            } else {
                text.innerHTML = 'Errou! Tente novamente!';
            }
        });
    });
}

const randomAnswer = () => {
    const r = Math.trunc(Math.random() * 254);
    const g = Math.trunc(Math.random() * 255);
    const b = Math.trunc(Math.random() * 255);
    return `(${r}, ${g}, ${b})`;
}

const randomIndex = () => {
    tester = Math.trunc(Math.random() * 10);
    while (tester > 5) {
        tester = Math.trunc(tester / 2);
    }
}

window.onload = () => {
    randomIndex();
    changeColor();
    getIndex();
    scoreboard.innerHTML = 0;
    rgbText.innerHTML = randomAnswer();
    ball[tester].style.backgroundColor = 'rgb' + rgbText.innerHTML;
    reset.addEventListener('click', () => {
        randomIndex();
        rgbText.innerHTML = randomAnswer();
        changeColor();
        text.innerHTML = 'Escolha uma cor';
    })
};