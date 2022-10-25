import React, {useState,useEffect}from 'react';
import {NavLink} from "react-router-dom";

// icons
import {BsSearch} from "react-icons/bs"

// images
import logo from "../../assets/logo.svg"

const Header = () => {
    const [bg,setBg]=useState(false)
    const changeBackgroud =()=>{
        if (window.scrollY>= 66){
            setBg(true)
        }else setBg(false)
    }
    useEffect(()=>{
        changeBackgroud();
        window.addEventListener("scroll",changeBackgroud)
    })
    const [scroll, setScroll] = useState()

    window.addEventListener("scroll", () => setScroll(window.scrollY))
    return (
        <header className="p-5 z-50 fixed w-full" style={{background: scroll > 30 ? "hsl(207, 19%, 11%) " : "none", transition: ".3s"}}>
            <div className="container mx-auto px-9">
                <div className="flex items-center justify-between">
                    <NavLink to="/hero"><img src={logo} alt="img"/></NavLink>
                    <div>
                        <NavLink to="/latest" className="font-bold uppercase mx-6 hover:text-[#e2d703] text-white">Latest</NavLink>
                        <NavLink to="/nowPlaying" className="font-bold uppercase mx-6 hover:text-[#e2d703] text-white">Now Playing</NavLink>
                        <NavLink to="/popular" className="font-bold uppercase mx-6 hover:text-[#e2d703] text-white">Popular</NavLink>
                        <NavLink to="/topRated" className="font-bold uppercase mx-6 hover:text-[#e2d703] text-white">Top Rated</NavLink>
                        <NavLink to="/Upcoming" className="font-bold uppercase mx-6 hover:text-[#e2d703] text-white">Upcoming</NavLink>

                    </div>
                    <div className="flex items-center">
                        <BsSearch className="text-white text-2xl cursor-pointer" />
                        <button
                            className=" text-white w-28 h-12 bg-to-transparent pb-2 pt-1 rounded-3xl ease-in-.2s ml-8  hover:bg-[#e2d703] border-solid border-2 border-bg-[#e2d703] font-bold ">SIGN
                            IN
                        </button>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;