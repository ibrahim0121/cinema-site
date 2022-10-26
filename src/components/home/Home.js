import React from 'react';
import Hero from "./hero/Hero";
import Upcoming from "./upcoming/Upcoming";
import TopRated from "./topRated/topRated";
import Services from "./services/Services";
import Series from "./series/Series";
import Trial from "./trial/Trial";

const Home = () => {
    return (
        <>
            <Hero/>
            <Upcoming/>
            <Services/>
            <TopRated/>
            <Series/>
            <Trial/>
        </>
    );
}

export default Home;

