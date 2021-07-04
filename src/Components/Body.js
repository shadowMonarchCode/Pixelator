import { useState } from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";
import "../Styles/Body.css";

const Body = () => {
  const [color, setColor] = useState({
    backgroundColor: "",
  });
  const onClick = (event) => {
    setColor({
      backgroundColor: event.target.className,
    });
  };
  return (
    <div className="body">
      <Left />
      <Center color={color}/>
      <Right color={color} onClick={onClick}/>
    </div>
  );
};

export default Body;
