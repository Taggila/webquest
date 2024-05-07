function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;

    const sum = dice1 + dice2;
    document.getElementById('result').textContent = `Сумма: ${sum}`;
}
