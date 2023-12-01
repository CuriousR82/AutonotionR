import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ArtCard from './ArtCard';


const ArtSection = ({ isLight, numItem, artData }) => { // retrieves data from Arts.jsx

    return (

        <>
            <section className={`fade-on-load container  mx-auto px-10 sm:px-14 pt-6 items-center justify-center text-gray-600 body-font `}>
                {/* <h1 className='text-2xl font-semibold text-[#5c7ad6] mb-4'>Arts</h1> */}
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">

                    {/* maps data */}
                    {(0 < numItem) && artData.map((project, index) => {
                        if (index < numItem) {
                            return <ArtCard key={project.id} data={project} isLight={isLight} /> 
                        } 
                        // console.log("NEW METHOD WORKING");
                    })}

                    {(numItem < 0) && artData.map((project) => <ArtCard key={project.id} data={project} isLight={isLight} />)}


                </div>
            </section>



        </>
    );
};

export default ArtSection;
