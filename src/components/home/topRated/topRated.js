import React, {useEffect, useState} from 'react';

// images


// icons
import {BsStopwatch} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {apiKay} from "../../../api/api";

const TopRated = () => {
    const [dataRated, setDataRated] = useState([])
    useEffect(() => {
        axios(`
https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKay}&language=en-US&page=1`)
            .then(({data}) => {
                setDataRated(data.results)
                console.log(data.results)
            })
    }, [])
    console.log(dataRated)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <section className="topRated  pt-24 pb-4">
                <div className="container mx-auto px-9">
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-[#e2d703] font-[600] text-[12px]">ONLINE STREAMING</p>
                        <h1 className="text-white text-4xl font-[750]">Top Rated Movies</h1>
                        <div className="mt-16">
                            <button className=" py-3 px-8 rounded bg-[#0a0f0f] text-white font-bold ">MOVIES</button>
                            <button className=" py-3 px-8 rounded bg-[#0a0f0f] text-white font-bold mx-4">TV SHOWS
                            </button>
                            <button className=" py-3 px-8 rounded bg-[#0a0f0f] text-white font-bold ">DOCUMENTARY
                            </button>
                            <button className=" py-3 px-8 rounded bg-[#0a0f0f] text-white font-bold ml-4 ">SPORTS
                            </button>

                        </div>
                    </div>
                    <Slider {...settings}>
                        {
                            dataRated.slice(0, 10).map((el) => (
                                <div className="flex  pt-10" key={el.id}>
                                    <div className="mx-2" key={el.id}>
                                        <NavLink to=""><img
                                            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                                            alt=""
                                            className="w-72 h-96 object-cover  rounded-lg hover:opacity-60 cursor-pointer"/></NavLink>
                                        <div className="flex justify-between w-72 pt-3">

                                            <NavLink to={`/more/${el.id}`}
                                                     className="text-white font-bold  text-[14]  hover:text-[#e2d703] cursor-pointer">{el.original_title}</NavLink>
                                            <span className="text-[#e2d703] font-extrabold ">{el.release_date}</span>
                                        </div>
                                        <div className="flex justify-between w-72 items-center mt-4">
                                            <button
                                                className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">4K
                                            </button>
                                            <div className="flex items-center">
                                                <BsStopwatch className="text-[#e2d703] mr-1"/>
                                                <span className="text-white font-[600] mr-4 ">126 min</span>
                                                <AiFillStar className="text-[#e2d703] mr-1"/>
                                                <span className="text-white font-[600]">{el.vote_average}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>))
                        }
                    </Slider>
                    <Slider {...settings}>
                        {
                            dataRated.slice(10, 20).map((el) => (
                                <div className="flex  pt-10" key={el.id}>
                                    <div className="mx-2" key={el.id}>
                                        <NavLink to=""><img
                                            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                                            alt=""
                                            className="w-72 h-96 object-cover  rounded-lg hover:opacity-60 cursor-pointer"/></NavLink>
                                        <div className="flex justify-between w-72 pt-3">

                                            <NavLink to={`/more/${el.id}`}
                                                     className="text-white font-bold  text-[14]  hover:text-[#e2d703] cursor-pointer">{el.original_title}</NavLink>
                                            <span className="text-[#e2d703] font-extrabold ">{el.release_date}</span>
                                        </div>
                                        <div className="flex justify-between w-72 items-center mt-4">
                                            <button
                                                className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">4K
                                            </button>
                                            <div className="flex items-center">
                                                <BsStopwatch className="text-[#e2d703] mr-1"/>
                                                <span className="text-white font-[600] mr-4 ">126 min</span>
                                                <AiFillStar className="text-[#e2d703] mr-1"/>
                                                <span className="text-white font-[600]">{el.vote_average}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>))
                        }
                    </Slider>
                </div>
            </section>

        </>
    );
};

export default TopRated;