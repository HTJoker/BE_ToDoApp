const {
	returnTodoById,
	returnAllTodos,
	createNewTodo,
} = require("./app.model");
const pool = require("./db");

exports.getAllTodos = async (req, res) => {
	try {
		const todos = await returnAllTodos();
		res.status(200).send(todos);
	} catch (err) {
		console.error(err.message);
	}
};

exports.getTodoById = async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await returnTodoById(id);
		res.status(200).send(todo);
	} catch (err) {
		console.error(err.message);
	}
};

exports.postTodo = async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await createNewTodo(description);
		res.status(201).send(newTodo);
	} catch (err) {
		console.error(err.message);
	}
};

exports.updateTodoById = async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updatedTodo = await pool.query(
			`UPDATE todo SET description = $1 WHERE todo_id = $2`,
			[description, id]
		);
		res.status(200).send(updatedTodo);
	} catch (err) {
		console.error(err.message);
	}
};

exports.deleteTodoById = async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
			id,
		]);
		res.status(200).send("Todo deleted");
	} catch (err) {
		console.error(err.message);
	}
};
