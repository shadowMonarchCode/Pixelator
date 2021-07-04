import "../Styles/Left.css";
import Button from "@material-ui/core/Button";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

const Left = (props) => {
  return (
    <div className="left">
      <div className="tool-box"></div>
      <div className="clear-canvas">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="btn"
          onClick={props.onClear}
        >
          <DeleteSweepIcon style={{height: "6rem", width: "6rem"}}/>
        </Button>
      </div>
    </div>
  );
};

export default Left;
