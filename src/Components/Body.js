import { React, useState } from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";
import "../Styles/Body.css";

const Body = () => {
  const [color, setColor] = useState({
    backgroundColor: "",
  });
  const [state, setState] = useState(false);
  const ref = React.createRef();
  console.log(ref);
  const onClear = () => {
    setState(true);
  };
  const onClick = (event) => {
    setColor({
      backgroundColor: event.target.className,
    });
  };
  return (
    <div className="body">
      <Left onClear={onClear}/>
      <Center color={color} state={state} reference={ref}/>
      <Right color={color} onClick={onClick} reference={ref}/>
    </div>
  );
};

export default Body;
