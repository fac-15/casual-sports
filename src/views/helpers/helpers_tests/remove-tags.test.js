const { removeTags } = require("../index.js");

test("Undefined values return 'Bio unavailable'", () =>
  expect(removeTags(undefined)).toBe("Bio unavailable"));

test("Empty strings return undefined", () =>
  expect(removeTags("")).toBe("Bio unavailable"));

test("String should be stripped off of tags", () =>
  expect(
    removeTags(
      "<p>This is a test! <br />New line! <span>IS THIS WORKING?</span></p>"
    )
  ).toBe("This is a test! New line! IS THIS WORKING?"));

test("Long string should be stripped off of tags", () =>
  expect(
    removeTags(
      "<p>This is a test! <br />New line! <span>IS THIS WORKING?</span></p><p>This is a test! <br />New line! <span>IS THIS WORKING?</span></p><p>This is a test! <br />New line! <span>IS THIS WORKING?</span></p><p>This is a test! <br />New line! <span>IS THIS WORKING?</span></p>"
    )
  ).toBe(
    "This is a test! New line! IS THIS WORKING?This is a test! New line! IS THIS WORKING?This i..."
  ));
