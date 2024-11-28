import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouriteContext } from "../../store/favouriteContext";

function Header() {
  const favoriteContext = useContext(FavouriteContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Blog App</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New Post</Link>
        </li>
        <li>
          <Link to="/favourite">Favourite</Link>
          <span className={classes.badge}>{favoriteContext.totalFavorite}</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
