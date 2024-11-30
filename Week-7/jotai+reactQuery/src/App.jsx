import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";

const App = () => {
  return (
    <div>
      <h1>TODO App</h1>
      <TodoList />
      <AddTodoModal />
    </div>
  );
};

export default App;
