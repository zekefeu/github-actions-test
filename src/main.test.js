const { returnTest } = require("./main.js");

test("Default test", () => {
	expect(returnTest()).toEqual("terst");
});