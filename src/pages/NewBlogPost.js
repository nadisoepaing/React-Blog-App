import NewBlogForm from "../components/blog/NewBlogForm"
import {useNavigate } from "react-router-dom"

function NewBlogPost() {

    const navigate = useNavigate()

    function onCreate(post) {
        fetch('https://blog-app-33ea1-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json',{
            method : 'POST',
            body : JSON.stringify(post),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((response) => {
            if(response.status === 200){
                console.log(response.json())
                navigate('/')
            }else{
                console.log('Post creation is  failed!')
            }
        }) 
        
    }

    return (
        <section>
            <h1>New Blog Post Page</h1>
            <NewBlogForm onCreate={onCreate}/>
        </section>
    )
}

export default NewBlogPost