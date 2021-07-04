import "../Styles/Center.css";
import Pixels from "./Pixels";

const Center = (props) => {
  const onClick = (event) =>{
    event.target.style.backgroundColor = props.color.backgroundColor;
  }
  const tableCol = (x, y) => {
    return [...Array(x)].map((e, i) => <td className="td" id={y + "_" + i} onClick={onClick} ><Pixels key={i} /></td>);
  };
  const table = (x, y) => {
    return [...Array(y)].map((e, i) => <tr className="tr">{tableCol(x, i)}</tr> );
  }
  return (
    <div className="center">
      <div className="canvas">
        <table ref={props.reference}>{table(100, 100)}</table>
      </div>
    </div>
  );
};

export default Center;
