import React, {useState, useEffect} from 'react';
import Slider from "react-slick"
import {apiKay} from "../../../api/api";
import {NavLink} from "react-router-dom";
import axios from "axios";

// icons
import {BsStopwatch} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";

// images


const Upcoming = () => {
    const [dataUpcoming, setDataUpcoming] = useState([])

    console.log(dataUpcoming)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    //------PAGINATION-----//

    const [currentPage, setCurrentPage] = useState(1)
    const pages = [];
    for (let i = 1; i <= 10; i++)
        pages.push(i)
    const detailsFilm = (el) => {
        setCurrentPage(el)
    }
    useEffect(() => {
        axios(`
        https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKay}&language=en-US&page=${currentPage}`)
            .then(({data}) => {
                setDataUpcoming(data.results)
                console.log(data.results)
            })
    }, [currentPage])
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
                    {/*<div className="flex row flex-wrap">*/}
                        <Slider {...settings}>
                        {
                            dataUpcoming.slice(0, 6).map((el) => (
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
                                </div>
                            ))
                        }
                        </Slider>
                    </div>
                    <div className="flex my-9 items-center justify-center">
                        <ul className="inline-flex -space-x-px">
                            {
                                pages.map((el) => (
                                    <li key={el}>
                                        <button
                                            onClick={() => detailsFilm(el)}
                                            className={el === currentPage ? "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 bg-gray-100 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" :
                                                "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{el}</button>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                {/*</div>*/}
            </section>
        </>
    );
};

export default Upcoming;
