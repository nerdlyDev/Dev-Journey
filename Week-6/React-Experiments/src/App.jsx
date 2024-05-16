/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React,{Fragment} from "react"
import { useState } from "react"

// * The OG codebase with a lot of re-rendering
// function App() { 
//   const [title, setTitle] = useState("DevX"); // A state variable to store data 
  
//   function updateTitle(){ // A function to update the state variable also known as Event Handler
//     setTitle("DevX " + Math.random());
//   }
//   return (
//     <div>
//       {/* It's xml not html but eventually will be converted to html */}
//       <button onClick = {updateTitle}>Click Me</button>  
//       <Header title={title}/> 
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//     </div> // You can't return multiple sibling components in react without a top level component / parent <div></div> 
    // This is because react is a component based framework and not a template based framework
    // But we can get rid of this extra div(which is extra dom element) by using empty tags like <></> or <React.Fragment></React.Fragment> or <Fragment></Fragment>

//   )
// }
 
// function Header({title}){ //Here we are using Object destructuring syntax but can also use prop based syntax
//   return <div>
//     {title}
//   </div>
// }

// export default App



// * The CodeBase1 using functional component
// function App() {
  
//   return (
//     <div>
//       <HeaderWithButton/> {/*using this component to access state variables and avoid unwanted re-rendering */} 
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//     </div>
//   )

//   function HeaderWithButton(){ 
//     // Moved the state variable to a separate component to avoid re-rendering the whole app
//     const [title, setTitle] = useState("DevX");
  
//   function updateTitle(){ 
//     setTitle("DevX " + Math.random());
//   }

//   return <div>
//     <button onClick = {updateTitle}>Click Me</button>
//     <Header title={title}/>
//   </div>
//   }
// }
 
// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App




// The CodeBase3

// function App() {
//   const [title, setTitle] = useState("DevX");

//   function updateTitle(){ 
//     setTitle("DevX " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick = {updateTitle}>Click Me</button>
//       <Header title={title}/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//       <Header title="Hello React"/>
//     </div>
//   )
//   }


// const Header = React.memo(function Header({title}){
//   return <div>
//     {title}
//   </div>
// })

// export default App




// ** The re-render process: use react dev tools to better understanding.

// ? It happens when
// * A state variable that is being used inside a component changes.
// * A parent component re-render triggers all children re-rendering. Meaning in above code when we click on the button, all the children components will re-render.

// ? What we need to: 
// * Need to avoid unnecessary re-renders, to improve performance.

// ? How we can do that:

// * One way to do that is by using memoization as shown above in codebase2.What is memoization? : memo lets you skip rendering a component when the props haven’t changed.
// * By using this approach only the component with button and header( with the changing value) and the parent component will re-render.
// There are multiple ways to do memoization.


// * Another way is by using PureComponent but its not recommended.


// * A common way is by moving the state variable outside the component as shown above in codebase1.In this way only the component with button and header( with the changing value) component will re-render.
// In above code, only the button and the header(with changing values ) component will re-render by using this approach.

// ** If there is a state variable which will be use globally or by lowest level child component, then we can move it outside(the idea is to keep it to the lowest common child ancestor ) the component as shown above in codebase1. Push down the state as much as possible.




// * When a component's state changes (e.g., by clicking a button) or when it receives new props, React schedules a re-render for that component.

// ? Reconciliation:

// * React doesn't directly manipulate the real DOM, which can be expensive. Instead, it performs a process called reconciliation to identify the minimal changes required in the actual DOM.

// ? Here's how reconciliation works:
// *React compares the new virtual DOM tree (reflecting the changes) with the previous virtual DOM tree.It uses a diffing algorithm to efficiently identify the smallest set of updates needed in the real DOM.

// *Updating the Real DOM:

// * Based on the reconciliation results, React only updates the parts of the real DOM that have actually changed. This minimizes unnecessary DOM manipulations and improves performance.







// * Keys in react: 



// Understanding keys in react by creating a simple todo app.
// let counter = 4;

// function App(){
//   const [todos, setTodos] = useState([
//     {
//       id:2,
//       title: 'Learn React',
//       description: 'Learn React as fast you can'
//     },
//     {
//       id:1,
//       title: 'Prepare DSA',
//       description: 'Prepare DSA as fast as you can'
//     },
//     {
//       id:3,
//       title: 'Do daily projects',
//       description: 'Do daily projects : minor or major doesn\'t matter '
//     }
//   ]);

//   function addTodo(){
//     setTodos([...todos,{
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }]) // * using (...)spread operator, In the addTodo function, the spread operator (...todos) is used to create a copy of the existing todos array. This ensures we don't mutate the original state directly. A new todo object is then added to this copied array. Finally, the setTodos function updates the state with the new array containing both the existing todos and the newly created one.

//     // * Can also be done this way: Same thing but different way
//   //   const newTodos = [];
//   //   for( let i = 0; i < todos.length; i++){
//   //     newTodos.push(todos[i]);
//   // }
//   // // newTodos == todos 
//   // newTodos.push({
//   //   id: 4,
//   //   title: Math.random(),
//   //   description: Math.random()
//   // })
//   // // adding existing ones and new one
//   // setTodos(newTodos);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}> Add </button>
//       {/* {todos.map(function (todo){
//         return <Todo key = {todo.id} title={todo.title} description={todo.description} />
//       })} */}
//       {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description={todo.description} />)}
//       {/*
// 1. **Curly Braces `{}`:**
//    - In JSX (JavaScript XML)
// 2. **`todos.map`:**
//    - `todos` is assumed to be an array containing todo objects. Each object likely has properties like `title` and `description` to represent a single todo item.
//    - `map` is a built-in function for arrays. It iterates through each element in the `todos` array and executes a provided callback function for every element.

// 3. **Callback Function `function (todo) {...}`:**
//    - This anonymous function is the heart of the logic. It's called for each `todo` object in the `todos` array.
//    - `todo`: This is a parameter that represents the current `todo` object being processed during the iteration.

// 4. **`return <Todo ... />`:**
//    - Inside the callback function, a JSX element is created and returned. This element represents a single todo item.
//    - `<Todo ... />`: This likely refers to a separate React component named `Todo`. It's responsible for rendering the visual representation of a todo item, potentially displaying the `title` and `description` properties passed as props.
//    - `title={todo.title}` and `description={todo.description}`: These are attributes (or props) passed to the `Todo` component. They provide the specific `title` and `description` values from the current `todo` object being processed. These values will be used by the `Todo` component to render the content.


//    In React, keys are unique identifiers assigned to elements within lists to help React efficiently optimize the rendering process. Here's why they're important:

// Identifying Changes:

// When your data (the list of items) changes, React needs to determine which elements have been added, removed, or updated. This is where keys come in.
// Each element in a list should have a unique key prop assigned. This key helps React identify the specific element that has changed, rather than relying on the element's position in the list (which can be unreliable).

//       */}
//     </div>
//   )
// }

// function Todo({title,description}){
//   return(
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   )
// }

// export default App;





//* What is wrapper component and its purpose?

// the ugly way but good for understanding the concept
// function App(){
//   return(
//     <div>
//     <CardWrapper innerComponent={<TextComponent/>} />
//     <br></br>
//     <CardWrapper innerComponent={<TextComponent2/>} />
//     </div>
//   )
// }

// function CardWrapper({innerComponent}){
//   return(
//     <div style = {{border: "2px solid black", padding: 20 }}> {innerComponent}
//     </div>
//   )
// }

// function TextComponent(){
//   return(
//     <div>
//       Hey There !!
//     </div>
//   )
// }

// function TextComponent2(){
//   return(
//     <div>
//       Hey There !!
//     </div>
//   )
// }

// export default App;



//* The real right way of using wrapper component for multiple components(e.g. multiple cards, Signup form, etc.)

// When ever you want to use the same component multiple times, you can use wrapper component.
function App(){
  return(
    <div>
      <CardWrapper>
        Hey There !
      </CardWrapper>
      <br></br>

      <CardWrapper>
        Hello there ! 
      </CardWrapper>
      <br></br>

      <CardWrapper>
        <CardWrapper>
          The magic 
        </CardWrapper>
      </CardWrapper>
      <br></br>

      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
      <br></br>

      <CardWrapper>
        <button>Click Me</button>
      </CardWrapper>


    </div>
    
  )
} 

function CardWrapper({children}){ // This is a wrapper component. which takes children as props.
  return(
    <div style = {{border: "2px solid black", padding: 20 }}> {children}
    </div>
  )
}

function TextComponent(){
  return(
    <div>
      Hi from text component !!
    </div>
  )
}
export default App;


//* Hooks : useEffect, useCallback, useMemo, useRef, useReducer, useContext, useImperativeHandle, useLayoutEffect, useDebugValue

// These are spacial functions which are start with "use" called hooks.

// Hooks in React are functions that allow you to "hoo into" React state and lifecycle features from function components.