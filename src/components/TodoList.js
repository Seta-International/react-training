import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Link } from "react-router-dom";
import {
  getProductsError,
  getProducts,
  getProductsPending,
} from "../reducers/fetch";
import { connect } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../actions";
// import {
//   fetchProductsPending,
//   fetchProductsSuccess,
//   fetchProductsError,
// } from "../actions";

// function fetchProducts() {
//   return (dispatch) => {
//     dispatch(fetchProductsPending());
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.error) {
//           throw res.error;
//         }
//         dispatch(fetchProductsSuccess(res.products));
//         return res.products;
//       })
//       .catch((error) => {
//         dispatch(fetchProductsError(error));
//       });
//   };
// }

const mapStateToProps = (state) => ({
  todos: state.todos,
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (todo) => dispatch(addTodo(todo.title)),
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
