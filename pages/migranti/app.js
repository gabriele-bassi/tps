let anni = new Array();
let persone = new Array();


const aprifile = (files)=>{
    let file = files.files[0];
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function(){
        let res = reader.result;
        let blob = res.split(",")
        anni.push(blob[0])
        for(let i=0;i<blob.length;i++){
            if(blob[i].includes("\n")){
                persone.push(blob[i].split("\n")[0])
                anni.push(blob[i].split("\n")[1])
            }
        }
        persone.push(blob[blob.length-1])
    } 
}


