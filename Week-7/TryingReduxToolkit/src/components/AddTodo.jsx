import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../featuresSlices/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        className=""
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
