import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/footer";
import Home from "../home/Home";

export default function LayOut({children}) {
    return (

        <>
            <Header/>
            {children}
            <Home/>
            <Footer/>
        </>
    );

};

