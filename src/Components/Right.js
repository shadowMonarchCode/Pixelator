import "../Styles/Right.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const Right = (props) => {
  const classes = useStyles();
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Right;
