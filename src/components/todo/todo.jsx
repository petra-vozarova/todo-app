import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/slices/todos-slice";
import { useNavigate } from "react-router-dom";

const ToDo = ({ todoItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log("deleting");
    dispatch(removeTodo(todoItem.id));
  };
  return (
    <div>
      <h1>{todoItem.title}</h1>
      <p>{todoItem.description}</p>
      <p>{todoItem.status}</p>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default ToDo;
