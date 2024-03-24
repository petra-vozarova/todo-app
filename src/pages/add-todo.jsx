import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateToDo } from "../store/slices/todos-slice";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddToDo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "uncompleted",
    id: Math.floor(Math.random() * 1000),
  });
  const [isEdit, setIsEdit] = useState(false);

  const addToDoHandler = () => {
    if (!isEdit) {
      dispatch(addTodo(formData));
    } else {
      dispatch(updateToDo(formData));
    }

    setIsEdit(false);
    navigate("/");
  };

  useEffect(() => {
    if (location.state) {
      setIsEdit(true);
      const currentToDo = location.state.currentToDo;
      setFormData({
        title: currentToDo.title,
        description: currentToDo.description,
        status: currentToDo.status,
        id: currentToDo.id,
      });
    }
  }, [location]);

  return (
    <div>
      <h1>Add ToDo</h1>
      <input
        type="text"
        name="title"
        placeholder="ToDo Title"
        id="title"
        onChange={(e) => {
          setFormData({ ...formData, title: e.target.value });
        }}
        value={formData.title}
      ></input>
      <textarea
        name="description"
        placeholder="Enter ToDo description"
        id="rescription"
        onChange={(e) => {
          setFormData({ ...formData, description: e.target.value });
        }}
        value={formData.description}
      />
      <div className="radio">
        <label>
          <input
            type="radio"
            checked={formData.status === "completed"}
            value="completed"
            onChange={(e) => {
              console.log(e.target.value);
              setFormData({ ...formData, status: e.target.value });
            }}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            checked={formData.status === "uncompleted"}
            value="uncompleted"
            onChange={(e) => {
              setFormData({ ...formData, status: e.target.value });
            }}
          />
          Uncompleted
        </label>
      </div>
      <button onClick={addToDoHandler}>
        {isEdit ? "Edit ToDo" : "Add ToDo"}
      </button>
    </div>
  );
};

export default AddToDo;
