import { createContext, useState } from "react";

const FavoriteProvider = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (meetup) => {},
  removeFavorites: (meetupId) => {},
  isUserFavorites: (meetup) => {},
});

export function FavoriteProviderHandler(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addUserFavoritesHandler(meetup) {
    const newFavorites = [...userFavorites];
    newFavorites.push(meetup);
    setUserFavorites(newFavorites);
    return userFavorites;
  }
  function removeUserFavoritesHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function isUserFavoritesHandler(meetupId) {
    const isFavorite = userFavorites.some(
      (prevUserFavorites) => prevUserFavorites.id === meetupId
    );
    return isFavorite;
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
