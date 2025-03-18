import Navbar from "./Navbar";
// import "./Header.css";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="src/assets/images/logo.png" alt="logo" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
