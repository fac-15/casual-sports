// ----------- DOM manipulation

const locationButton = document.getElementById("locationButton");

const markerButton = document.getElementById("markerButton");

// ------- postcodeAPI
const APILatLong;
const postcodeAPI = postcode => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://api.postcodes.io/postcodes/${postcode}`, true);
  request.onload = function() {
    const data = JSON.parse(this.response);
    APILatLong = data;
  };
  request.send();
};
postcodeAPI("N166UZ");
console.log("here is api result", data);

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

// -------- send map to user's location

const mapToUser = (userLat, userLong) => {
  map.setCenter({ lat: userLat, lng: userLong });
  map.setZoom(14);
};

// --------- add marker to specified location
const addMarker = map => {
  const firstMarker = new H.map.Marker({ lat: 51.567912, lng: -0.108314 });
  map.addObject(firstMarker);
};

// -------- add a better marker

const addDomMarker = map => {
  console.log("HELLLO", APILatLong);
  const outerElement = document.createElement("div"),
    innerElement = document.createElement("div");

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
  innerElement.innerHTML = "Handball";

  const changeOpacity = evt => {
    evt.target.style.opacity = 0.6;
  };

  const changeOpacityToOne = evt => {
    evt.target.style.opacity = 1;
  };

  const hello = e => {
    alert("You clicked the " + innerElement.innerHTML + " event");
  };

  //create dom icon and add/remove opacity listeners
  const domIcon = new H.map.DomIcon(outerElement, {
    // the function is called every time marker enters the viewport
    onAttach: function(clonedElement, domIcon, domMarker) {
      clonedElement.addEventListener("mouseover", changeOpacity);
      clonedElement.addEventListener("mouseout", changeOpacityToOne);
      clonedElement.addEventListener("click", hello);
    },
    // the function is called every time marker leaves the viewport
    onDetach: function(clonedElement, domIcon, domMarker) {
      clonedElement.removeEventListener("mouseover", changeOpacity);
      clonedElement.removeEventListener("mouseout", changeOpacityToOne);
    }
  });
  // Marker for Chicago Bears home
  const bearsMarker = new H.map.DomMarker(
    { lat: APILatLong.lat, lng: APILatLong.long },
    {
      icon: domIcon
    }
  );

  map.addObject(bearsMarker);
};

addDomMarker(map);
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

// markerButton.addEventListener("click", addDomMarker(map));

locationButton.addEventListener("click", geoLocate());
