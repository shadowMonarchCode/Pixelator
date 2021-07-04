import "../Styles/Right.css";
import { useState } from "react";

const Right = () => {
  const [color, setColor] = useState({
    backgroundColor: "black",
  });
  const onClick = (event) => {
    setColor({
      backgroundColor: event.target.className,
    });
  };
  return (
    <div className="right">
      <div className="color" style={color}></div>
      <div className="color-palette">
        <table>
          <tr>
            <td className="red" onClick={onClick} style={{backgroundColor: "red"}}></td>
            <td className="yellow" onClick={onClick} style={{backgroundColor: "yellow"}}></td>
            <td className="magenta" onClick={onClick} style={{backgroundColor: "magenta"}}></td>
          </tr>
          <tr>
            <td className="green" onClick={onClick} style={{backgroundColor: "green"}}></td>
            <td className="cyan" onClick={onClick} style={{backgroundColor: "cyan"}}></td>
            <td className="blue" onClick={onClick} style={{backgroundColor: "blue"}}></td>
          </tr>
          <tr>
            <td className="orange" onClick={onClick} style={{backgroundColor: "orange"}}></td>
            <td className="brown" onClick={onClick} style={{backgroundColor: "brown"}}></td>
            <td className="deeppink" onClick={onClick} style={{backgroundColor: "deeppink"}}></td>
          </tr>
          <tr>
            <td className="purple" onClick={onClick} style={{backgroundColor: "purple"}}></td>
            <td className="beige" onClick={onClick} style={{backgroundColor: "beige"}}></td>
            <td className="crimson" onClick={onClick} style={{backgroundColor: "crimson"}}></td>
          </tr>
          <tr>
            <td className="darkgreen" onClick={onClick} style={{backgroundColor: "darkgreen"}}></td>
            <td className="darkcyan" onClick={onClick} style={{backgroundColor: "darkcyan"}}></td>
            <td className="darkblue" onClick={onClick} style={{backgroundColor: "darkblue"}}></td>
          </tr>
          <tr>
            <td className="lime" onClick={onClick} style={{backgroundColor: "lime"}}></td>
            <td className="indigo" onClick={onClick} style={{backgroundColor: "indigo"}}></td>
            <td className="deepskyblue" onClick={onClick} style={{backgroundColor: "deepskyblue"}}></td>
          </tr>
          <tr>
            <td className="white" onClick={onClick} style={{backgroundColor: "white"}}></td>
            <td className="grey" onClick={onClick} style={{backgroundColor: "grey"}}></td>
            <td className="black" onClick={onClick} style={{backgroundColor: "black"}}></td>
          </tr>
        </table>
      </div>
      <div className="download-btn"></div>
    </div>
  );
};

export default Right;
