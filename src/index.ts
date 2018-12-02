import express = require("express");
import morgan = require("morgan");

//  ==== Load Environmental Variables ===
// tslint:disable-next-line:no-var-requires
require("../config");
const app = express();

const PORT = process.env.PORT || 7000;

app.use(morgan("common"));

app.get("/api", (req, res, next) => {
	res.send("api route to be made");
});

app.get("/*", (req, res, next) => {
	res.send("Only routes that are processed are API & AUTH");

});

app.listen(PORT, e => {
	if (process.env.NODE_ENV === "development") {
		console.log(
			`In "${process.env.NODE_ENV}" mode! \n🌍 is listening on PORT: ${PORT}`
		);
	}
});
