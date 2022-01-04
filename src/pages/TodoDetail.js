import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateTodo } from "../components/features/todos/todosSlice";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateTodo: (todo) => dispatch(updateTodo(todo)),
});

const TodoDetail = ({ todos, onUpdateTodo }) => {
  let { id } = useParams();
  let textUpdate = "";

  let isTodo = todos.find((todo) => todo.id === id);

  return (
    <div className="note">
      <textarea
        onChange={(e) => {
          textUpdate = e.target.value;
        }}
        placeholder={isTodo ? isTodo.title : ''}
      ></textarea>
      <div>
        <button onClick={onUpdateTodo}>
          <Link className="link" to="/">
            Update
          </Link>
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);
