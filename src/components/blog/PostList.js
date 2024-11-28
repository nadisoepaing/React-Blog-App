import Post from "./Post"
import classes from "./PostList.module.css"

function PostList(props) {
    return (
       <ul className={classes.list}>
         {
            props.posts.map(
                post => <Post
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                body={post.body}
                author={post.author}
                />
            )
        }
       </ul>
    )
}

export default PostList