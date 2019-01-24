const app = require("./app.js");

app.listen(app.get("port"), () => {
  console.log(
    "Sports & Rec is rolling on port ",
    app.get("port"),
    ", my dudes"
  );
});
