import React, { useEffect, useState } from 'react'
import threepin from '../assets/images/threepin.png'
import smallpencil from '../assets/images/smallpencil.png'
import silverpen from '../assets/images/silverpen.png'
import marker from '../assets/images/marker.png'
import bluepen from '../assets/images/bluepen.png'
import tabplant from '../assets/images/tabplant.png'
import penciltab from '../assets/images/penciltab.png'
import toprightplant from '../assets/images/toprightplant.png'
import dolfine from '../assets/images/dolfine.png'
import lion from '../assets/images/lion.png'
import bull from '../assets/images/bull.png'
import bottomleftplant from '../assets/images/bottomleftplant.png'
import sign from '../assets/images/sign.png'
import team from '../assets/images/team.png'
import feature from '../assets/images/feature.png'
import Navbar from '../components/Navbar'
import Svgs from '../assets/Svgs'
import Footer from '../components/Footer'
import { Carousel } from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    const [featureList, setFeatureList] = useState([
        {
            title: "Friendly Support",
            para: "There are many variations passage suffered but the majority alteration in but some but the majority",
            Icon: Svgs,
            isDropdownOpen: false
        },
        {
            title: "Friendly Support",
            para: "There are many variations passage suffered but the majority alteration in but some but the majority",
            Icon: Svgs,
            isDropdownOpen: false
        },
        {
            title: "Friendly Support",
            para: "There are many variations passage suffered but the majority alteration in but some but the majority",
            Icon: Svgs,
            isDropdownOpen: false
        },
        {
            title: "Friendly Support",
            para: "There are many variations passage suffered but the majority alteration in but some but the majority",
            Icon: Svgs,
            isDropdownOpen: false
        },
    ])
    console.log(featureList);

    const [galleryList, setGallerylist] = useState([
        {
            img: dolfine,
            type: ["design", "all"],
            classstr: "pic25"
        },
        {
            img: dolfine,
            type: ["design", "all"],
            classstr: "pic25"
        },
        {
            img: lion,
            type: ["marketing", "all"],
            classstr: "pic50"
        },
        {
            img: bull,
            type: ["marketing", "all", "branding"],
            classstr: "pic50"
        },
        {
            img: dolfine,
            type: ["design", "all", "branding"],
            classstr: "pic25"
        },
        {
            img: dolfine,
            type: ["design", "all", "branding"],
            classstr: "pic25"
        },
    ])
    const [currentType, setCurrentType] = useState("all")




    return (
        <>
            <Navbar />
            {/* top banner section */}
            <section className='h-screen w-full relative topBanner flex items-center justify-center'>
                <img src={toprightplant} alt="" srcset="" className='absolute top-0 right-0' />
                <img src={bottomleftplant} alt="" srcset="" className='absolute bottom-0 left-0 ' />
                <img src={penciltab} alt="" srcset="" className='absolute hidden xl:block  top-14 left-20' />

                <div className="  bs-container h-[38.75rem]" >
                    <div className="shape1 h-full w-full relative">
                        <div className="shape2 absolute flex flex-col items-center justify-center h-full w-full top-0 left-0 z-10">
                            {/* pens */}
                            <img src={bluepen} alt="" srcset="" className='absolute top-6 hidden xl:block right-0' />
                            <img src={marker} alt="" srcset="" className='absolute bottom-0 hidden xl:block left-32' />
                            <img src={silverpen} alt="" srcset="" className='absolute hidden xl:block -bottom-10 left-0' />
                            <img src={tabplant} alt="" srcset="" className='absolute -bottom-20 right-0 xl:-right-20' />

                            <h1 className='text-[#583d3d]'>Mounter</h1>
                            <h4>
                                A creative agency for creative thinker
                            </h4>

                            <button className='relative z-10 learnMoreBtn'>
                                Learn more
                            </button>
                            <div className='relative w-full flex justify-center h-0'>
                                <img src={threepin} alt="" className='relative z-0 w-[76px] hidden xl:block  h-[98px] -left-18 -top-15 ' />
                                <img src={smallpencil} alt="" className='relative z-0 hidden xl:block  -right-16 -top-24 h-[165px]' />

                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* feature section */}
            <section className='w-full flex flex-col items-center mt-32 feature-section'>
                <div className="section-top bs-container flex items-center flex-col w-full">

                    <h2>
                        F E A T U R E
                    </h2>
                    <div className="flex justify-center">

                        <div className="bar">

                        </div>
                    </div>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered but the majority alteration in some form,


                    </p>


                </div>
                <div className="bs-container flex items-center justify-center content gap-10 ">
                    <div className="left">

                        {featureList.map(({ title, description, isDropdownOpen }, index) => {
                            return (<div className="feature-listItem">
                                <div className="heading">
                                    <div className="left flex items-center justify-center text-5xl" onClick={() => {
                                        console.log("fdsf")
                                        setFeatureList((prev) => {
                                            let temp = [...prev]
                                            temp[index].isDropdownOpen = !isDropdownOpen;
                                            return [...temp]
                                        })
                                    }}>
                                        {isDropdownOpen ? "-" : "+"}


                                    </div>
                                    <div className="mid">

                                        <h4>
                                            freandly suport
                                        </h4>
                                    </div>
                                    <div className="right">
                                        <Svgs />
                                    </div>
                                </div>
                                <div className={`dropdown-wraper ${isDropdownOpen ? "" : "hi-0"}`}>
                                    <div className="dropdown">
                                        {/* <div className="bgimg">
                                        <Svgs />
                                    </div> */}
                                        There are many variations passage suffered but the majority alteration in but some but the majority
                                    </div>

                                </div>
                            </div>)
                        })}


                    </div>
                    <div className="right">
                        <img src={feature} alt="" />
                    </div>

                </div>


            </section>
            {/* Gallery section */}
            <section className='w-full flex flex-col items-center mt-32 gallery-section'>
                <div className="section-top bs-container flex items-center flex-col w-full">

                    <h2>
                        G A L L E R Y

                    </h2>
                    <div className="flex justify-center">

                        <div className="bar">

                        </div>
                    </div>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered but the majority alteration in some form,


                    </p>


                </div>
                <div className="  ">

                    <div className="tabs">
                        <button className={`${currentType == 'all' ? "active" : ""}`} onClick={() => { setCurrentType('all') }}>All</button>
                        <button className={`${currentType == 'branding' ? "active" : ""}`} onClick={() => { setCurrentType('branding') }}>Branding</button>
                        <button className={`${currentType == 'design' ? "active" : ""}`} onClick={() => { setCurrentType('design') }}>Design</button>
                        <button className={`${currentType == 'marketing' ? "active" : ""}`} onClick={() => { setCurrentType('marketing') }}>Marketing</button>

                    </div>

                    <div className="content">

                        {galleryList.map(({ img, classstr, type }, index) => {
                            return (<div className={`pic relative ${classstr} ${type.includes(currentType) ? "" : "hidden"}`}>

                                <div className="hover-overlay">
                                    <h4>graphic design</h4>
                                    <p>rain fall</p>
                                </div>
                                <img src={img} alt="" />
                            </div>)
                        })}


                    </div>

                </div>


            </section>
            {/* Team section */}
            <section className='w-full flex flex-col items-center mt-32 team-section mb-32'>
                <div className="section-top bs-container flex items-center flex-col w-full">

                    <h2>
                        T E A M


                    </h2>
                    <div className="flex justify-center">

                        <div className="bar">

                        </div>
                    </div>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered but the majority alteration in some form,


                    </p>


                </div>
                <div className="  content">
                    <div className="bs-container ">
                        <div className="flex gap-8 items-center justify-center flex-wrap xl:flex-nowrap">

                            <div className="box">
                                <img src={team} alt="" />
                                <div className="overlay">
                                    <h2>
                                        jonathon
                                    </h2>
                                    <p>
                                        graphic designer
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={team} alt="" />
                                <div className="overlay">
                                    <h2>
                                        jonathon
                                    </h2>
                                    <p>
                                        graphic designer
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={team} alt="" />
                                <div className="overlay">
                                    <h2>
                                        jonathon
                                    </h2>
                                    <p>
                                        graphic designer
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>


            </section>
            {/* carosoul section */}
            <section className='carosoul-section'>


                <div className="bs-container ">

                    <Carousel showArrows={true}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        emulateTouch={true}
                        infiniteLoop={true}
                        swipeable={true}
                        dynamicHeight={false}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow h-10 w-10 rounded-full"
                                >

                                    <h3>{"<"} </h3>
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow h-10 w-10 rounded-full"
                                >

                                    <h3>{">"}</h3>
                                </button>
                            )
                        }

                    >
                        <div className='carosoul-cu'>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations.</p>
                            <img src={sign} alt="" />
                            <p className="grap">
                                Graphic Designer
                            </p>

                        </div>
                        <div className='carosoul-cu'>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations.</p>
                            <img src={sign} alt="" />
                            <p className="grap">
                                Graphic Designer
                            </p>

                        </div>
                    </Carousel>
                </div>
                <div className="bottom">
                    <div className="bs-container">

                        <h4>Would you think, this is perfect for you? </h4>
                        <button className='relative z-10 learnMoreBtn'>
                            PRUCHASE NOW
                        </button>
                    </div>
                </div>



            </section>

            <Footer />

        </>
    )
}

export default Home