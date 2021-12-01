import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Link } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await response.json();
      setTodos(data);
    }
    getTodos();
  }, []);

  const onAddTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const onRemoveTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const onCompleteTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Link className = 'link' to="/">
        <h1>SIMPLE TODOS APP</h1>
      </Link>
      <TodoForm onSubmit={onAddTodo} />
      {todos.length === 0 ? (
        <div>
          <p>Please write what you need to do</p>
        </div>
      ) : (
        <Todo
          todos={todos}
          onCompleteTodo={onCompleteTodo}
          onRemoveTodo={onRemoveTodo}
        />
      )}
    </>
  );
}

export default TodoList;
