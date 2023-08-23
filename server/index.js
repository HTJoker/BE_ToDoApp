const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todos", async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query(
			`INSERT INTO todo (description) VALUES($1)`,
			[description]
		);
		res.json(newTodo);
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(4000, () => {
	console.log(`Server running on port 4000`);
});
