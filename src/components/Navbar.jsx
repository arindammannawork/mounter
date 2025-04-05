import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    console.log(scrolled);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (offset > 70) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className={`navbar flex justify-center  ${scrolled ? "black-bg" : ""}`}>

                <div className="bs-container">
                    <div className="flex justify-center w-full">
                        <div className="navitem">
                            <a href="#">
                                Home
                            </a>

                            <div className="dropdown">
                                <a href="#">
                                    Dropdown 1

                                </a>
                                <a href="#">
                                    Dropdown 1

                                </a>
                                <a href="#">
                                    Dropdown 1

                                </a>
                                <a href="#">
                                    Dropdown 1

                                </a>
                            </div>

                        </div>
                        <div className="navitem">
                            <a href="#">
                                About us
                            </a>

                        </div>
                        <div className="navitem">
                            <a href="#">
                                Gallery
                            </a>

                        </div>
                        <div className="navitem">
                            <a href="#" className='logo'>
                                <img src={logo} alt="" />
                            </a>

                        </div>
                        <div className="navitem">
                            <a href="#">
                                Pages
                            </a>

                        </div>
                        <div className="navitem">
                            <a href="#">
                                Blog
                            </a>

                        </div>
                        <div className="navitem">
                            <a href="#">
                                Contact
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar