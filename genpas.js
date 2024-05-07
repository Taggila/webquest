const passwordLengthInput = document.getElementById('password-length');
const generateButton = document.getElementById('generate-button');
const passwordDisplay = document.getElementById('password-display');

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generatePassword() {
    const passwordLength = parseInt(passwordLengthInput.value);
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordDisplay.textContent = password;
}

generateButton.addEventListener('click', generatePassword);
