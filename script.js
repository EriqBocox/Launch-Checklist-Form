// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {

      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel").value;
      let cargoMass = document.querySelector("input[name=cargoMass").value;
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus"); 
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      event.preventDefault();

      if(pilotName=== "" || copilotName==="" || fuelLevel==="" || cargoMass ===""){
         alert("All Fields Required"); 

      } else if (isNaN(pilotName) === false || isNaN(copilotName) === false || isNaN(fuelLevel) === true || isNaN(cargoMass) === true) {
         alert("Make sure to enter valid information for each field!");

      } else{
         faultyItems.style.visibility = 'visible';
         pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch!`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch!`
      
         if(fuelLevel < 10000){
              faultyItems.style.visibility = 'visible';
              launchStatus.innerHTML = 'Shuttle not ready for launch!';
              launchStatus.style.color = 'red';
              fuelStatus.innerHTML = 'Fuel level is too low for launch!';


         } else if(cargoMass > 10000){
               faultyItems.style.visibility = 'visible';
               cargoStatus.innerHTML = 'Too much mass to take off!';
               launchStatus.innerHTML = 'Shuttle not ready for launch';
               launchStatus.style.color = 'red';

         } else{
               faultyItems.style.visibility = 'hidden';
               launchStatus.style.color = 'green';
               launchStatus.innerHTML = 'Shuttle ready for launch!'
         }
      } 
   });

   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function(json){
         const div = document.getElementById('missionTarget');
         {  let i = Math.floor(Math.random() * 6);
            let data = json[i];
            div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${data.name}</li>
                  <li>Diameter: ${data.diameter}</li>
                  <li>Star: ${data.star}</li>
                  <li>Distance from Earth: ${data.distance}</li>
                  <li>Number of Moons: ${data.moons}</li>
               </ol>
               <img src="${data.image}">
            `
         }
      })
   });
});
