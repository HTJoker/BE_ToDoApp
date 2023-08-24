import { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

export default function ListTodos() {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		try {
			const res = await fetch("http://localhost:4000/todos");
			const jsonData = await res.json();
			setTodos(jsonData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div>
			<h1 className=" text-center mt-5 text-2xl">All Todo Items</h1>
			<div className=" flex justify-center">
				<table className="mt-5">
					<tr className=" border-t border-b border-gray-300">
						<th className="p-3">Description</th>
						<th className="p-3">Edit</th>
						<th className="p-3">Delete</th>
					</tr>
					{todos.map((item) => (
						<tr key={item} className=" border-b">
							<td className="p-3">{item.description}</td>
							<td className="p-3">
								<EditTodo />
							</td>
							<td className="p-3">
								<button className="border rounded-lg pr-2 pl-2 bg-red-500 text-white">
									Delete
								</button>
							</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	);
}
