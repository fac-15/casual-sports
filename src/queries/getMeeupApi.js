const axios = require("axios");
const env = require("env2");
env("./config.env");

const MEETUP_KEY = process.env.MEETUP_KEY;

if (!MEETUP_KEY) {
  throw new Error("MEETUP_KEY must be set");
}
const meetup_url = `https://api.meetup.com/2/open_events?zip=EC1A+4DD&and_text=False&country=gb&offset=0&city=London&format=json&limited_events=False&photo-host=public&page=20&radius=25.0&category=32&status=upcoming&desc=False&fields=group_photo&sig_id=196338373&sig=${MEETUP_KEY}&key=${MEETUP_KEY}`;

async function getMeetupApi() {
  try {
    const response = await axios.get(meetup_url);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getMeetupApi;
