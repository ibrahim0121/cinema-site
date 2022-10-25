import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import TopRated from "./pages/topRated/TopRated";
import Popular from "./pages/popular/Popular";
import Latest from "./pages/latest/Latest";
import NowPlaying from "./pages/nowPlaying/NowPlaying";
import Upcoming from "./components/home/upcoming/Upcoming";
import More from "./pages/more/More";
import LayOut from "./components/layout/LayOut";

function App() {
    return (
        <>
            <LayOut>
                <Routes>
                    <Route path="/latest" element={<Latest/>}/>
                    <Route path="/nowPlayer" element={<NowPlaying/>}/>
                    <Route path="/Popular" element={<Popular/>}/>
                    <Route path="/topRated" element={<TopRated/>}/>
                    <Route path="/upcoming" element={<Upcoming/>}/>
                    <Route path="/more" element={<More/>}/>
                </Routes>
            </LayOut>

        </>
    );
}

export default App;
