import { createContext, useState } from "react";

const FavoriteProvider = createContext({
  favorites: [],
  totlaFavorites: 0,
  addFavorites: (meetup) => {},
  removeFavorites: (meetupId) => {},
  isUserFavorites: (meetup) => {},
});

export function FavoriteProviderHandler(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addUserFavoritesHandler(meetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.push(meetup);
    });
  }
  function removeUserFavoritesHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function isUserFavoritesHandler(meetup) {
    return userFavorites.some(
      (prevUserFavorites) => prevUserFavorites === meetup
    );
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addUserFavoritesHandler,
    removeFavorites: removeUserFavoritesHandler,
    isUserFavorites: isUserFavoritesHandler,
  };

  return (
    <FavoriteProvider.Provider value={context}>
      {props.children}
    </FavoriteProvider.Provider>
  );
}

export default FavoriteProvider;
