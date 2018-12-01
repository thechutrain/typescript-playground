import express = require("express");
const app = express();

const PORT = process.env.PORT || 7000;

app.get("/*", (req, res, next) => {
	res.send("hi");
});

app.listen(PORT, e => {
	if (process.env.NODE_ENV === "development") {
		console.log(
			`In "${process.env.NODE_ENV}" mode! \n🌍 is listening on PORT: ${PORT}`
		);
	}
});
