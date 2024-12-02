import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  console.log("inside App");
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
