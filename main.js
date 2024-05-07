const guessInput = document.getElementById('guess-input');
const checkButton = document.getElementById('check-button');
const message = document.getElementById('message');
const attemptsCount = document.getElementById('attempts-count');

// Загаданное число
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Количество попыток
let attempts = 0;

// Обработчик события нажатия кнопки "Проверить"
checkButton.addEventListener('click', function() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Введите число от 1 до 100";
        return;
    }

    attempts++;
    attemptsCount.textContent = `Попыток: ${attempts}`;

    if (guess === secretNumber) {
        message.textContent = `Поздравляем! Вы угадали число за ${attempts} попыток!`;
        checkButton.disabled = true;
        guessInput.disabled = true;
    } else if (guess < secretNumber) {
        message.textContent = "Загаданное число больше.";
    } else {
        message.textContent = "Загаданное число меньше.";
    }
});
