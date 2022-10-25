import React from 'react';
import LayOut from "../layout/LayOut";
import Hero from "./hero/Hero";
import Upcoming from "./upcoming/Upcoming";
import Services from "./services/Services";
import TopRated from "./topRated/topRated";
import Series from "./series/Series";
import Trial from "./trial/Trial";

const Home = () => {
    return (
        <LayOut>
            <Hero/>
            <Upcoming/>
            <Services />
            <TopRated/>
            <Series/>
            <Trial/>
        </LayOut>
    );
};

export default Home;

