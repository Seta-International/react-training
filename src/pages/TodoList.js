import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../components/features/todos/todosSlice";

function TodoList() {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();
  const onAddTodo = (todo) => dispatch(addTodo(todo));
  const onRemoveTodo = (id) => dispatch(removeTodo(id));
  const onToggleTodo = (id) => dispatch(toggleTodo(id));
  return (
    <>
      <Link className="link" to="/">
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
          onCompleteTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      )}
    </>
  );
}

export default TodoList;
