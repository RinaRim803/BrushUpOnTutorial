import { useContext } from "react";
import FavoriteProvider from "../components/store/favorite-context";

function Favorites() {
  const userFavoritesCtx = useContext(FavoriteProvider);
  console.log(userFavoritesCtx.favorites)

  let content;
  if(userFavoritesCtx.totlaFavorites){
    content = <p> no favorites</p>
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
