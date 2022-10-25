import React from 'react';

// images
import logo from  "../../assets/logo.svg"
import footer from  "../../assets/footer-bottom-img.png"

// icons
import {BsFacebook,BsTwitter,BsPinterest,BsLinkedin} from "react-icons/bs"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container mx-auto px-9">
                    <div className="flex justify-between items-center pt-10">
                        <img src={logo} alt=""/>
                        <nav>
                            <a href="#"
                               className="px-4 text-white uppercase hover:text-yellow-500 font-extrabold">Home</a>
                            <a href="#"
                               className="px-4 text-white uppercase hover:text-yellow-500 font-extrabold">Movie</a>
                            <a href="#" className="px-4 text-white uppercase hover:text-yellow-500 font-extrabold">Tv
                                Show</a>
                            <a href="#" className="px-4 text-white uppercase hover:text-yellow-500 font-extrabold">Web
                                Series</a>
                            <a href="#"
                               className="px-4 text-white uppercase hover:text-yellow-500 font-extrabold">Pricing</a>
                        </nav>
                    </div>
                    <div className="flex items-center justify-center pt-10">
                        <div className="w-11/12 bg-zinc-600 h-0.5"></div>
                    </div>
                    <div className="flex justify-between items-center pt-10">

                        <nav>
                            <a href="#" className="px-4 text-white uppercase hover:text-yellow-500 ">faq</a>
                            <a href="#" className="px-4 text-white uppercase hover:text-yellow-500 ">help center</a>
                            <a href="#" className="px-4 text-white uppercase hover:text-yellow-500 ">terms of use</a>
                            <a href="#" className="px-4 text-white uppercase hover:text-yellow-500 ">privacy</a>
                        </nav>
                        <div className="flex items-center">
                            <div className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center m-1.5 text-white hover:text-yellow-500 cursor-pointer"><BsFacebook/></div>
                            <div className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center m-1.5 text-white hover:text-yellow-500 cursor-pointer"><BsTwitter/></div>
                            <div className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center m-1.5 text-white hover:text-yellow-500 cursor-pointer"><BsPinterest/></div>
                            <div className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center m-1.5 text-white hover:text-yellow-500 cursor-pointer"><BsLinkedin/></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-zinc-700 py-8">
                <div className="container mx-auto px-9">
                    <div className="flex justify-between items-center">
                        <h1 className="text-sm  text-white font-semibold">
                            © 2022 <a href="#" className="text-yellow-500">codewithsadee</a>. All Rights Reserved
                        </h1>
                        <img src={footer} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;