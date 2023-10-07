function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);
    
    const exchangeRates = {
        'INR': {
            'EUR': 0.011,
            'RUB': 1.20,
            'JPY': 1.79,
            'BDT': 1.32,
            'BRL': 0.062,
            'USD': 0.012,
        },
        'USD': {
            'EUR': 0.95,
            'INR': 83.24,
            'RUB': 99.62,
            'JPY': 148.94,
            'BDT': 110.01,
            'BRL': 5.16,
        },
        'EUR' : {
            'INR' :88.12,
            'USD' :1.06,
            'JPY' :158.22,
            'RUB' :107.08,
            'BDT' :116.36,
            'BRL' :5.46,
        },
        'RUB': {
            'EUR': 0.0096,
            'INR': 0.84,
            'USD': 0.010,
            'JPY': 1.50,
            'BDT': 1.11,
            'BRL': 0.052,
        },
        'JPY': {
            'EUR': 0.0064,
            'INR': 0.56,
            'RUB': 0.67,
            'USD': 0.0067,
            'BDT': 0.74,
            'BRL': 0.035,
        },
        'BDT': {
            'EUR': 0.0087,
            'INR': 0.76,
            'RUB': 0.90,
            'JPY': 1.35,
            'USD': 0.0091,
            'BRL': 0.047,
        },
        'BRL': {
            'EUR': 0.18,
            'INR': 16.15,
            'RUB': 19.31,
            'JPY': 28.90,
            'BDT': 21.34,
            'USD': 0.19,
        }
    };

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    document.getElementById("result").innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`;
}
