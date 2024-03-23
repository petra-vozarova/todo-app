import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddTodo from "./pages/add-todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
