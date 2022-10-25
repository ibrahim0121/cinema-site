import React from 'react';

// images
import MoreImg from "../../assets/movie-4.png"

// icons2
import {BsBoxArrowInDown, BsFillPlayFill, BsFillCalendar2DateFill, BsStopwatch} from "react-icons/bs"
import {AiOutlineShareAlt} from "react-icons/ai"


const More = () => {
    return (
        <>
            <section className="more">
                <div className="container mx-auto px-9">
                    <div className="flex items-end">
                        <img src={MoreImg} alt="" className="w-72 h-96 object-cover rounded"/>
                        <div className="flex justify-start flex-col justify-around h-[330px] ml-12">
                            <h3 className="text-[#e2d703] text-2xl font-[800]">New Episodes</h3>
                            <h1 className="text-white text-6xl font-bold">Free <span
                                className="text-[#e2d703]">Guy</span></h1>
                            <div className="flex items-center justify-around w-[600px]">
                                <button className="w-16 h-6 bg-white text-black font-bold">PG 13</button>
                                <button
                                    className="bg-transparent border-white border-2 w-10 h-6 text-white flex items-center justify-center">HD
                                </button>
                                <p className="text-white">Comedy, Action, Adventure, Science Fiction</p>
                                <div className="flex items-center">
                                    <BsFillCalendar2DateFill className="text-[#e2d703] mr-2"/> <span
                                    className="text-white">2021</span>
                                </div>
                                <div className="flex items-center">
                                    <BsStopwatch className="text-[#e2d703] mr-1"/> <span
                                    className="text-white">115 min</span>
                                </div>
                            </div>
                            <p className="text-gray-300">A bank teller called Guy realizes he is a background character
                                in an open world video
                                game called Free City that will soon go offline.</p>
                            <div className="flex justify-around items-center w-[500px] h-20 bg-gray-700 rounded">
                                <div>
                                    <AiOutlineShareAlt className="text-white text-2xl"/>
                                    <p className="text-white text-xl">share</p>
                                </div>
                                <div>
                                    <h4 className="text-white text-xl font-bold">Prime Video</h4>
                                    <p className="text-white">Streaming Channels</p>
                                </div>
                                <button
                                    className="text-white text-[13px] font-bold bg-transparent border-[#e2d703] border-2 flex items-center justify-center rounded-3xl px-1 w-36 h-12 hover:bg-[#e2d703] hover:text-black">
                                    <BsFillPlayFill className="text-white text-xl "/>WATCH NOW
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                className="w-36 h-16 rounded-lg bg-[#e2d703] flex items-center justify-evenly rotate-90 mb-10  ">DOWNLOAD<BsBoxArrowInDown
                                className=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default More;