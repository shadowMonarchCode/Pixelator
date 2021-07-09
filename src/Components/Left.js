import "../Styles/Left.css";
import Pen from "../Assets/Pen.png";
import RevPen from "../Assets/RevPen.png";
import Erase from "../Assets/Eraser.png";
import RevErase from "../Assets/RevEraser.png";
import Fill from "../Assets/Color-fill.png";
import RevFill from "../Assets/RevColor-fill.png";
import CleanCanvas from "../Assets/Clean.png";
import RevCleanCanvas from "../Assets/RevClean.png";

const Left = (props) => {
  return (
    <div className="left">
      <div className="tool-box">
        <button className="icon-btn">
          <img
            src={Pen}
            alt="Erase"
            className="img pen"
            style={{border: props.border[0] ? "4px solid white" : "none"}}
            onClick={props.pen}
            onMouseEnter={(event) => {
              event.target.src = RevPen;
            }}
            onMouseLeave={(event) => {
              event.target.src = Pen;
            }}
          />
        </button>
        <button className="icon-btn">
          <img
            src={Erase}
            alt="Erase"
            className="img"
            style={{border: props.border[1] ? "4px solid white" : "none"}}
            onClick={props.eraser}
            onMouseEnter={(event) => {
              event.target.src = RevErase;
            }}
            onMouseLeave={(event) => {
              event.target.src = Erase;
            }}
          />
        </button>
        <button className="icon-btn">
          <img
            src={Fill}
            alt="Fill"
            className="img"
            style={{border: props.border[2] ? "4px solid white" : "none"}}
            onClick={props.fill}
            onMouseEnter={(event) => {
              event.target.src = RevFill;
            }}
            onMouseLeave={(event) => {
              event.target.src = Fill;
            }}
          />
        </button>
      </div>
      <div className="clear-canvas">
        <button className="icon-btn">
          <img
            src={CleanCanvas}
            alt="clean canvas"
            className="img"
            onClick={props.onClick}
            onMouseEnter={(event) => {
              event.target.src = RevCleanCanvas;
            }}
            onMouseLeave={(event) => {
              event.target.src = CleanCanvas;
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Left;
