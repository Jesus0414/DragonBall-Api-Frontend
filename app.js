  
const Container = document.getElementById('container');
const apiUrl = 'https://localhost:5001/DB/Character';

const getdragonBallData = async() =>{
     const response = await fetch(apiUrl);
     console.log(response);
     const dragonBallData = await response.json();
     console.log(dragonBallData);
     dragonBallData.forEach(element => {
          const { firstName, secondName, raza, description } = element;
          Container.innerHTML  += `<div id="DB-name">${firstName}</div>
          <div id="DB-second">${secondName}</div>
          <div id="DB-raza">${raza}</div>
          <div id="DB-description">${description}</div>`
     });
     
};

getdragonBallData();