import React from 'react'
import './Posts.css'
import Post from '../Post/Post'
function Posts(posts) {
    return (

        <div className='posts' >
             {
                posts.map((p, index) => (
                    <Post key={index} {...p} />  // Pass each post as props to Post component
                ))
            }
        </div>
    )
}

export default Posts
