import { createContext,useState } from "react";

export const FavouriteContext = createContext({
    favourites: [],
    totalFavorite: 0,
    addFavorite: (post) => {},
    removeFavourite: (postId) => {},
    isFavorite: (postId) => {}
})

export function FavoriteContextProvider(props) {
    
    const [userFavorites,setUserFavorites] = useState([])

    function addFavorite(post) {
        setUserFavorites((prevoiusFavorite) => {
            return prevoiusFavorite.concat(post)
        })
    }

    function removeFavorite(postId) {
        setUserFavorites((previousFavorite) => {
            return previousFavorite.filter((post) => post.id !== postId)
        })
    }

    function isFavorite(postId) {
        return userFavorites.some((post) => post.id === postId)
    }

    const context = {
        favourites: userFavorites,
        totalFavorite : userFavorites.length,
        addFavorite,
        removeFavorite,
        isFavorite
    }


    return (
        <FavouriteContext.Provider value={context}>
            {props.children}
        </FavouriteContext.Provider>
    )
}