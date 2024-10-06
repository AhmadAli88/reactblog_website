import React from 'react'
import "./posts.css"
import Post from '../post/Post'
import { IMAGES } from '../../assets/images'

const Posts = () => {
  return (
    <div className='posts'>
        <Post image={IMAGES.PIC2}/>
        <Post image={IMAGES.PIC12}/>
        <Post image={IMAGES.PIC6}/>
        <Post image={IMAGES.PIC7}/>
        <Post image={IMAGES.PIC8}/>
        <Post image={IMAGES.PIC9}/>
        <Post image={IMAGES.PIC10}/>
        <Post image={IMAGES.PIC1}/>
        <Post image={IMAGES.PIC20}/>
    </div>
  )
}

export default Posts