import { useState } from "react";

function App() {
  const [value, setValue] = useState( 0 );
  const inc = () => setValue( x => x + 1 );
  return (
    <div className="App">
      <h1 style={{ color: "#0a0" }}>Value: {value}</h1>
      <button onClick={inc} style={{ background: "#555", color: "#eee", fontSize: 24 }}>Increment</button>
      <hr />
      <p>Deploying automatically to https://heroic-fudge-deafe0.netlify.app/ on each push to master branch.</p>
    </div>
  );
}

export default App;
