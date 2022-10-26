import React from 'react';

// images
import Movies1 from "../../../assets/movie-1.png";
import Movies2 from "../../../assets/movie-2.png";
import Movies3 from "../../../assets/movie-3.png";
import Movies4 from "../../../assets/movie-4.png";
import Movies5 from "../../../assets/movie-5.png";
import Movies6 from "../../../assets/movie-6.png";
import Movies7 from "../../../assets/movie-7.png";
import Movies8 from "../../../assets/movie-8.png";

// icons
import {BsStopwatch} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";

const TopRated = () => {
    return (
        <>
            <section className="topRated  pt-24 pb-4">
                <div className="container mx-auto px-9">
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-[#e2d703] font-[600] text-[12px]">ONLINE STREAMING</p>
                        <h1 className="text-white text-4xl font-[750]">Top Rated Movies</h1>
                        <div className="mt-16">
                            <button className=" py-3 px-8 rounded bg-[#0a0f0f] text-white font-bold ">MOVIES</button>
                            <button className=" py-3 px-8 rounded bg-[#0a0f0f] text-white font-bold mx-4">TV SHOWS</button>
                            <button className=" py-3 px-8 rounded bg-[#0a0f0f] text-white font-bold ">DOCUMENTARY</button>
                            <button className=" py-3 px-8 rounded bg-[#0a0f0f] text-white font-bold ml-4 ">SPORTS</button>

                        </div>
                    </div>
                    <div className="flex mt-20">
                        <div className="mx-2">
                            <img src={Movies1} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/>
                            <div className="flex justify-between w-72 my-3">
                                <h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">Sonic the Hedgehog 2</h2>
                                <span className="text-[#e2d703] font-extrabold ">2022</span>
                            </div>
                            <div className="flex justify-between w-72 items-center mt-4">
                                <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">2K</button>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/>
                                    <span className="text-white font-[600] mr-4 ">122 min</span>
                                    <AiFillStar  className="text-[#e2d703] mr-1"/>
                                    <span  className="text-white font-[600]">7.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-2">
                            <img src={Movies2} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/>
                            <div className="flex justify-between w-72 my-3">
                                <h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">Morbius</h2>
                                <span className="text-[#e2d703] font-extrabold ">2022</span>
                            </div>
                            <div className="flex justify-between w-72 items-center mt-4">
                                <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">HD</button>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/>
                                    <span className="text-white font-[600] mr-4 ">104 min</span>
                                    <AiFillStar  className="text-[#e2d703] mr-1"/>
                                    <span  className="text-white font-[600]">5.9</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-2">
                            <img src={Movies3} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/>
                            <div className="flex justify-between w-72 my-3">
                                <h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">The Adam Project</h2>
                                <span className="text-[#e2d703] font-extrabold ">2022</span>
                            </div>
                            <div className="flex justify-between w-72 items-center mt-4">
                                <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">4K</button>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/>
                                    <span className="text-white font-[600] mr-4 ">106 min</span>
                                    <AiFillStar  className="text-[#e2d703] mr-1"/>
                                    <span  className="text-white font-[600]">7.0</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-2">
                            <img src={Movies4} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/>
                            <div className="flex justify-between w-72 my-3">
                                <h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">Free Guy</h2>
                                <span className="text-[#e2d703] font-extrabold ">2021</span>
                            </div>
                            <div className="flex justify-between w-72 items-center mt-4">
                                <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">HD</button>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/>
                                    <span className="text-white font-[600] mr-4 ">115 min</span>
                                    <AiFillStar  className="text-[#e2d703] mr-1"/>
                                    <span  className="text-white font-[600]">7.7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-20">
                        <div className="mx-2">
                            <img src={Movies5} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/>
                            <div className="flex justify-between w-72 my-3">
                                <h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">The Batman</h2>
                                <span className="text-[#e2d703] font-extrabold ">2022</span>
                            </div>
                            <div className="flex justify-between w-72 items-center mt-4">
                                <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">4D</button>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/>
                                    <span className="text-white font-[600] mr-4 ">176 min</span>
                                    <AiFillStar  className="text-[#e2d703] mr-1"/>
                                    <span  className="text-white font-[600]">7.9</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-2">
                            <img src={Movies6} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/>
                            <div className="flex justify-between w-72 my-3">
                                <h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">Uncharted</h2>
                                <span className="text-[#e2d703] font-extrabold ">2022</span>
                            </div>
                            <div className="flex justify-between w-72 items-center mt-4">
                                <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">HD</button>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/>
                                    <span className="text-white font-[600] mr-4 ">116 min</span>
                                    <AiFillStar  className="text-[#e2d703] mr-1"/>
                                    <span  className="text-white font-[600]">7.0</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-2">
                            <img src={Movies7} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/>
                            <div className="flex justify-between w-72 my-3">
                                <h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">Death on the Nile</h2>
                                <span className="text-[#e2d703] font-extrabold ">2022</span>
                            </div>
                            <div className="flex justify-between w-72 items-center mt-4">
                                <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">2K</button>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/>
                                    <span className="text-white font-[600] mr-4 ">127 min</span>
                                    <AiFillStar  className="text-[#e2d703] mr-1"/>
                                    <span  className="text-white font-[600]">6.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-2">
                            <img src={Movies8} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/>
                            <div className="flex justify-between w-72 my-3">
                                <h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">The King's Man</h2>
                                <span className="text-[#e2d703] font-extrabold ">2021</span>
                            </div>
                            <div className="flex justify-between w-72 items-center mt-4">
                                <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">HD</button>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/>
                                    <span className="text-white font-[600] mr-4 ">131 min</span>
                                    <AiFillStar  className="text-[#e2d703] mr-1"/>
                                    <span  className="text-white font-[600]">7.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default TopRated;