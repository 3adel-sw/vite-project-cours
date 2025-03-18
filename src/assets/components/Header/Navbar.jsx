import styles from "./header.module.css";

function Navbar() {
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Services", url: "/services" },
    { title: "Portfolio", url: "/portfolio" },
  ];
  console.log(links);
  return (
    <nav>
      <ul className={styles.list}>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
