const ctx = document.getElementById('can');
let anni = new Array();
let persone = new Array();


const aprifile = (files)=>{
    let file = files.files[0];
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function(){
        let res = reader.result;
        let blob = res.split(",")
        
        blob.splice(0,0)
        let v =  String.toString(blob.splice(1,1))

        anni.push(v.split("\n")[1])

        for(let i=0;i<blob.length;i++){
            if(blob[i].includes("\n")){
                persone.push(parseInt(blob[i].split("\n")[0].replaceAll('"','')))
                anni.push(parseInt(blob[i].split("\n")[1].replaceAll('"',"")))
            }
        }
        persone.push(blob[blob.length-1])
        creaTabella()
    } 
   
}


const creaTabella = () => {
    
    const paragraf = document.getElementById('paragraf');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trHead = document.createElement('tr');
    const thAnni = document.createElement('th');
    
    const thPersone = document.createElement('th');
    thAnni.textContent = "Anni"
    thPersone.textContent = "Persone"
    trHead.appendChild(thAnni);
    trHead.appendChild(thPersone);
    thead.appendChild(trHead);
    
    
    for (let i = 0; i < anni.length; i++) {
        const tr = document.createElement('tr');
        const tdAnni = document.createElement('td');
        tdAnni.textContent = anni[i];
        const tdPersone = document.createElement('td');
        tdPersone.textContent = persone[i] || '';  
        tr.appendChild(tdAnni);
        tr.appendChild(tdPersone);
        tbody.appendChild(tr);
    }

    
    table.appendChild(thead);
    table.appendChild(tbody);

    
    paragraf.innerHTML = '';  
    paragraf.appendChild(table);
    loadchart()
};

const loadchart = ()=>{

    new Chart(ctx, {
        type: 'bar',
    data: {
      labels: anni,
      datasets: [{
        label: 'Sbarchi',
        data: persone,
        borderWidth: 1
    }]
}
});

}





