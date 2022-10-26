import React from 'react';
import {Route, Routes} from "react-router-dom";
import Latest from "./latest/Latest";
import NowPlaying from "./nowPlaying/NowPlaying";
import Popular from "./popular/Popular";
import TopRated from "../components/home/topRated/topRated";
import Upcoming from "../components/home/upcoming/Upcoming";
import More from "./more/More";
import Home from "../components/home/Home";

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/latest" element={<Latest/>}/>
                <Route path="/nowPlayer" element={<NowPlaying/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/topRated" element={<TopRated/>}/>
                <Route path="/upcoming" element={<Upcoming/>}/>
                <Route path="/more" element={<More/>}/>
            </Routes>
        </div>
    );
};

export default Pages;