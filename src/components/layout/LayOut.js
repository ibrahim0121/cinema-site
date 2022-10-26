import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/footer";

export default function LayOut({children}) {
    return (

        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );

};

