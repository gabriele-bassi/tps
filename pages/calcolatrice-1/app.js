let one = document.getElementById("one");
let two = document.getElementById("two");
let buttons = document.getElementsByName("operator")

let plus = document.getElementById("plus");
let min = document.getElementById("min");
let div = document.getElementById("div");
let molt = document.getElementById("molt");

let ok = document.getElementById("ok");
let ris = document.getElementById("ris");




const readOperator = ()=>{
    for(let i =0;i<buttons.length;i++){
        if(buttons[i].checked){
            return buttons[i].value
        }
    }
}


const calcola = ()=>{

    let operator = readOperator();

    let result = 0;

    let num1 = parseFloat(one.value);
    let num2 = parseFloat(two.value);
    
    switch(operator){
        case "+":
        result = num1+num2;
        break
        case "-":
            result = num1-num2;
            break
        case "*":
            result = num1*num2;
            break
        case "/":
            if(num2 == 0){
                return ris.innerHTML = "Error division by 0"
            }
            result = num1/num2;

    }

    ris.innerHTML = result;



}
