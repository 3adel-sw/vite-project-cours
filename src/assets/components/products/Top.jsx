import Middle from "./Middle";
import { UsernameContext } from "../../../App";

const Top = () => {
  return (
    <div>
      <Middle />
      <UsernameContext.Consumer>
        {(username) => (
          <h1 style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}>
            My name's Eng/ {username}
          </h1>
        )}
      </UsernameContext.Consumer>
    </div>
  );
};

export default Top;
