import "../Styles/Right.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import ReactToPdf from "react-to-pdf";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const Right = (props) => {
  const classes = useStyles();
  const options = {
    orientation: "landscape",
    unit: "px",
    format: [912, 912],
  };
  const colors = [
    ["red", "yellow", "magenta"],
    ["green", "cyan", "blue"],
    ["orange", "brown", "deeppink"],
    ["purple", "beige", "crimson"],
    ["darkgreen", "darkcyan", "darkblue"],
    ["lime", "indigo", "deepskyblue"],
    ["white", "grey", "black"],
  ];
  return (
    <div className="right">
      <div className="color" style={props.color}></div>
      <div className="color-palette">
        <table>
          {colors.map((rows, i) => {
            return (
              <tr key={i}>
                {rows.map((c, index) => {
                  return (
                    <td
                      className={c}
                      onClick={props.onClick}
                      style={{ backgroundColor: c }}
                      key={index}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>
      <div className="download-btn">
        <ReactToPdf
          targetRef={props.reference}
          filename={props.name + ".pdf"}
          options={options}
          x={0}
          y={0}
          scale={0.75}
        >
          {({ toPdf }) => (
            <Button
              variant="contained"
              color="light"
              size="large"
              className={classes.button}
              onClick={toPdf}
              startIcon={<SaveIcon />}
            >
              Download
            </Button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default Right;
