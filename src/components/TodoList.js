import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./features/todos/todosSlice";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (todo) => dispatch(addTodo(todo)),
  onRemoveTodo: (id) => dispatch(removeTodo(id)),
  onToggleTodo: (id) => dispatch(toggleTodo(id)),
});

function TodoList({ todos, onAddTodo, onRemoveTodo, onToggleTodo }) {
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
