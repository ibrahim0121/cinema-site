import React ,{useState} from 'react';

// images

// icons
import {BsFillCalendar2DateFill, BsStopwatch} from "react-icons/bs"
import {FaPlay} from "react-icons/fa"

const Hero = () => {

    return (
        <>
            <section className="hero " >
                <div className="container mx-auto px-9">
                    <div className="hero pt-36 flex justify-around h-[100%] flex-col">
                        <p className="text-[#e2d703] font-bold text-4xl">Filmlane</p>
                        <h1 className="text-white text-6xl font-bold pt-4">Unlimited <span
                            className="text-[#e2d703]">Movie</span>,<br/> TVs Shows, & More.</h1>
                        <div className="flex items-center justify-between w-[40%]">
                            <div>
                                <button className="w-20 h-8 bg-white font-bold">PG 18</button>
                                <button
                                    className=" bg-transparent border-white border-2 w-10 h-8 ml-4 text-white font-bold">HD
                                </button>
                            </div>
                            <h3 className="text-white font-[600] ">Romance, Drama</h3>
                            <div className="flex items-center">
                                <BsFillCalendar2DateFill className="text-[#e2d703] mr-2"/>
                                <span className="text-white font-[600]">2022</span>
                            </div>
                            <div className="flex items-center">
                                <BsStopwatch className="text-[#e2d703] mr-2 "/>
                                <span className="text-white font-[600]">128 min</span>
                            </div>
                        </div>
                        <button
                            className="w-44 h-12 bg-transparent border-[#e2d703] border-2 flex items-center justify-evenly rounded-3xl text-white hover:bg-[#e2d703]">
                            <FaPlay className="text-white"/>WATCH NOW
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;