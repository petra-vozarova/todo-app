import { useSelector } from "react-redux";
import ToDo from "../components/todo/todo";
import { useEffect } from "react";

const Home = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos && todos.length > 0 ? todos.map((todo) => (
        <ToDo key={todo.id} todoItem={todo}/>
      )): <div><h1>There are no todos</h1></div>}

    </div>
  );
};

export default Home;
