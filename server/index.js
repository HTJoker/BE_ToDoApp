const express = require("express");
const cors = require("cors");
const pool = require("./db");
const {
	getAllTodos,
	postTodo,
	getTodoById,
	updateTodoById,
	deleteTodoById,
} = require("./app.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", getAllTodos);

app.get("/todos/:id", getTodoById);

app.post("/todos", postTodo);

app.put("/todos/:id", updateTodoById);

app.delete("/todos/:id", deleteTodoById);

app.listen(4000, () => {
	console.log(`Server running on port 4000`);
});
