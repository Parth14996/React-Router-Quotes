import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Truth Bombs</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive?classes.active : ''} to="/quotes">
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive?classes.active : ''} to="/new-quote">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
