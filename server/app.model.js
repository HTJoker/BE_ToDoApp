const pool = require("./db");

exports.returnAllTodos = async () => {
	const { rows } = await pool.query(`SELECT * FROM todo`);
	return rows;
};

exports.returnTodoById = async (id) => {
	const { rows } = await pool.query(`SELECT * FROM todo WHERE todo_id = $1`, [
		id,
	]);
	return rows[0];
};

exports.createNewTodo = async (description) => {
	const { rows } = await pool.query(
		`INSERT INTO todo (description) VALUES($1) RETURNING *`,
		[description]
	);
	return rows[0];
};

exports.patchTodoById = async (id, description) => {
	const { rows } = await pool.query(
		`UPDATE todo SET description = $1 WHERE todo_id = $2`,
		[description, id]
	);
	return rows[0];
};

exports.removeTodoById = async (id) => {
	const { rows } = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
		id,
	]);
	return rows[0];
};
