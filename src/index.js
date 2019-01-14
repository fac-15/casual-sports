const app = require("./app.js");

app.listen(app.get("port"), () => {
  console.log("Casual Sports is rolling on port ", app.get("port"), ", my dudes")
});
