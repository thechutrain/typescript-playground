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

	default:
		throw new Error(
			`process.env.NODE_ENV of "${process.env.NODE_ENV}" has no configuration`
		);
		break;
}

// Testing
console.log(process.env.FOO);
