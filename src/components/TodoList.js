import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  let getTodos = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    setTodos(data);
  };

  const addTodo = (todo) => {
    //Fetch API POST: resource will not be really updated on the server but it will be faked as if.(https://jsonplaceholder.typicode.com/guide/)
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: todo.title,
        userId: 1,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    //Fetch API DELETE: resource will not be really updated on the server but it will be faked as if.(https://jsonplaceholder.typicode.com/guide/)
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        //Fetch API PUT: resource will not be really updated on the server but it will be faked as if.(https://jsonplaceholder.typicode.com/guide/)
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PUT",
          body: JSON.stringify({
            id: id,
            completed: !todo.completed,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>SIMPLE TODOS APP</h1>
      <TodoForm onSubmit={addTodo} />
      {todos.length === 0 ? (
        <div>
          <p>Please write what you need to do</p>
        </div>
      ) : (
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      )}
    </>
  );
}

export default TodoList;
