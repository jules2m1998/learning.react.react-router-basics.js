import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useCallback } from "react";

export default function MainNavigation() {
  const handleActivate = useCallback(
    ({ isActive }) => (isActive ? classes.active : undefined),
    []
  );
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={"/"} className={handleActivate} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"} className={handleActivate}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
