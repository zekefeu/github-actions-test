const { returnTest } = require("../src/main.js");

test("Default test", () => {
	expect(returnTest()).toEqual("test");
});
