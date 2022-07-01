function returnTest() {
	return "test";
}

console.log(returnTest());

if (process.env.ENV === "production" || process.env.NODE_ENV === "production") {
	console.log("This script is running in production mode.");
}

module.exports = { returnTest };
