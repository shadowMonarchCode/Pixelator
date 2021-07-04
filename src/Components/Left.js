import "../Styles/Left.css";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import CropDinIcon from "@material-ui/icons/CropDin";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

const Left = (props) => {
  return (
    <div className="left">
      <div className="tool-box">
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="tool"
          >
            <CreateIcon style={{ height: "3.5rem", width: "3.5rem" }}/>
          </Button>
        </div>
        <div><Button
            variant="contained"
            color="primary"
            size="large"
            className="tool"
          >
            <CropDinIcon style={{ height: "3.5rem", width: "3.5rem" }}/>
          </Button></div>
        <div><Button
            variant="contained"
            color="primary"
            size="large"
            className="tool"
          >
            <FormatColorFillIcon style={{ height: "3.5rem", width: "3.5rem" }}/>
          </Button></div>
      </div>
      <div className="clear-canvas">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="btn"
          onClick={props.onClick}
        >
          <DeleteSweepIcon style={{ height: "4rem", width: "4rem" }} />
        </Button>
      </div>
    </div>
  );
};

export default Left;
