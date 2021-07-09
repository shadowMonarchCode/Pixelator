import "../Styles/Header.css";
import Brand from "../Assets/Pixelator-logo.png";

const Header = (props) => {
  return (
    <div className="header">
      <img src={Brand} alt="Logo" className="logo" />
      <div className="name">
        <fieldset>
          <legend>Name</legend>
          <input
            type="text"
            onChange={(event) => {
              props.setname(event.target.value);
            }}
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Header;
