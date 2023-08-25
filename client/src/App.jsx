import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
	return (
		<div className=" m-0 p-0 box-border">
			<InputTodo />
			<ListTodos />
		</div>
	);
}

export default App;
