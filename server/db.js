const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "aversion",
	host: "localhost",
	port: "5432",
	database: "toDoApp",
});

module.exports = pool