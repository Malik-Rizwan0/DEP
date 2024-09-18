import React from 'react'
import './write.css'
import pic from '../Assets/pexels-dreamypixel-547114.jpg';
function Write() {
    return (
        <div className='write'>
            <img src={pic} alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: "none"}} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea type='text' placeholder='Tell Your Story' className=' writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
