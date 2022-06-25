import { useState } from "react";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
