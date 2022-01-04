import React from "react";
import { Link } from "react-router-dom";

const Todo = ({ todos, onCompleteTodo, onRemoveTodo }) => {
  return todos.map((todo, index) => (
    <div className="todo-col">
      <div
        key={todo.id}
        onClick={() => onCompleteTodo(todo.id)}
        className={todo.completed ? "todo-row complete" : "todo-row"}
      >
        <Link className="link" to={`/todo-detail/${todo.id}`}>
          <div>{todo.title}</div>
        </Link>
      </div>
      <button
        variant="text"
        onClick={() => onRemoveTodo(todo.id)}
        className={todo.completed ? "delete-icon complete" : "delete-icon"}
      >
        Del
      </button>
    </div>
  ));
};

export default Todo;
