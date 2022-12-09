import { useContext } from "react";
import FavoriteProvider from "../store/favorite-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const userFavoritesCtx = useContext(FavoriteProvider);
  const itemIsFavortie = userFavoritesCtx.isUserFavorites(props);

  function favoriteButtonHandler() {
    if (itemIsFavortie) {
      userFavoritesCtx.removeFavorites(props.id);
    } else {
      console.log("in handler prop:",props)
      userFavoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
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
