import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="../public/cv.jpg" alt="Profile" />
                <p>
                    Proficient in HTML, CSS, and JavaScript with a passion
                    for creating engaging and intuitive user experiences. Familiar with front-end frameworks such as React.js
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Education</li>
                    <li className="sidebarListItem">Technology</li>
                    <li className="sidebarListItem">Jobs</li>
                    <li className="sidebarListItem">Company</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Style</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className='sidebarIcon' class="fa-brands fa-square-github"></i>
                    <i className='sidebarIcon' class="fa-brands fa-linkedin"></i>
                    <i className='sidebarIcon' class="fa-brands fa-square-facebook"></i>
                    <i className='sidebarIcon' class="fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
