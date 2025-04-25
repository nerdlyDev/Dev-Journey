import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  //return <MyComponent />; //functional component
  //return <MyAnotherComponent />; // class component
  return <MyComponentLifeCycle />;
}

//* This is the example of a functional component showing how they are written and used in react
function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

//* This is the example of a class component and showing how they were written and used in react

class MyAnotherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anotherCount: 0 };
  }

  incrementAnotherCount = () => {
    this.setState({ anotherCount: this.state.anotherCount + 1 });
  };
  render() {
    return (
      <div>
        <p>{this.state.anotherCount}</p>
        <button onClick={this.incrementAnotherCount}>AnotherIncrement</button>
      </div>
    );
  }
}

//* This is the example of how component lifeCycle works in a react functional component

function MyComponentLifeCycle() {
  useEffect(() => {
    //* This console runs first time when component mounts to DOM
    console.log("MyComponent lifeCycle mounted !!");

    return () => {
      //* this function runs for cleanup meaning when it runs to cleanup previous effects

      console.log("MyComponent lifeCycle unmounted !!");
    };
  }, []);

  return <div>Hey, MyComponent lifeCycle</div>;
}

export default App;
