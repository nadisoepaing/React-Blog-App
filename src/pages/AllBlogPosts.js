import PostList from "../components/blog/PostList"
import { useState,useEffect } from "react"

// const DUMMY_POSTS = [
//     {
//         id:1,
//         title:'Beauty Dubai',
//         body:'I visited Dubai Yesterday',
//         author: 'Merry',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7C3MBDYfO4_DvEnc0wH4Iq6lRjKLetYiaxg&s' },
//     {
//         id:2,
//         title:'Cheesy Bite Buger',
//         body:'Hey dude, try this burger ! It is really cheesy and delicious',
//         author: 'John Smith',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX74nE4faLUMLc31cL-7hDSXs-2iAKtYIOkw&s'
//      },
// ]



function AllBlogPosts(){

    const [posts,setPosts] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://blog-app-33ea1-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json')
        .then((response) =>{
            if(response.status === 200){
                return response.json()
            }else{
                console.log('cannot fetch data from server.')
            }
        }).then((data) => {
            const postList = [];
    
            for(const key in data){
                const post = {
                    id : key,
                    ...data[key]
                }
    
                postList.push(post)
                }
                setPosts(postList)
                setIsLoading(false)
            })
    },[isLoading])

        let content = ''

        if(isLoading){
            content = <p>Posts are loading....</p>
        }else{
            content = <PostList posts={posts}/>
        }

    return(
        <section>
            <h1>All Blog Posts Page</h1>
            {content}
        </section>
    )
}

export default AllBlogPosts