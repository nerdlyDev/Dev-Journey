import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../featuresSlices/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => {
        <li key={todo.id}> {todo.text} </li>;
        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>;
      })}
    </>
  );
}
