const ball = document.querySelectorAll('.ball');
const text = document.getElementById('answer');
const rgbText = document.querySelector('#rgb-color');
const reset = document.getElementById('reset-game');
const scoreboard = document.getElementById('score');
const modal = document.getElementById('modal');
const finalScoreboard = document.getElementById('scoreboard-final');

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
                modal.style.display = 'block';
                btnGameOver.addEventListener('click', () => {
                    randomIndex();
                    rgbText.innerHTML = randomAnswer();
                    changeColor();
                    text.innerHTML = 'Escolha uma cor';
                    modal.style.display = 'none';
                })
                finalScoreboard.innerHTML = counter;
                counter = 0;
                scoreboard.innerHTML = counter;

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