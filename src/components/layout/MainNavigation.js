import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoriteProvider from "../store/favorite-context";

function MainNavigation() {
  const userFavoritesCtx = useContext(FavoriteProvider);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
            <p>{userFavoritesCtx.totalFavorites}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
