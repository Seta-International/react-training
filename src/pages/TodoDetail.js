import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateTodo } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  onUpdateTodo: (id, text) => dispatch(updateTodo(id, text)),
});

const TodoDetail = ({ onUpdateTodo }) => {
  let { id } = useParams();
  let textUpdate = "";

  return (
    <div className="note">
      <textarea
        onChange={(e) => {
          textUpdate = e.target.value;
        }}
      ></textarea>
      <div>
        <button onClick={() => onUpdateTodo(id, textUpdate)}><Link className = 'link' to='/'>Update</Link></button>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TodoDetail);
