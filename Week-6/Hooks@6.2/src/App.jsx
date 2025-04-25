import { useEffect, useState, useMemo, useCallback } from "react";
import "./App.css";
import axios from "axios";
import { set } from "mongoose";

//* useState, useEffect hooks

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get(" https://sum-server.100xdevs.com/todos ")
//     .then( function (response) {
//       setTodos(response.data.todos)
//       console.log(response.data.todos)
//     })
//   }, []);

//   return (
//     <>
//       {todos.map(todo => < Todo title = {todo.title} description = {todo.description} />)}
//     </>
//   )
// }

// function Todo({title, description}){
//   return (
//     <div className="todo">
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   )
// }
// export default App

// function App(){
//   const [selectedId, setSelectedId] = useState(1);
//   return (
//     <div>
//       <button onClick= { function (){
//         setSelectedId(1)
//       }}>1</button>
//       <button onClick= { function (){
//         setSelectedId(2)
//       }}>2</button>
//       <button onClick= { function (){
//         setSelectedId(3)
//       }}>3</button>
//       <button onClick= { function (){
//         setSelectedId(4)
//       }}>4</button>

//       <Todo id = {selectedId}></Todo>
//     </div>
//   )
// }

// function Todo({id}){
//   const [todo, setTodo] = useState({});

//   // Here we can't use async await in function because we are using the useEffect hook, In that case we can use a library called asynceffects.
//   useEffect( ()=>{
//     axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
//    .then(function(response){
//       setTodo(response.data.todo)
//     })
//   },[id]) // This is the dependency array, it tells the useEffect hook that whenever the selectedId changes, the useEffect hook will run again.

//   return (
//     <div>
//         <h1>{todo.title}</h1>
//         <p>{todo.description}</p>
//     </div>
//   )
// }

// export default App;

// * useMemo hook: It is used to memoize the value of a function.

// function App(){
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
//   //const [count,setCount] = useState(0);

//   // Here by using useMemo hook we are telling the react to only re-run the function when the inputValue changes.
//   // Here we are using the dependency array to tell the react that whenever the inputValue changes, the count should be re-run.
//   // So whenever the inputValue changes, the count should be re-run.
//   // Here we can also use the previously used useEffect hook but it introduces a extra state variable which is not required.
//   let count = useMemo(() =>{
//     let count = 0;
//   for(let i = 1; i <= inputValue; i++){
//     count += i;
// }
// return count;
//   },[inputValue]);

//   // useEffect(()=>{
//   //   let finalCount = 0;
//   //   for(let i = 1; i <= inputValue; i++){
//   //     finalCount += i;
//   //   }
//   //   setCount(finalCount);
//   // },[inputValue])

// return (
//   <div>
//     <input onChange={ function (e){
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum from 1 to n"}></input>
//     <br></br>

//     Sum from 1 to {inputValue} is {count}

//     <br></br>
//     <button onClick={() => {
//       setCounter(counter + 1);
//     }}> Counter ({counter})</button>
//   </div>
// )
// }

// export default App;

// * useCallback hook: It is a hook in React, It is used to memoize the callback functions. which can help in optimizing the performance of the application.Especially in cases involving child components that rely on reference equality to prevent unnecessary renders.

// **What is `useCallback`?**

// - `useCallback` is a React Hook that allows you to memoize a callback function.
// - Memoization means caching the function's result for a given set of dependencies.
// - If the dependencies haven't changed, the memoized function itself is not recreated on subsequent renders.

// **Why use `useCallback`?**

// - In React, components re-render whenever their state or props change.
// - If a component passes a function as a prop to a child component, that function is recreated on every re-render of the parent, even if the function itself hasn't changed.
// - This can be problematic for performance-critical child components that rely on reference equality to avoid unnecessary re-renders.

// **How does `useCallback` help?**

// - By wrapping a function with `useCallback`, you can tell React to memoize that function based on the provided dependencies.
// - If the dependencies haven't changed between renders, the memoized function instance is returned.
// - This avoids unnecessary re-creations of the function, potentially improving the performance of child components that rely on it.

// **Simple Code Example:**

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!", count);
  }, [count]); // Dependency: count

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ParentComponent;
// ```

// **Explanation:**

// 1. **Parent Component:**
//    - The `ParentComponent` manages the `count` state.
//    - It defines a `handleClick` function that logs a message with the current `count` value.

// 2. **`useCallback`:**
//    - The `handleClick` function is wrapped with `useCallback`.
//    - The dependency array `[count]` is provided. This tells `useCallback` to only re-create the function if the `count` value changes.

// 3. **Child Component (implicit):**

//    - Imagine this component renders a button that triggers the `handleClick` function passed as a prop.

// **Benefits:**

// - If the `count` value remains the same between renders of the `ParentComponent`, the memoized `handleClick` function is returned by `useCallback`.
// - This avoids unnecessary re-creations of the function, potentially improving the performance of the child component that uses it (assuming it relies on reference equality to avoid re-renders).

// **Important Note:**

// - `useCallback` should be used judiciously. Overusing it can add overhead.
// - It's generally recommended to only use `useCallback` when necessary to optimize performance for child components that rely on reference equality.
