import { useAtom } from "jotai";
import { counterFamily } from "../atoms";

function Counter({ id }) {
  const [count, setCount] = useAtom(counterFamily(id)); // Dynamically get an atom for the given ID

  return (
    <div>
      <h3>Counter {id}</h3>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
