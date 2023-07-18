import { useState, useEffect } from "react"
import Button from "./Button"
import styles from "./App.module.css"

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("I run all the time");
  useEffect(() => {
    console.log("call the API...")
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
