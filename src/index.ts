import express = require("express");
import morgan = require("morgan");
// tslint:disable-next-line:no-var-requires
require("../config"); // imports .env config
import apiRouter from "./controller";
const app = express();

// tslint:disable-next-line:no-var-requires
const dbConnection = require("./database");

const PORT = process.env.PORT || 7000;

app.use(morgan("common")); // Set logging

app.use("/api/v1/", apiRouter);

app.use((req, res, next) => {
	res.statusCode = 404;
	res.send("URL not found");
});

app.listen(PORT, e => {
	if (process.env.NODE_ENV === "development") {
		console.log(
			`In "${process.env.NODE_ENV}" mode! \n🌍 is listening on PORT: ${PORT}`
		);
	}
});
