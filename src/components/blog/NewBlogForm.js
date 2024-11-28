import Card from "../ui/Card";
import classes from './NewBlogForm.module.css'
import { useRef } from "react";

function NewBlogForm(props) {
    const titleRef = useRef()
    const authorRef = useRef()
    const imageRef = useRef()
    const bodyRef = useRef()

  function submitHandler(event) {
    event.preventDefault()
    const title = titleRef.current.value
    //const titleValue
    const author = authorRef.current.value
    const image = imageRef.current.value
    const body = bodyRef.current.value

    const post = {
        title, //title : title // title : titleValue
        author,
        image,
        body

    }

    props.onCreate(post)

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Post Title</label>
          <input type="text" id="title" ref={titleRef} required/>
        </div>

        <div className={classes.control}>
          <label htmlFor="author">Post Author</label>
          <input type="text" id="author" ref={authorRef} required/>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Post Image</label>
          <input type="url" id="image" ref={imageRef} required/>
        </div>

        <div className={classes.control}>
          <label htmlFor="body">Post Body</label>
          <textarea rows="10" id="body" ref={bodyRef} required/>
        </div>

        <div className={classes.actions}>
          <button>Create</button>
        </div>
      </form>
    </Card>
  );
}
export default NewBlogForm;
