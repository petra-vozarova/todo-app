import { useSelector } from "react-redux";
import ToDo from "../components/todo/todo";
import "./home.styles.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Home = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="home-container">
      <Grid
        style={{ margin: "auto", maxWidth: "90vW" }}
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 4, md: 6, lg: 8 }}
      >
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <Grid
              key={todo.id}
              item
              xs={7}
              md={5}
              lg={4}
              padding={"5%"}
              margin={"auto"}
              maxWidth={"100px"}
            >
              <ToDo todoItem={todo} />
            </Grid>
          ))
        ) : (
          <Stack m={"auto"}>
            <h2>Currently No ToDos To Display</h2>
            <Button m="auto" variant="outlined" color="secondary">
              Start
            </Button>
          </Stack>
        )}
      </Grid>
    </div>
  );
};

export default Home;
