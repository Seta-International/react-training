import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../components/features/todos/todosSlice";

const TodoDetail = () => {
  let { id } = useParams();

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const onUpdateTodo = (todo) => dispatch(updateTodo(todo));
  let textUpdate = "";

  let matchedTodo = todos.find((todo) => todo.id === id);

  return (
    <div className="note">
      <textarea
        onChange={(e) => {
          textUpdate = e.target.value;
        }}
        placeholder={matchedTodo ? matchedTodo.title : ""}
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

export default TodoDetail;
