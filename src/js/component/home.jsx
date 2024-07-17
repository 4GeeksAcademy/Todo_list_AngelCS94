import React, { useState } from "react";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const SumaDeTodo = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			if (todo.trim() !== "") {
				setTodos([...todos, todo]);
				setTodo("");
			}
		}
	};

	const EliminaTodo = (index) => {
		const nuevoTodo = todos.filter((_, todoIndex) => todoIndex !== index);
		setTodos(nuevoTodo);
	};

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todo list!</h1>
			<form>
				<div className="mb-3 container">
					<label htmlFor="todoInput" className="form-label"></label>
					<input
						type="text"
						className="form-control"
						id="todoInput"
						placeholder="What's needs to be done?"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						onKeyDown={SumaDeTodo}
					/>
				</div>
			</form>
			<ul className="list-group mt-3">
				{todos.map((item, index) => (
					<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
						{item}
						<button className="btn btn-danger" onClick={() => EliminaTodo(index)}>
						<i className="fa-light fa-xmark"></i>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;