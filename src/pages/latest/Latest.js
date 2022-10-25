import React from 'react';
// images
import imgServices from "../../assets/service-banner.jpg";
// icons
import {BsBoxArrowInDown} from "react-icons/bs";

const Latest = () => {
    return (
        <>
            <section className="services pt-24 ">
                <div className="container mx-auto px-9">
                    <div className="flex items-center justify-around">
                        <div className="flex items-end">
                            <img src={imgServices} alt=""/>

                        </div>         <button
                        className="w-36 h-16 rounded-lg bg-[#e2d703] flex items-center justify-evenly rotate-90 mt-96 -mb-4">DOWNLOAD<BsBoxArrowInDown
                        className=""/></button>
                        <div>
                            <div className="flex items-center">
                                <div className="w-10 h-1 mr-3 bg-[#e2d703]"></div>
                                <span className="text-white font-[500]">OUR SERVICES</span>
                            </div>

                            <h1 className="text-white text-4xl font-bold">Download Your Shows<br/> Watch Offline.</h1>
                            <p className="text-white font-[500]">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There <br/>are many
                                variations of passages of lorem Ipsum available, but the majority have<br/> suffered
                                alteration in some injected humour.</p>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Latest;