import { useContext } from "react"
import { FavouriteContext } from "../store/favouriteContext"
import PostList from "../components/blog/PostList"

function FavouriteBlogPosts() {

    const favoriteContext = useContext(FavouriteContext)

    let content = ''

    if(favoriteContext.totalFavorite === 0){
        content = <p>Not any favorite post yet. Try to add some.</p>
    }else{
        content = <PostList posts={favoriteContext.favourites}/>
    }
    return (
        <section>
            <h1>Favourite Posts : </h1>
            {content}
        </section>
    )
}

export default FavouriteBlogPosts