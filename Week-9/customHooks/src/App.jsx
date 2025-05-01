import React, { useEffect, useState } from "react";
import axios from "axios";

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

export default function App() {
  const [todo, loading] = useTodos(10);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>{todo}</div>
    </div>
  );
}
