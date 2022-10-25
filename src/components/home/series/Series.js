import React, {useState,useEffect} from 'react';
import axios from "axios"
// images
import series1 from "../../../assets/series-1.png";
import series2 from "../../../assets/series-2.png";
import series3 from "../../../assets/series-3.png";
import series4 from "../../../assets/series-4.png";

// icons
import {BsStopwatch} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {NavLink} from "react-router-dom";

const Series = () => {
    const [dataSeries,setDataSeries] =useState([])
    useEffect(()=>{
        axios ("https://api.themoviedb.org/3/movie/now_playing?api_key=72315348c29a41a225bae93956036048&language=en-US&page=1")
            .then(({data})=>{
                setDataSeries(data.results)
                console.log(data)
            })
    })
    return (
        <>
            <section id="series">
                <div className="container mx-auto px-9">
                    <div className="flex items-center justify-center flex-col pt-20">
                        <p className="text-[#e2d703] font-[600] text-[12px] mb-3">BEST TV SERIES</p>
                        <h1 className="text-white text-4xl font-[750]">World Best TV Series</h1>
                    </div>
                    <div className="flex pt-16">
                        {
                            dataSeries.slice(4,8).map(el=>(
                                <div className="mx-2" key={el.id}>
                                    <NavLink to="/more"><img src={`https://image.tmdb.org/t/p/w500${el.poster_path && el.poster_path}`} alt="" className="w-72 h-100 rounded-lg hover:opacity-60 cursor-pointer"/></NavLink>
                                    <div className="flex justify-between w-72 my-3">
                                        <NavLink to="/more"><h2 className="text-white font-bold  text-xl hover:text-[#e2d703] cursor-pointer">{el.original_title}</h2></NavLink>
                                        <span className="text-[#e2d703] font-extrabold ">{el.release_date}</span>
                                    </div>
                                    <div className="flex justify-between w-72 items-center mt-4">
                                        <button className="bg-transparent border-2 border-white text-[#e2d703] w-10 font-bold">2K</button>
                                        <div className="flex items-center">
                                            <BsStopwatch className="text-[#e2d703] mr-1"/>
                                            <span className="text-white font-[600] mr-4 ">47 min</span>
                                            <AiFillStar  className="text-[#e2d703] mr-1"/>
                                            <span  className="text-white font-[600]">{el.vote_average}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </section>
        </>
    );
};

export default Series;