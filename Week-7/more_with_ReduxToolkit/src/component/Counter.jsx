// src/components/Counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  fetchRandomNumber,
} from "../features/counterSlice";

const Counter = () => {
  const { value, loading, error } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Counter: {value}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className={`bg-green-500 text-white px-4 py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => dispatch(fetchRandomNumber())}
        disabled={loading}
      >
        Fetch Random Number
      </button>
      {loading && <p className="text-yellow-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </div>
  );
};

export default Counter;
