const { returnTest } = require("../src/main.ts");

test("Default test", () => {
	expect(returnTest()).toEqual("test");
});
