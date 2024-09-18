import React from 'react'
import './SinglePost.css'
import pic from '../../Assets/pexels-dreamypixel-547114.jpg';
function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={pic} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Ai change World
          <div className="singlePostEdit">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash-can"></i>
          </div>

        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author : <b>Malik</b></span>
          <span className='singlePostDate'>1 Hour Ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla aliquid odio facere adipisci quae voluptates, optio numquam ratione maiores voluptatibus repudiandae excepturi? Dicta eveniet reiciendis voluptate ratione deleniti minima, animi dolorem saepe sequi consequuntur beatae omnis officiis, architecto magnam! Corrupti tempora excepturi, harum, totam sunt impedit minima architecto repellat accusantium temporibus nesciunt quod neque laudantium? Facilis voluptates, omnis vitae architecto molestias quidem accusamus placeat totam reprehenderit sed doloribus et tempore fugiat magnam illum repudiandae itaque sapiente, quae harum! Dolorum autem dolores amet aut? Facere libero id earum voluptas autem recusandae quibusdam! Hic, deserunt obcaecati! Vel fuga ullam consequuntur debitis!
        </p>
      </div>
    </div>
  )
}

export default SinglePost
