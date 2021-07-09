import { useState } from "react";
import "../Styles/Center.css";
import Pixels from "./Pixels";

const Center = (props) => {
  const [fill, setfill] = useState(false);
  const onClick = (event) => {
    event.target.style.backgroundColor = props.color.backgroundColor;
  };
  const tableCol = (x, y) => {
    return [...Array(x)].map((e, i) => (
      <td
        className="td"
        key={i}
        id={y + "_" + i}
        onClick={onClick}
        onDoubleClick={() => {if (!fill) {
          setfill(true);
        } else {
          setfill(false);
        }}}
        onMouseOver={(event) => {
          props.fill &&
            (event.target.style.backgroundColor =
              fill && props.color.backgroundColor);
        }}
      >
        <Pixels className="pixel" />
      </td>
    ));
  };
  const table = (x, y) => {
    return [...Array(y)].map((e, i) => (
      <tr className="tr" key={i}>
        {tableCol(x, i)}
      </tr>
    ));
  };
  return (
    <div className="center">
      <div className="canvas">
        <table ref={props.reference}>
          <tbody>{table(100, 100)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Center;
