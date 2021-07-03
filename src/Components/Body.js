import Center from "./Center";
import Left from "./Left";
import Right from "./Right";
import "../Styles/Body.css";

const Body = () => {
  return (
    <div className="body">
      <Left />
      <Center />
      <Right />
    </div>
  );
};

export default Body;
