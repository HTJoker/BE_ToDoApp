import { useState } from "react";

export default function InputTodo() {
	const [description, setDescription] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			const res = await fetch("http://localhost:4000/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			console.log(res);
			window.location = "/";
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className=" w-full flex flex-col items-center">
			<h1 className=" mt-5 text-3xl">PERN Todo List</h1>
			<form className=" flex mt-5" onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Add New Task"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="  border-grey-300 border focus:border-indigo-600 p-1"
				/>
				<button className=" rounded-r bg-emerald-400 px-3 text-white">
					Add
				</button>
			</form>
		</div>
	);
}
