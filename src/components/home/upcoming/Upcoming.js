import React, {useState, useEffect} from 'react';
import axios from "axios"
// icons
import {BsStopwatch} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";

// images
    import img3 from "../../../assets/upcoming-3.png";
import img4 from "../../../assets/upcoming-4.png";
import {NavLink} from "react-router-dom";

const Upcoming = () => {
    const [dataMovies, setDataMovies] = useState([])
    useEffect(() => {
        axios("https://api.themoviedb.org/3/movie/now_playing?api_key=72315348c29a41a225bae93956036048&language=en-US&page=1")
            .then(({data}) => {
                setDataMovies(data.results)
                console.log(data.results)
            })
    }, [])
    console.log(dataMovies)
    return (
        <>
            <section className="upcoming pt-10">
                <div className="container mx-auto px-9">
                    <div className="upcomingg flex justify-between items-start">
                        <div>
                            <p className="text-[#e2d703] font-bold ">ONLINE STREAMING</p>
                            <h2 className="text-white text-4xl font-bold pt-2">Upcoming Movies</h2>
                        </div>
                        <div>
                            <button
                                className=" text-white font-[600] w-24 h-12 bg-transparent border-2 border-gray-500 rounded-3xl">Movies
                            </button>
                            <button
                                className=" mx-4 text-white font-[600] w-24 h-12 bg-transparent border-2 border-gray-500 rounded-3xl">TV
                                Shows
                            </button>
                            <button
                                className=" text-white font-[600] w-24 h-12 bg-transparent border-2 border-gray-500 rounded-3xl">Anime
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between pt-10">
                        {
                            dataMovies.slice(0, 4).map((el) => (
                        <div className="mx-2" key={el.id}>

                            <NavLink to="/more"><img src={`https://image.tmdb.org/t/p/w500${el.poster_path && el.poster_path}`} alt="" className="w-72 h-96 object-cover  rounded-lg hover:opacity-60 cursor-pointer"/></NavLink>

                            <div className="flex justify-between w-72 pt-3">

                                    <NavLink to="/more" className="text-white font-bold  text-[14]  hover:text-[#e2d703] cursor-pointer">{el.original_title}</NavLink>
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
                                ))}
                    </div>
               </div>
            </section>
        </>
    );
};

export default Upcoming;
