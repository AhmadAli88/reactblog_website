import React from 'react'
import "./posts.css"
import Post from '../../post/Posts/post/Post'

const Posts = () => {
  return (
    <div className='posts'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts