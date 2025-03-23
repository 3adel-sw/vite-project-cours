import Navbar from "./Navbar";
// import "./Header.css";
import styles from "./header.module.css";

const Header = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Services", url: "/services" },
    { title: "Portfolio", url: "/portfolio" },
  ];
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="src/assets/images/logo.png" alt="logo" />
      </a>
      <Navbar links={links} />
    </header>
  );
};

export default Header;
