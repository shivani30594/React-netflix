import React, { useEffect, useState } from 'react';
import avatar from './netflix_avatar.png';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo"></img>
            <img className="nav_avatar" src={avatar} alt="Avatar" />
        </div>
    )
}

export default Nav;
