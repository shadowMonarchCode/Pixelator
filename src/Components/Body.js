import React, { useState } from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";
import "../Styles/Body.css";

const Body = () => {
  const [color, setColor] = useState({
    backgroundColor: "gainsboro",
  });
  const ref = React.createRef();
  const onClick = (event) => {
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
  return (
    <div className="body">
      <Left onClick={onClear} />
      <Center
        color={color}
        reference={ref}
      />
      <Right color={color} onClick={onClick} reference={ref} />
    </div>
  );
};

export default Body;
