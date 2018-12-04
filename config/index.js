const path = require("path");

switch (process.env.NODE_ENV.toUpperCase()) {
	case "DEVELOPMENT":
		require("dotenv-safe").config({
			path: path.join(__dirname, "./.env.development"),
			sample: path.join(__dirname, "./.env.example")
		});
		break;

	case "PRODUCTION":
		require("dotenv-safe").config({
			path: path.join(__dirname, "./.env.production"),
			sample: path.join(__dirname, "./.env.example")
		});
		break;

	case "HEROKU":
		// Can add environmental variables directly via the Heroku GUI
		// require("dotenv-safe").config({
		// 	path: path.join(__dirname, "./.env.heroku"),
		// 	sample: path.join(__dirname, "./.env.example"),
		// 	allowEmptyValues: true
		// });
		break;
	default:
		throw new Error(
			`process.env.NODE_ENV of "${process.env.NODE_ENV}" has no configuration`
		);
		break;
}
