const assert = require("assert");

assert(
  process.env.MEETUP_KEY,
  "MEETUP_KEY variable isn't set on enviroment (use 'set \"MEETUP_KEY=key\"' on Windows)"
);

const meetup = require("./meetup")({
  key: process.env.MEETUP_KEY
});

meetup.getGroup(
  {
    urlname: "banodejs"
  },
  (err, resp) => {
    if (err) {
      console.error("Found meetup error", err);
    }
    console.log(resp);
  }
);
