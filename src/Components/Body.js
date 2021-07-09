import React, { useState } from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";
import "../Styles/Body.css";

const Body = (props) => {
  const [color, setColor] = useState({
    backgroundColor: "gainsboro",
  });
  const [state, setState] = useState(false);
  const [colorFill, setColorFill] = useState(false);
  const [clicked, setClicked] = useState([false, false, false]);
  const ref = React.createRef();
  const onClick = (event) => {
    state &&
      setColor({
        backgroundColor: event.target.className,
      });
  };
  const onClear = () => {
    const px = document.getElementsByClassName("pixel");
    for (let item of px) {
      item.style.backgroundColor = "gainsboro";
    }
  };
  const onEraser = (event) => {
    setColor({
      backgroundColor: "gainsboro",
    });
    setState(false);
    setColorFill(false);
    setClicked([false, true, false]);
  };
  const onPen = (event) => {
    setState(true);
    setColorFill(false);
    setClicked([true, false, false]);
  };
  const onFill = (event) => {
    setState(true);
    setColorFill(true);
    setClicked([false, false, true]);
  };
  return (
    <div className="body">
      <Left
        onClick={onClear}
        pen={onPen}
        eraser={onEraser}
        fill={onFill}
        border={clicked}
      />
      <Center color={color} reference={ref} fill={colorFill} />
      <Right
        color={color}
        onClick={onClick}
        reference={ref}
        name={props.name}
      />
    </div>
  );
};

export default Body;
