const form =  document.getElementById("form")

const inps = document.getElementsByClassName("campi");
const tab = document.getElementById("table")
let data = [];

let c = 0;

const caricaInfo = () => {

    let row = []
    for (let i = 0; i < inps.length; i++) {
        row.push(inps[i].value);
        inps[i].value = null;
    }
    data.push(row)
    localStorage.setItem(`row${c}`,row)
    c++;
    visualizza()
}
const visualizza = () => {
    let l = data.length - 1;
    let di = document.createElement("div")
    di.className = "element"
    for (let i = 0; i < data[l].length; i++) {
        
        let para = document.createElement("p")
        para.className = "info"
        para.innerText = data[l][i];
        di.appendChild(para)
        
    }
    let btn = document.createElement("button")
    btn.innerHTML = "apri"
    btn.onclick = function(){
       localStorage.setItem(`data`, data[l])
        location.href =  "elemento.html"
    }

    di.appendChild(btn)
    tab.appendChild(di)
}


    