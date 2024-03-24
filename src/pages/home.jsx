import { useSelector } from "react-redux";
import ToDo from "../components/todo/todo";
import "./home.styles.scss";

const Home = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="home-container">
      {todos && todos.length > 0 ? (
        todos.map((todo) => <ToDo key={todo.id} todoItem={todo} />)
      ) : (
        <div>
          <h1>There are no todos</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
