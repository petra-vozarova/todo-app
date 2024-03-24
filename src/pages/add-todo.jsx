import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todos-slice";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "uncompleted",
    id: Math.floor(Math.random() * 1000),
  });
  const addToDoHandler = () => {
    dispatch(addTodo(formData));
  };
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
      ></input>
      <textarea
        name="description"
        placeholder="Enter ToDo description"
        id="rescription"
        onChange={(e) => {
          setFormData({ ...formData, description: e.target.value });
        }}
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
      <button onClick={addToDoHandler}>Add ToDo</button>
    </div>
  );
};

export default AddToDo;
