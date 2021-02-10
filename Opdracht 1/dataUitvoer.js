const uitvoer = document.getElementById('uitvoer');
let dataObject;


const uitvoeren = () => {
    // deze funtie voert de date uit in de div met de id uitvoer
    uitvoer.innerHTML = `<div>${dataObject[0].tijd} </div>`;
    uitvoer.innerHTML += `<div>${dataObject[1].tempBuiten} </div>`;
}

const starten = () => {
    //de data aerray in onze dataobject stoppen
    dataObject = energieData
    //data uitvoeren
    uitvoeren();
}

document.addEventListener('DOMContentLoaded', starten)

