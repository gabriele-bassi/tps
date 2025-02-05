document.getElementById('csvFileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            const dati = analizzaCSV(text);
            ridimensionaCanvas();
            disegnaGraficoLineare(dati);
            window.addEventListener('resize', () => {
                ridimensionaCanvas();
                disegnaGraficoLineare(dati);
            });
        };
        reader.readAsText(file);
    }
});

// Funzione per analizzare il file CSV
function analizzaCSV(testo) {
    const righe = testo.split('\n'); // Divide il testo in righe
    const dati = righe.map(riga => {
        riga = riga.replaceAll('"', "")
        const [etichetta, valore] = riga.split(','); // Divide ogni riga in etichetta e valore
        return { etichetta, valore: Number(valore) }; // Ritorna un oggetto con etichetta e valore numerico
    });
    return dati;
}

// Funzione per ridimensionare il canvas
function ridimensionaCanvas() {
    const canvas = document.getElementById('barChart');
    const contenitore = document.getElementById('canvasContainer');
    canvas.width = contenitore.clientWidth; // Imposta la larghezza del canvas alla larghezza del contenitore
    canvas.height = contenitore.clientWidth / 2; // Mantiene il rapporto di aspetto 2:1
}

// Funzione per disegnare il grafico lineare
function disegnaGraficoLineare(dati) {
    const canvas = document.getElementById('barChart');
    const ctx = canvas.getContext('2d');
    const larghezza = canvas.width;
    const altezza = canvas.height;
    const padding = 100; // Aumenta il padding per una migliore spaziatura
    const distanzaPunti = (larghezza - padding * 2) / (dati.length - 1); // Calcola la distanza tra i punti

    ctx.clearRect(0, 0, larghezza, altezza); // Pulisce il canvas

    const valoreMassimo = Math.max(...dati.map(d => d.valore)); // Trova il valore massimo nei dati

    // Disegna la linea
    ctx.beginPath();
    ctx.moveTo(padding, altezza - padding - (dati[0].valore / valoreMassimo) * (altezza - padding * 2)); // Muove il pennello al primo punto
    dati.forEach((d, i) => {
        const x = padding + i * distanzaPunti; // Calcola la posizione x del punto
        const y = altezza - padding - (d.valore / valoreMassimo) * (altezza - padding * 2); // Calcola la posizione y del punto
        ctx.lineTo(x, y); // Disegna una linea fino al punto successivo
    });
    ctx.strokeStyle = 'red'; // Imposta il colore della linea
    ctx.stroke(); // Disegna la linea

    // Disegna i punti
    dati.forEach((d, i) => {
        const x = padding + i * distanzaPunti; // Calcola la posizione x del punto
        const y = altezza - padding - (d.valore / valoreMassimo) * (altezza - padding * 2); // Calcola la posizione y del punto
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI); // Disegna un cerchio per il punto
        ctx.fillStyle = 'red'; // Imposta il colore del punto
        ctx.fill(); // Riempie il cerchio
    });

    // Disegna le etichette dei valori sull'asse Y
    ctx.fillStyle = 'black'; // Imposta il colore del testo
    ctx.textAlign = 'right'; // Imposta l'allineamento del testo
    const numEtichette = 10; // Numero di etichette sull'asse Y
    for (let i = 0; i <= numEtichette; i++) {
        const valore = (valoreMassimo / numEtichette) * i; // Calcola il valore dell'etichetta
        const y = altezza - padding - (valore / valoreMassimo) * (altezza - padding * 2); // Calcola la posizione y dell'etichetta
        ctx.fillText(valore.toFixed(0), padding - 10, y); // Disegna l'etichetta
    }

    // Disegna le etichette sull'asse X
    ctx.fillStyle = 'black'; // Imposta il colore del testo
    ctx.textAlign = 'center'; // Imposta l'allineamento del testo
    dati.forEach((d, i) => {
        const x = padding + i * distanzaPunti; // Calcola la posizione x dell'etichetta
        ctx.fillText(d.etichetta, x, altezza - padding + 20); // Disegna l'etichetta sotto il punto
    });
}