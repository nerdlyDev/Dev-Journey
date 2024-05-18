import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// State, components
import {useState} from 'react'; // Hook 
// function App() {
//   const [count, setCount] = useState(0); 
//   // the react way of defining states, In react we can't use the simple JS object to define states, we have to use the useState hook

//   function onclickHandler() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       {/* //when ever you want to re render or a JS variable inside a react component put it in curly braces, like this {count}, this is the syntax which we have to follow to render a dynamic website */}
      
//       {/* <button onClick = {onclickHandler}>Counter {count}</button> */}

//       <CustomButton count = {count} setCount = {setCount}/>
//     </div>
//   )
// }
// // component
// function CustomButton(props){

//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick = {onClickHandler}>Counter {props.count}</button>;
// }


function App(){
  const [todos, setTodos] = useState([{
    title: "GO to Gym",
    description: " Go to Gym 7 times a week",
    completed: false
  },
  {
    title: "Study DSA",
    description: "Study DSA 3 times a week", completed: true
  }]);

  return(
    <div>
      {/* <Todo title = {todos[0].title} description = {todos[0].description}/>
      <Todo title = {todos[1].title} description = {todos[1].description}/> */}
      {
        todos.map((todo) => <Todo title = {todo.title} description = {todo.description}/>)
      }
    </div>
  )
}

// It will take three inputs like title, description and completed
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}



export default App
