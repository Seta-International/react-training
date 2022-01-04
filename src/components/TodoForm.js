import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000), 
      title: input,
      completed: false,
    });

    setInput(""); //Clear input
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="What's the Plan for Today?"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input edit"
      />
      <button onClick={handleSubmit} className="todo-button edit">
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
