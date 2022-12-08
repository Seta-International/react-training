import React from "react";
import "./App.css";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="todo-app">
      <BrowserRouter location={history.location} navigator={history}>
      <Routes>
        <Route exact path="/" element={<TodoList />} />
        <Route exact path="/todo-detail/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
