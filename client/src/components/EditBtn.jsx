/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditBtn({ todo }) {
	const [showModal, setShowModal] = useState(false);
	const [description, setDescription] = useState(todo.description);

	const updateDescription = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			const res = await fetch(`http://localhost:4000/todos/${todo.todo_id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			window.location = "/";
			console.log(res);
			setShowModal(false);
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<>
			<button
				className="border rounded-lg px-2 bg-amber-500 text-white"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Edit
			</button>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h2 className="text-3xl font-semibold">Edit Task</h2>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className=" bg-transparent text-black text-3xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								<div className="relative p-6 flex-auto">
									<input
										type="text"
										className=" w-full text-slate-500 text-lg leading-relaxed px-3 border rounded-md "
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									></input>
								</div>
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={(e) => updateDescription(e)}
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
