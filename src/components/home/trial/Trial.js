import React from 'react';

const Trial = () => {
    return (
        <>
                <div className="trial">
                    <div className='container mx-auto px-9'>
                        <div className="flex justify-around items-center py-10">
                            <div>
                                <h2 className="text-black font-extrabold text-3xl">TRIAL START FIRST 30 DAYS.</h2>
                                <h5 className="text-black font-normal pt-2">Enter your email to create or restart your membership.</h5>
                            </div>
                            <div className="relative w-5/12 h-16">
                                <input type="text" placeholder="Enter your email" className=" w-full h-full rounded-md px-3"/>
                                <button className="absolute right-1 text-yellow-500 font-bold px-6 top-1 bg-black py-4 hover:bg-transparent hover:border-y-amber-500 hover:border-2 transition.4s hover:text-black">GET STARTED</button>
                            </div>
                        </div>

                    </div>
                </div>
        </>
    );
};

export default Trial;