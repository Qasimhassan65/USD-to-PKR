const usdInput = document.getElementById('usdInput');
const pkrInput = document.getElementById('pkrInput');
const usdValue = document.getElementById('usdValue');
const pkrValue = document.getElementById('pkrValue');

const conversion_rates = parseFloat(usdValue.textContent);

function updatePKR() {
    const usdAmount = parseFloat(usdInput.value) || 0;
    const pkrAmount = (usdAmount * conversion_rates).toFixed(2);
    pkrInput.value = pkrAmount;
}

function updateUSD() {
    const pkrAmount = parseFloat(pkrInput.value) || 0;
    const usdAmount = (pkrAmount / conversion_rates).toFixed(2);
    usdInput.value = usdAmount;
}

usdInput.addEventListener('input', updatePKR);
pkrInput.addEventListener('input', updateUSD);

// Initialize input fields with default values
usdInput.value = '1';
updatePKR();
