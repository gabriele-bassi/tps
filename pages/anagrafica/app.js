

const inps = document.getElementsByClassName("campi");
const tab = document.getElementById("table")
let data = [];



const caricaInfo = () => {
    let row = []
    for (let i = 0; i < inps.length; i++) {
        row.push(inps[i].value);
        inps[i].value = null;
    }
    data.push(row)
    visualizza()
}
const visualizza = () => {
    let l = data.length - 1;
    for (let i = 0; i < data[l].length; i++) {
        let para = document.createElement("p")
        para.className = "info"
        para.innerText = data[l][i];
        tab.appendChild(para);
    }
}
    