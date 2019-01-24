// ----------- DOM manipulation

const locationButton = document.getElementById("locationButton");

// ------- create map

const platform = new H.service.Platform({
  app_id: "s8pUGCqvBEOUVdx36Qfc",
  app_code: "PjNmBcpNBmBxaRAlMrnh4g",
  useHTTPS: true
});

const pixelRatio = window.devicePixelRatio || 1;
const defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 256 : 512,
  ppi: pixelRatio === 1 ? undefined : 320
});

const map = new H.Map(
  document.getElementById("map"),
  defaultLayers.normal.map,
  { pixelRatio }
);

const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

const ui = H.ui.UI.createDefault(map, defaultLayers);

// -------- send map to given location

const mapToUser = (userLat, userLong) => {
  map.setCenter({ lat: userLat, lng: userLong });
  map.setZoom(14);
};

// // -------- add a marker

const addDomMarker = (map, lat, long, eventID, sport) => {
  const outerElement = document.createElement("a"),
    innerElement = document.createElement("div");

  outerElement.href = `/events/${eventID}`;
  outerElement.style.userSelect = "none";
  outerElement.style.webkitUserSelect = "none";
  outerElement.style.msUserSelect = "none";
  outerElement.style.mozUserSelect = "none";
  outerElement.style.cursor = "default";

  innerElement.style.color = "red";
  innerElement.style.backgroundColor = "blue";
  innerElement.style.border = "2px solid black";
  innerElement.style.font = "normal 12px arial";
  innerElement.style.lineHeight = "12px";

  innerElement.style.paddingTop = "2px";
  innerElement.style.paddingLeft = "4px";
  innerElement.style.width = "20px";
  innerElement.style.height = "20px";

  // add negative margin to inner element
  // to move the anchor to center of the div
  innerElement.style.marginTop = "-10px";
  innerElement.style.marginLeft = "-10px";

  outerElement.appendChild(innerElement);

  // Add text to the DOM element
  innerElement.innerHTML = sport;

  const changeOpacity = evt => {
    evt.target.style.opacity = 0.6;
  };

  const changeOpacityToOne = evt => {
    evt.target.style.opacity = 1;
  };

  const clickForMore = evt => {
    evt.target.innerHTML = "Click to see event";
  };

  const hoverOff = evt => {
    evt.target.innerHTML = sport;
  };
  // const hello = e => {
  //   alert("You clicked the " + innerElement.innerHTML + " event");
  // };

  //create dom icon and add/remove opacity listeners
  const domIcon = new H.map.DomIcon(outerElement, {
    // the function is called every time marker enters the viewport
    onAttach: function(clonedElement, domIcon, domMarker) {
      clonedElement.addEventListener("mouseover", clickForMore);
      clonedElement.addEventListener("mouseout", hoverOff);
      // clonedElement.addEventListener("click", hello);
    },
    // the function is called every time marker leaves the viewport
    onDetach: function(clonedElement, domIcon, domMarker) {
      clonedElement.removeEventListener("mouseover", changeOpacity);
      clonedElement.removeEventListener("mouseout", changeOpacityToOne);
    }
  });
  console.log("hellooooo");
  // Marker for Chicago Bears home
  const bearsMarker = new H.map.DomMarker(
    { lat: lat, lng: long },
    {
      icon: domIcon
    }
  );

  map.addObject(bearsMarker);
};
// --------- geolocation function

const geoLocate = () => {
  const success = position => {
    console.log("gonna get your coords");
    mapToUser(position.coords.latitude, position.coords.longitude);
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

locationButton.addEventListener("click", geoLocate);

const postcodeAPI = item => {
  const request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const giz = JSON.parse(this.responseText);
      console.log("this item is", item.name);
      addDomMarker(
        map,
        giz.result.latitude,
        giz.result.longitude,
        item.id,
        item.sport
      );
    }
  };

  request.open("GET", `https://api.postcodes.io/postcodes/${item.location}`);
  request.send();
};

const eventsData = JSON.parse(document.getElementById("eventsData").innerHTML);
console.log(eventsData);

const addAllMarkers = array => {
  array.forEach(item => {
    postcodeAPI(item);
  });
};

// ------ Execute addAllMarkers
addAllMarkers(eventsData);
