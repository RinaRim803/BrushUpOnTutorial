import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteProvider from "../components/store/favorite-context";

function Favorites() {
  const userFavoritesCtx = useContext(FavoriteProvider);

  let content;
  if(userFavoritesCtx.totlaFavorites){
    content = <p> no favorites</p>
  } else{
    content = <MeetupList meetup={userFavoritesCtx.favorites}/>
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
