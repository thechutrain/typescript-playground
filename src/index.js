const http = require("http");
const quotes = require("./random_quotes");

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
