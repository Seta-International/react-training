import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TodoDetail = () => {
  let { id } = useParams();
  let [todo, setTodo] = useState(null);
  let textUpdate = "";

  useEffect(() => {
    async function getDetail() {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      let data = await response.json();
      setTodo(data);
    }

    getDetail();
  }, [id]);

  async function handleSubmit() {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: textUpdate }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="note">
      <textarea
        onChange={(e) => {
          textUpdate = e.target.value;
        }}
        placeholder={todo?.title}
      ></textarea>
      <div>
        <button onClick={handleSubmit}><Link className = 'link' to='/'>Update</Link></button>
      </div>
    </div>
  );
};

export default TodoDetail;
