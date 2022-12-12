import { useContext } from "react";
import FavoriteProvider from "../store/favorite-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const userFavoritesCtx = useContext(FavoriteProvider);
  const itemIsFavortie = userFavoritesCtx.isUserFavorites(props.id);

  function favoriteButtonHandler() {
    if (itemIsFavortie) {
      userFavoritesCtx.removeFavorites(props.id);
      console.log("after remove favortites", userFavoritesCtx.favorites)
    } else {
      userFavoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
      console.log("after add favortites", userFavoritesCtx.favorites)
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.action}>
          <button onClick={favoriteButtonHandler}>
            {itemIsFavortie ? "Remove from favorites" : "Add Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
