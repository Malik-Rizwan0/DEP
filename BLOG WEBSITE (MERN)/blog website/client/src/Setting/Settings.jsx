import React from 'react'
import './Settings.css'
import Sidebar from '../Component/Sidebar/Sidebar'
import pic from '../Assets/pexels-dreamypixel-547114.jpg';
function Settings() {
    return (
        <div className='settings'>
            <div className="settngsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete  Account
                    </span>
                </div>
                <form className='settingsForm'>
                    <label> Profile Picture</label>
                    <div className="settingsPP">
                    <img src={pic} alt="" />
                    <label htmlFor="fileInput">
                        <i class="fa-regular fa-circle-user"></i>
                    </label>
                    </div>
                    <input type="file" id='fileInput' style={{ display: "none" }} />
                    <label >Username</label>
                    <input type="text" placeholder='Malik' />
                    <label >Email</label>
                    <input type="email" placeholder='malik@gmail.com' />
                    <label >Password</label>
                    <input type="password" />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
