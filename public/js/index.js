const navbarFunction = () => {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// const html = item => {
//   const outputHtml = `
//         <ul class="read">
//         <li><h2 id="event-title">${item.name}</h2></li>
//         <li class="read-event">Location: ${item.location}</li>
//         <li class="read-event">Genders: ${item.genders}</li>
//         <li class="read-event">Open for walk-in participants: ${item.open}</li>
//         </ul>
//             `;
//   const event = document.querySelector(".event");
//   event.innerHTML = outputHtml;
// };

// const allEvents = [];
// fetch("/ev")
//   .then(res => res.json())
//   .then(data => allEvents.push(...data))
//   .then(() => {
//     const readEvent = document.URL;
//     const id = readEvent.split("events/")[1];
//     const eventFind = obj => {
//       return obj.id === +id;
//     };

//     const oneEvent = allEvents.find(eventFind);
//     html(oneEvent);
//   });


//   const html2 = item => {
//     const outputHtml = `
//           <ul class="read">
//           <li><h2 id="team-name">${item.name}</h2></li>
//           <li class="read-team">Location: ${item.location}</li>
//           <li class="read-team">Size: ${item.size}</li>
//           <li class="read-team">Genders: ${item.genders}</li>
//           <li class="read-team">Age range: ${item.ages}</li>
//           <li class="read-team">Skill level: ${item.skill}</li>
//           <li class="read-team">Sport: ${item.sport}</li>
//           <li class="read-team">Open for participants: ${item.solo}</li>
//           </ul>
//               `;
//     const event = document.querySelector(".team");
//     event.innerHTML = outputHtml;
//   };


// const allTeams = [];
// fetch("/tms")
//   .then(res => res.json())
//   .then(data => allTeams.push(...data))
//   .then(() => {
//     const readTeam = document.URL;
//     const id = readTeam.split("teams/")[1];
//     const teamFind = obj => {
//       return obj.id === +id;
//     };

//     const oneTeam = allTeams.find(teamFind);
//     html2(oneTeam);
//   });
