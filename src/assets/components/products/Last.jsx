import { UsernameContext } from "../../../App";
import { useContext } from "react";

const Last = () => {
  const username = useContext(UsernameContext);
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>
        My name's Eng/ {username}
      </h1>
    </div>
  );
};

export default Last;
