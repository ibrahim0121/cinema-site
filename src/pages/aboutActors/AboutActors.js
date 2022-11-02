import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {apiKay} from "../../api/api";

const AboutActors = () => {
    const [aboutActors, setAboutActors] = useState([])
    const {id} = useParams()
    // https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}/credits?api_key=${apiKay}&language=en-US`)
            .then(({data}) => {
          setAboutActors(data)
                console.log(data)
            })
    }, [])
    // console.log(AboutActors)
    return (
        <>
            <section id="aboutActors">
                <div className="container mx-auto px-9">

                    {
                        // aboutActors.map((el)=>(
                            <div className="" key={id}>
                                <div className="" key={id}>
                                    <img src={`https://image.tmdb.org/t/p/w500${aboutActors.poster_path}`} alt=""/>
                                </div>
                            </div>
                        // ))
                }
                </div>
            </section>
        </>
    );
};

export default AboutActors;