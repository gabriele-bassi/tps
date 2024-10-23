let input = document.getElementById("input");
let txtRes = document.getElementById("txtRes");
let buttons = document.getElementsByClassName("button")

let operatori  = new Array()
let numeri  = new Array()

const addToInput = (v)=>{
    
    txtRes.value = null
    input.value += v;
}

const addOperator = (o)=>{
    
    operatori.push(o)
    numeri.push(input.value);
    
    
    input.value=null;

}

const calcola = ()=>{
    if(numeri.length%2!=0){
        numeri.push(input.value);
    }
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
    txtRes.value = result
    input.value = null;
    numeri.length = []
    operatori=[]
}