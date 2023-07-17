import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <h1>MovieMania With Prathamesh</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
