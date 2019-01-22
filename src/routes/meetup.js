const env = require("env2");
env("./config.env");

const meetup = require("meetup-api")(process.env.MEETUP_KEY);

console.log(meetup);
