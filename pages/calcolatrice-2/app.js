const input = document.getElementById("input");
const btn = document.getElementById("btnCalcola");
const pResult = document.getElementById("resultSpan");

const caricaOperatori = (value) => {
    let operatori = new Array();

    let c = 0;
    for (let i = 0; i < value.length; i++) {

        if (value[i] == "+" || value[i] == "-" || value[i] == "/" || value[i] == "*") {
            operatori[c] = value[i];
            c++;
        }
    }
    return operatori;

}

const eseguiOperazioni = (operatori, numeri) => {

    let result = parseFloat(numeri[0]);
    for (let i = 0; i < operatori.length; i++) {
        switch (operatori[i]) {
            case "+":
                result += parseFloat(numeri[i + 1]);
                break;
            case "-":
                result -= parseFloat(numeri[i + 1]);
                break;
            case "/":
                result /= parseFloat(numeri[i + 1]);
                break;
            case "*":
                result *= parseFloat(numeri[i + 1]);
                break;
            default:
                break;
        }

    }
    return result

}

const controllaStringa = (value) => {
    const caratteriAccettati = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"]
    for (let i = 0; i < value.length; i++) {
        if (caratteriAccettati.includes(value[i])) {
            return false;
        }
    }
    return true;
}


const calcola = () => {
    let value = input.value;
    if (value == "" || controllaStringa(value)) {
        return pResult.innerText = "Inserisci un espressione valida";
    }
    let numeri = value.split(/[+-/*]+/);
    let operatori = caricaOperatori(value);
    let result = eseguiOperazioni(operatori, numeri);
    pResult.innerText = result;
    input.value = "";
}