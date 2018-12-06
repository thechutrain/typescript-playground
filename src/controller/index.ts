import { Router } from "express";
import { FlashCard } from "../database";
import * as bodyParser from "body-parser";

const apiRouter = Router();

apiRouter.get("/flashcards?/:flashcard_id?", (req, res, next) => {
	const query = FlashCard.find({})
		.sort({ date: 1 })
		.limit(10);

	query.then(result => {
		res.json(result);
	});
});

apiRouter.get("/fakepost/new/flashcard", (req, res, next) => {
	const newFlashCard = new FlashCard({
		term: "c",
		definition: "oh canada!"
	});

	// NO need to be saving the flashcard
	newFlashCard.save((err, savedFlashCard) => {
		if (err) {
			console.log(err);
		} else {
			console.log(savedFlashCard);
		}
	});

	res.send("created a new flashcard");
});

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
apiRouter.post("/new/flashcard", urlencodedParser, (req, res, next) => {
	console.log(req.body);
	if (!req.body) {
		return res.sendStatus(400);
	}

	// Create new flashcard here
	res.json({
		success: true,
		data: {}
	});
	// const newFlashCard = new FlashCard({
	// 	term: "apple",
	// 	definition: "a fruit that keeps the doctoer away"
	// });

	// NO need to be saving the flashcard
	// newFlashCard.save((err, savedFlashCard) => {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log(savedFlashCard);
	// 	}
	// });

	// res.send("created a new flashcard");
});

apiRouter.get("/", (req, res, next) => {
	console.log("redirect");
	console.log(req.url);
	console.log(req.method);
	res.redirect("/api/flashcards");
});
export default apiRouter;
