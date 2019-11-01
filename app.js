const Container = document.getElementById('container');
//const pixels = document.getElementById('pixels-text');

const apiUrl = 'https://localhost:5001/DB/Character';

const getdragonBallData = async() =>{
     const response = await fetch(apiUrl);
     console.log(response);
     const dragonBallData = await response.json();
     console.log(dragonBallData);
     dragonBallData.forEach(element => {
          const { firstName, secondName, raza, description } = element;
          Container.innerHTML  += `<div id="DB-name" class="DB-name">Nombre: ${firstName}</div>
          <div id="DB-second" class="DB-second">Apodo: ${secondName}</div>
          <div id="DB-raza" class="DB-raza">Especie: ${raza}</div>
          <div id="DB-description" class="DB-description">Descripcion: ${description}</div>
          <br> <br> <br> <br>`
     });
};
/*
const getWidth = ()=>{//asi ers como se declaran los functions.
    let width = document.documentElement.clientWidth;//seria como agarrar todo el tag
    pixels.innerText = `${width}px`;
}*/

getdragonBallData();
/*getWidth();
window.addEventListener('resize', getWidth);*/