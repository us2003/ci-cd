import { useState } from "react";

function App() {
  const [value, setValue] = useState( 0 );
  const inc = () => setValue( x => x + 1 );
  return (
    <div className="App">
      <h1>Value: {value}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
}

export default App;
