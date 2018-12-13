// enum StatusCode {
// 	Forbidden = 403,
// 	Unauthorized = 401,
// 	Move_permanently = 301,
// 	Ok = 200,
// 	Switching_protocols = 101,
// 	Internal_server_error = 500
// }

// console.log(StatusCode.Forbidden); // prints out 403
// console.log(typeof StatusCode.Forbidden); // number

// console.log(StatusCode[403]); // prints out Forbidden
// console.log(typeof StatusCode[403]); // string

// ==========

enum StatusCode {
	Forbidden = 403,
	Unauthorized = 401,
	Move_permanently = 301,
	Ok,
	fiveOTwo = 502,
	Switching_protocols = 101,
	Internal_server_error = 501,
	BreakTypeScript

	// Redirect = 301
	// Redirect301
}

enum StatusCode {}

// console.log(StatusCode.Forbidden); // prints out 403
// console.log(typeof StatusCode.Forbidden); // number

// console.log(StatusCode[403]); // prints out Forbidden
// console.log(typeof StatusCode[403]); // string

console.log(StatusCode[301]);
