import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateToDo } from "../store/slices/todos-slice";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

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

  const handleChange = (event) => {
    setFormData({
      ...formData,
      status: event.target.checked ? "completed" : "uncompleted",
    });
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
    <Stack sx={{ width: "40%" }} m={"auto"} pt={"150px"}>
      <h1>Add ToDo</h1>
      <TextField
        sx={{ marginBottom: "20px" }}
        label="ToDo Title"
        required
        onChange={(e) => {
          setFormData({ ...formData, title: e.target.value });
        }}
        value={formData.title}
      />
      <TextField
        label="ToDo Description"
        onChange={(e) => {
          setFormData({ ...formData, description: e.target.value });
        }}
        value={formData.description}
        multiline={true}
      />

      <FormControlLabel
        sx={{ margin: "10px auto" }}
        control={
          <Switch
            checked={formData.status === "completed"}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            color="success"
          />
        }
        label="Completed"
      />

      <Button onClick={addToDoHandler} variant="outlined" color="secondary">
        {isEdit ? "Edit ToDo" : "Add ToDo"}
      </Button>
    </Stack>
  );
};

export default AddToDo;
