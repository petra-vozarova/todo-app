import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/slices/todos-slice";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./todo.styles.scss";

const ToDo = ({ todoItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (currentToDoId) => {
    console.log("deleting");
    dispatch(removeTodo(currentToDoId));
  };

  const handleEdit = (currentToDo) => {
    navigate("/add", { state: { currentToDo } });
  };

  return (
    <div className={`todo-container ${todoItem.status === 'completed' ? 'done' : ''}`}>
      <h1>{todoItem.title}</h1>
      <p>{todoItem.description}</p>
      <p className="status">{todoItem.status}</p>
      <div className="todo-icons-container">
        <FaEdit onClick={() => handleEdit(todoItem)} size={30} />
        <FaTrash onClick={() => handleDelete(todoItem.id)} size={30} />
      </div>
    </div>
  );
};

export default ToDo;
