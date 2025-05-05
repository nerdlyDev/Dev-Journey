import React, { useEffect, useState } from "react";
import axios from "axios";
import useIsOnline from "./hooks /useIsOnline";
import useMousePointer from "./hooks /useMousePointer";
import useDimensions from "./hooks /useDimensions";
import useMyInterval from "./hooks /useMyInterval";
import useDebounce from "./hooks /useDebounce";

function useTodos(n) {
  const [todo, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://dummyjson.com/todos/random").then((res) => {
        setLoading(false);
        setTodos(res.data.todo);
      });
    }, n * 1000);

    // To initially fetch the todos
    axios.get("https://dummyjson.com/todos/random").then((res) => {
      console.log(res.data.todo);
      setLoading(false);
      setTodos(res.data.todo);
    });

    return () => clearInterval(interval);
  }, [n]);

  return [todo, loading];
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 1000);

  return (
    <>
      <div style={{ color: "red" }}>debouncedValue is {debouncedValue}</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </>
  );
};

export default function App() {
  const [todo, loading] = useTodos(10);
  const mousePointer = useMousePointer();
  const dimensions = useDimensions();
  const [count, setCount] = useState(0);

  useMyInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  if (!useIsOnline()) {
    return <div>Offline</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>TODO: {todo}</div>
      <div>Mouse Pointer X: {mousePointer.x}</div>
      <div>Mouse Pointer Y: {mousePointer.y}</div>
      <div>Dimensions Width: {dimensions.width}</div>
      <div>Dimensions Height: {dimensions.height}</div>
      <div>Count: {count}</div>
      <SearchBar />
    </div>
  );
}
