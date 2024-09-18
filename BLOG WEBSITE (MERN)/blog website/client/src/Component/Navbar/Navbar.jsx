import React from 'react';
import './Navbar.css';
import { } from "module";
import { Link } from 'react-router-dom';
function Navbar() {
    const user = false;
    return (
        <>

            <nav className="navbar">
                <div className="nav-left">
                    <i className='navIcon' class="fa-brands fa-square-github"></i>
                    <i className='navIcon' class="fa-brands fa-linkedin"></i>
                    <i className='navIcon' class="fa-brands fa-square-facebook"></i>
                    <i className='navIcon' class="fa-brands fa-square-instagram"></i>
                </div>
                <div className="nav-center">
                    <ul className='nav-list'>
                        <li className="nav-item"> <Link className='link' to='/'>Home</Link></li>
                        <li className="nav-item"><Link className='link' to='/about'>About</Link></li>
                        <li className="nav-item"><Link className='link' to='/contact'>Contact</Link></li>
                        <li className="nav-item"><Link className='link' to='/write'>Write</Link></li>
                        <li className="nav-item">
                            {
                                user && "LogOut"
                            }
                        </li>
                    </ul>
                </div>
                <div className="nav-right">
                    {
                        user ? (
                            <img className='profile-img' src="./cv.jpg" alt="DP" />
                        ) : (
                            <ul className='nav-list'>
                                <li className="nav-item"> <Link className='link' to='/login'>Login</Link></li>
                                <li className="nav-item"><Link className='link' to='/register'>Register</Link></li>
                            </ul>
                        )

                    }
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar
