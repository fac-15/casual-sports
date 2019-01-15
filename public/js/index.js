const navbarFunction = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



const html = item => {
  const outputHtml = `
        <h1 id="event-title">${item.name}</h1>
        <p class="read-event">${item.location}</p>
        <p class="read-event">${item.genders}</p>
        <p class="read-event">${item.open}</p>
            `;
        console.log(outputHtml)
        const event = document.querySelector(".event");
        event.innerHTML = outputHtml;
        
      };

    

const allEvents = [];
fetch("/ev")
.then(res => res.json())
.then(data => allEvents.push(...data))
.then(() => {
const readEvent = document.URL;
const id = readEvent.split("events/")[1];
const eventFind = obj => {
  return obj.id === +id;
};
console.log(allEvents);
const oneEvent = allEvents.find(eventFind)
console.log(oneEvent);
html(oneEvent);
});
