import { useEffect, useState } from "react";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

export default function ListTodos() {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		try {
			const res = await fetch("http://localhost:4000/todos");
			const jsonData = await res.json();
			setTodos(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className=" rounded-lg mx-auto my-5 bg-slate-400 shadow-lg p-3 w-1/3">
			<h1 className=" text-center mt-5 text-2xl font-semibold">
				All Todo Items
			</h1>
			<div className=" flex justify-center">
				<table className="mt-5">
					<thead>
						<tr className=" border-b-4 border-gray-500">
							<th className="p-3">Description</th>
							<th className="p-3">Edit</th>
							<th className="p-3">Delete</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((item) => (
							<tr key={item.todo_id} className="border-b border-gray-500">
								<td className="p-3">{item.description}</td>
								<td>
									<EditBtn todo={item} />
								</td>
								<td>
									<DeleteBtn
										id={item.todo_id}
										setTodos={setTodos}
										todos={todos}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
