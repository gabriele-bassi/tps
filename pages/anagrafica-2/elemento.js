
    let data = localStorage.getItem("data").split(",")
    console.log(data)
    let container = document.getElementById("element-container")
let div = document.createElement("div")
div.className = "element-item"

for(let i=0;i<data.length;i++){
    let p = document.createElement("p")
    p.innerText = data[i]
    div.appendChild(p)
}
container.appendChild(div)
const exitPage = ()=>{
    localStorage.removeItem("data")
    location.href = "index.html"
}