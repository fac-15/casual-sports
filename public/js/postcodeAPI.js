// fetch("https://api.postcodes.io/postcodes/N43HF")
//

// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://api.postcodes.io/postcodes/N43HF", true);

request.onload = function() {
  console.log(JSON.parse(this.response));
};

// Send request
request.send();
