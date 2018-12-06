import mongoose = require("mongoose");
import flashCardSchema from "./models/flashcard";

export const FlashCard = mongoose.model("FlashCard", flashCardSchema);

const {
	MONGODB_URI,
	DB_USERNAME,
	DB_PASSWORD,
	MONGO_HOST,
	MONGODB_PORT,
	MONGODB_DB_NAME
} = process.env;
const mongo_uri = MONGODB_URI
	? MONGODB_URI
	: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${MONGO_HOST}:${MONGODB_PORT}/${MONGODB_DB_NAME}`;
const connectionPromise = mongoose.connect(
	// TODO: template literal with username & password
	mongo_uri,
	{
		useNewUrlParser: true // means you need to specify a port number
	}
);

connectionPromise
	.then(db => {
		console.log(`Successfully connected to database @ ${mongo_uri}`);
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
