function convertCurrency() {
    const usdInput = document.getElementById('usdInput');
    const cadInput = document.getElementById('cadInput');
    const usdCurrency = document.getElementById('usdCurrency').value;
    const cadCurrency = document.getElementById('cadCurrency').value;

    let result;

    console.log(usdCurrency,cadCurrency);

    if (usdCurrency === 'usd' && usdInput.value) {
        result = usdInput.value * 1.25; // assuming 1 USD = 1.25 CAD for demonstration
        cadInput.value = result;
    } else if( cadCurrency === 'cad' && cadInput.value) {
        result = cadInput.value / 1.25; // assuming 1 USD = 1.25 CAD for demonstration
        usdInput.value = result;
    }


}
