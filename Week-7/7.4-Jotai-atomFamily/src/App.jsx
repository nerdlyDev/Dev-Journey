import Counter from "./components/Counter";

function App() {
  return (
    console.log("App"),
    (
      <div>
        <h3>Dynamic Counters</h3>
        <Counter id="counter1" />
        <Counter id="counter2" />
        <Counter id="counter3" />
      </div>
    )
  );
}

export default App;
