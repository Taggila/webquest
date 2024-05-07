function convert() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitSpan = document.getElementById('fahrenheit');

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;

    fahrenheitSpan.textContent = fahrenheit.toFixed(2) + ' °F';
}
