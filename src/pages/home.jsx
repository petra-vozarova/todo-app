import { useSelector } from "react-redux";
import ToDo from "../components/todo/todo";
import "./home.styles.scss";
import Grid from "@mui/material/Grid";


const Home = () => {
  const todos = useSelector((state) => state.todos);


  return (
    <div className="home-container">
      <Grid style={{margin: "auto", maxWidth: "100vW"}}container rowSpacing={3} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <Grid key={todo.id} item xs={5} md={4} lg={3} padding={'5%'}>
              <ToDo  todoItem={todo} />
            </Grid>
          ))
        ) : (
          <div>
            <h1>There are no todos</h1>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default Home;
