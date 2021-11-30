import React from "react";

const Todo = ({ todos, completeTodo, removeTodo }) => {

  return todos.map((todo, index) => (
    <div className="todo-col">
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        className={todo.completed ? "todo-row complete" : "todo-row"}
      >
        <div>{todo.title.length > 50 ? todo.title.slice(0,50) + '...' : todo.title}</div>
      </div>
      <button
        variant="text"
        onClick={() => removeTodo(todo.id)}
        className={todo.completed ? "delete-icon complete" : "delete-icon"}
      >
        Del
      </button>
    </div>
  ));
};

export default Todo;
