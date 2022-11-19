import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {apiKay} from "../../api/api";
import Slider from "react-slick";
import {BsStopwatch} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";

const SearchPage = () => {
    const {movieName} =useParams()
    const [result,setResult] =useState([])
    console.log(result)
    useEffect(()=>{
        axios (`https://api.themoviedb.org/3/search/movie?api_key=${apiKay}&query=${movieName}`)
            .then(({data}) =>{
                setResult(data.results)
            })
    },[movieName])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <section className="searchPage">
                <div className="container mx-auto px-9">
                    <Slider {...settings}>
                        {
                            result.slice(0,10).map((el) => (
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

export default SearchPage;