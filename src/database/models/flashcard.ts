import { Schema } from "mongoose";

const flashCardSchema = new Schema({
	term: { type: String, unique: true },
	definition: { type: String, unique: false },
	date: { type: Date, default: Date.now },
	meta: {
		seen: { type: Number, default: 0 },
		correct: { type: Number, default: 0 }
	}
});

export default flashCardSchema;
