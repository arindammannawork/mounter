import React from 'react'
import logo from '../assets/images/logo.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="wrap bs-container">
                    <img src={logo} alt="" />
                    <p>A creative agency for creative thinker</p>
                </div>
                <div className="wrap2 bs-container">
                    <p>
                        Copyright © 2022
                        Devitems
                        All Right Reserved.
                    </p>
                    <ul class="footer__menu">
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">instagram</a></li>
                        <li><a href="#">facebook</a></li>
                        <li><a href="#">google+</a></li>
                        <li><a href="#">Behance</a></li>
                        <li><a href="#">pinterest</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer