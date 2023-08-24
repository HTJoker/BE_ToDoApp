import PropTypes from "prop-types";

export default function DeleteBtn({ id, setTodos, todos }) {
	DeleteBtn.propTypes = {
		id: PropTypes.number.isRequired,
		todos: PropTypes.string.isRequired,
		setTodos: PropTypes.func.isRequired,
	};

	const deleteTodo = async (id) => {
		try {
			const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
				method: "DELETE",
			});
			console.log(deleteTodo);
			setTodos(todos.filter((item) => item.todo_id !== id));
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<button
			className="border rounded-lg pr-2 pl-2 bg-red-500 text-white"
			onClick={() => deleteTodo(id)}
		>
			Delete
		</button>
	);
}
