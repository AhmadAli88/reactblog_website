import React from 'react'
import './write.css'
import { IMAGES } from '../../assets/images'

const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src={IMAGES.PIC15} alt="" srcset="" />
        <form action="" className="writeForm">
         <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" className='writeInput' id="fileInput" style={{display: 'none'}} />
            <input type="text" placeholder="Title" className='writeInput' autoFocus={true}/>
         </div>
         <div className="writeFormGroup">
            <textarea placeholder='Tell your story..' type="text" className='writeInput writeText'></textarea>
         </div>
         <button className="writeSubmit">
            Publish
         </button>
        </form>
    </div>
  )
}

export default Write