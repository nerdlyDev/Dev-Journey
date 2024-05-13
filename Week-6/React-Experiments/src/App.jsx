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

function App() {
  const [title, setTitle] = useState("DevX");

  function updateTitle(){ 
    setTitle("DevX " + Math.random());
  }

  return (
    <div>
      <button onClick = {updateTitle}>Click Me</button>
      <Header title={title}/>
      <Header title="Hello React"/>
      <Header title="Hello React"/>
      <Header title="Hello React"/>
      <Header title="Hello React"/>
      <Header title="Hello React"/>
    </div>
  )
  }


const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App




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
