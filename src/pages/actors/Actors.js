import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import Slider from "react-slick"
import {apiKay} from "../../api/api";
import AboutActors from "../aboutActors/AboutActors";

const Actors = () => {
    const [actors, setActors] = useState([])
    const {id: movieId} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKay}&language=en-US`)
            .then(({data}) => {
                setActors(data.cast)
                console.log(actors)
            })
    }, [])

    // console.log(actors)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <section className="actors">
                <div className="container mx-auto px-9">
                    <Slider {...settings}>
                    {
                        actors.slice(0,20).map(el=> (
                                <div className="flex items-center justify-between" key={el.id}>
                                    <div className="w-72  pb-8 rounded mr-4">
                                        <img src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`} alt=""
                                             className="w-72 h-96 object-cover rounded"/>
                                        <div className="pt-3 flex flex-col items-start">
                                            <NavLink to={`/aboutActors/${el.id}`}>
                                                <h1 className="text-white text-[25px] font-bold hover:text-[#e2d703] cursor-pointer">{el.original_name}</h1>
                                            </NavLink>
                                            <h3 className="text-zinc-300 text-[17px] font-bold"> {el.character}</h3>
                                            {/*<span className="text-[#e2d703] text-xl font-bold pt-1" >16 эпизодов</span>*/}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Actors;