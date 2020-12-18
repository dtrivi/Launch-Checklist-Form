// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[4].name}</li>
               <li>Diameter: ${json[4].diameter}</li>
               <li>Star: ${json[4].star}</li>
               <li>Distance from Earth: ${json[4].distance}</li>
               <li>Number of Moons: ${json[4].moons}</li>
            </ol>
            <img src="${json[4].image}">
         `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         // event.preventDefault();
      } else if (isNaN(pilotNameInput.value) !== true || isNaN(copilotNameInput.value) !== true || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Make sure to enter valid information for each field!");
         // event.preventDefault();
      } else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         const div = document.getElementById("faultyItems");
         div.innerHTML = `
            <ol>
               <li id="pilotStatus">Pilot ${pilotNameInput.value} is ready for launch</li>
               <li id="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
               <li id="fuelStatus">Fuel level too low for launch</li>
               <li id="cargoStatus">Cargo mass too high for launch</li>
            </ol>
         `;
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         // event.preventDefault();
      } else if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         const div = document.getElementById("faultyItems");
         div.innerHTML = `
            <ol>
               <li id="pilotStatus">Pilot ${pilotNameInput.value} is ready for launch</li>
               <li id="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
               <li id="fuelStatus">Fuel level too low for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
            </ol>
         `;
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         // event.preventDefault();
      } else if (cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         const div = document.getElementById("faultyItems");
         div.innerHTML = `
            <ol>
               <li id="pilotStatus">Pilot ${pilotNameInput.value} is ready for launch</li>
               <li id="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
               <li id="fuelStatus">Fuel level high enough for launch</li>
               <li id="cargoStatus">Cargo mass too high for launch</li>
            </ol>
         `;
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         // event.preventDefault();
      } else {
         document.getElementById("faultyItems").style.visibility = "visible";
         const div = document.getElementById("faultyItems");
         div.innerHTML = `
            <ol>
               <li id="pilotStatus">Pilot ${pilotNameInput.value} is ready for launch</li>
               <li id="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
               <li id="fuelStatus">Fuel level high enough for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
            </ol>
         `;
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         // event.preventDefault();
      }
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
