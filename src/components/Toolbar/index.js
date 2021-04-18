import s from "./Toolbar.module.css";
import { Link } from "react-router-dom";
const Toolbar = () => {
  const links = [
    { url: "Home", title: "Home" },
    { url: "About", title: "About" },
    { url: "Toolbar", title: "Toolbar" },
  ];
  return (
    <nav className={s.toolbar}>
      <a href="/" className={s.brandLogo}>
        Todo App
      </a>
      <ul className={s.toolbarList}>
        {links.map((item) => (
          <ToolbarItem key={item.url} link={item} />
        ))}
      </ul>
    </nav>
  );
};

const ToolbarItem = ({ link }) => {
  return (
    <li className={s.toolbarItem}>
      <Link to={link.url} className={s.toolbarLink}>
        {link.title}
      </Link>
    </li>
  );
};

export default Toolbar;
