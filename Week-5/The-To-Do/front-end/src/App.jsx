import { useState } from "react";
import "./App.css";
import { CreateTodo, Todos } from "./components/CreateTodo";

function App() {
  const { todos, setTodos } = useState([]);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
