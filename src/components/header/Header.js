import React, {useState,useEffect}from 'react';
import {NavLink,useNavigate} from "react-router-dom";

// icons
import {BsSearch} from "react-icons/bs"

// images
import logo from "../../assets/logo.svg"
import {apiKay} from "../../api/api";
import axios from "axios";

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

    //-----------SEARCH-----------//

    const [searchTitle,setSearchTitle] = useState("")
    const navigate = useNavigate();
    const handleChange =(e)=>{
        setSearchTitle(e.target.value)
    }

    const handleSearch =()=>{
        navigate(`/search-movie/:${searchTitle}`)
    }
    return (
        <header className="p-5 z-50 fixed w-full" style={{background: scroll > 30 ? "hsl(207, 19%, 11%) " : "none", transition: ".3s"}}>
            <div className="container mx-auto px-9">
                <div className="flex items-center justify-between">
                    <NavLink to="/"><img src={logo} alt="img"/></NavLink>
                    <div>
                        <NavLink to="/latest" className="font-bold uppercase ml-6 hover:text-[#e2d703] text-white">Latest</NavLink>
                        <NavLink to="/latest" className="font-bold uppercase ml-6 hover:text-[#e2d703] text-white">Now Playing</NavLink>
                        <NavLink to="/latest" className="font-bold uppercase ml-6 hover:text-[#e2d703] text-white">Popular</NavLink>
                        <NavLink to="/topRated" className="font-bold uppercase ml-6 hover:text-[#e2d703] text-white">Top Rated</NavLink>
                        <NavLink to="/upcoming" className="font-bold uppercase ml-6 hover:text-[#e2d703] text-white">Upcoming</NavLink>
                    </div>
                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                onChange={handleChange}
                                type="search" placeholder="Search"
                                   className="border-b-2 w-full border-gray-200 py-1 pl-3 pr-1 outline-yellow-400  rounded" ></input>
                        </div>
                        <button
                            onClick={handleSearch}
                            className="search w-10 h-8 pl-2  ml-1 rounded bg-transparent border-2 border-white  hover:bg-[#e2d703]">
                            <BsSearch className="mr-4 text-white text-xl cursor-pointer text-white" />
                        </button>
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