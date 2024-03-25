import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/slices/todos-slice";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./todo.styles.scss";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";

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

  const handleCheckChange = (currentToDo) => {
    console.log(currentToDo.status);
    dispatch(
      toggleTodo({
        ...currentToDo,
        status:
          currentToDo.status === "completed" ? "uncompleted" : "completed",
      })
    );
  };

  return (
    <div
      className={`todo-container ${
        todoItem.status === "completed" ? "done" : ""
      }`}
    >
      <h1>{todoItem.title}</h1>
      {todoItem.description ? <h3>{todoItem.description}</h3> : null}
      <Checkbox
        checked={todoItem.status === "completed"}
        onClick={() => handleCheckChange(todoItem)}
        size="large"
        style={{ paddingBottom: "25px" }}
        color="success"
      />
      <Stack spacing={2} direction={"row"} pb="25px">
        <Button
          variant="contained"
          onClick={() => handleEdit(todoItem)}
          startIcon={<FaEdit size={20} />}
          sx={{ width: "50%", paddingLeft: "10px"}}
          color="secondary"
        >
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={() => handleDelete(todoItem.id)}
          startIcon={<FaTrash size={20} />}
          sx={{ width: "50%", paddingRight: "10px"}}
          color="warning"
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
};

export default ToDo;
