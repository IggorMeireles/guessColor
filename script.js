const ball = document.querySelectorAll('.ball');
const text = document.getElementById('answer');
const rbgText = document.querySelector('#rgb-color');
const reset = document.getElementById('reset-game');
const scoreboard = document.getElementById('score');

let password;
let correctElement;
let counter = 0;

const randomColor = () => {
    const r = Math.trunc(Math.random() * 254);
    const g = Math.trunc(Math.random() * 255);
    const b = Math.trunc(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

const changeColor = () => {
    for (let i = 0; i < ball.length; i += 1) {
        ball[i].style.backgroundColor = randomColor();
        correctElement = ball[2];
    }
    ball[2].style.backgroundColor = 'rgb(168, 34,1)';
};

const getIndex = (password) => {
    ball.forEach((key, index) => {
        key.addEventListener("click", () => {
            password = index;
            console.log(password);
            if (password === 2) {
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



window.onload = () => {
    changeColor();
    getIndex();
    scoreboard.innerHTML = 0;
    rbgText.innerHTML = randomAnswer();
    reset.addEventListener('click', () => {
        changeColor();
        rbgText.innerHTML = randomAnswer();
        text.innerHTML = 'Escolha uma cor';
    })
};