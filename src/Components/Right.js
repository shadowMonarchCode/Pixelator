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
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
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
          {colors.map((rows) => {
            return (
              <tr>
                {rows.map((c) => {
                  return (
                    <td
                      className={c}
                      onClick={props.onClick}
                      style={{ backgroundColor: c }}
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
          filename="div-blue.pdf"
          options={options}
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }) => (
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={toPdf}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default Right;
