import styles from "./header.module.css";

//eslint-disable-next-line react/prop-types
function Navbar({ links }) {
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
