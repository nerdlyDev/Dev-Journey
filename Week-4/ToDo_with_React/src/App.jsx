import { useState } from "react";
import "./App.css";

// Dynamic websites
// * When u have to create a dynamic website, you write a lot of js code that does DOM manipulation

// * What is react?
// * Is it website creation framework?
// * Or is react-dom the website creation framework ?
// * If it is rect-dom, then what is react? What is the need of react ?

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
