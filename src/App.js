import Body from "./Components/Body";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [name, setName] = useState("untitled");
  return (
    <div>
      <Header setname={setName} />
      <Body name={name} />
    </div>
  );
}

export default App;
