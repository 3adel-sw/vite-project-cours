import { UsernameContext } from "../../../App";

const Last = () => {
  return (
    <div>
      <UsernameContext.Consumer>
        {(username) => (
          <h2 style={{ color: "green", fontSize: "30px" }}>
            My name's Eng/ {username}
          </h2>
        )}
      </UsernameContext.Consumer>
    </div>
  );
};

export default Last;
