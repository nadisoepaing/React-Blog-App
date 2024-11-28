import Card from '../ui/Card'
import classes from './Post.module.css'
import { useContext } from 'react'
import { FavouriteContext } from '../../store/favouriteContext'

function Post(props) {

    const favoriteContext = useContext(FavouriteContext)
    const favorite = favoriteContext.isFavorite(props.id)

    function favoriteHandler(){
      
        if(favorite){
            favoriteContext.removeFavorite(props.id)
        }else{
            favoriteContext.addFavorite({
                id:props.id,
                title:props.title,
                author:props.author,
                image:props.image,
                body:props.body
            })
        }
    }

    return (
        <Card>
        <li>
            <article className={classes.post}>
            <div className={classes.image}>
                <img src={props.image} alt="post"/>
            </div>
            <div className={classes.actions}>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
                <p>{props.author}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={favoriteHandler}>{favorite ? 'Remove from favorite' : 'Add to favorite'}</button>
            </div>
        </article>
        </li>
        </Card>
    )
}

export default Post