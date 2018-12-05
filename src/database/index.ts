import mongoose = require("mongoose");
import flashCardSchema from "./models/flashcard";

export const FlashCard = mongoose.model("FlashCard", flashCardSchema);

const connectionPromise = mongoose.connect(
	// TODO: template literal with username & password
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true // means you need to specify a port number
	}
);

connectionPromise
	.then(db => {
		console.log(
			`Successfully connected to database @ ${process.env.MONGODB_URI}`
		);
	})
	.catch(e => {
		console.log(e);
	});

export default connectionPromise;

// DONT NEED TO HAVE THE SERVER WAIT FOR MONGOOSE TO CONNECT:
// export default async function() {
// 	try {
// 		console.log("hi");
// 		// const client = await mongoose.connect()
// 	} catch (e) {
// 		console.error(`Database connection error: ${e}`);
// 	}
// }
