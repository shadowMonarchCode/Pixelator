import "../Styles/Center.css";
import Pixels from "./Pixels";

const Center = () => {
  const tableCol = (size, row) => {
    return [...Array(size)].map((e, i) => <td className="td"><Pixels key={i} row={row} col={i} /></td>);
  };
  const table = (size) => {
    return [...Array(size)].map((e, i) => <tr className="tr">{tableCol(size, i)}</tr> );
  }
  return (
    <div className="center">
      <div className="canvas">
        <table>{table(100)}</table>
      </div>
    </div>
  );
};

export default Center;
