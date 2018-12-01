// TODO: https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript
// A way to fix this without converting random_quotes to ts file?
// const quotes = require("../data/random_quotes");
// resolveJsonModule
import * as quotes from "../data/random_quotes.json";

import http = require("http");

const PORT = process.env.PORT || 7000;

http
	.createServer((req, res) => {
		const randIdx = Math.floor(Math.random() * quotes.length);
		const quoteObj = quotes[randIdx];
		res.writeHead(200, { "Content-type": "text/plan" });
		res.write(`"${quoteObj.text}" -- ${quoteObj.author}`);
		res.end();
	})
	.listen(PORT);
