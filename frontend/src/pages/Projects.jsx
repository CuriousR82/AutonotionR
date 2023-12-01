import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ProjectSection from '../components/ProjectSection';


const Projects = ({ isLight, projectData }) => { // retrieves the whole array of data form App.jsx
    
    return (
        <section className='min-h-screen transition pt-32 pb-40'>
            <div className=" container mx-auto flex flex-row justify-between items-center px-10 sm:px-14">
                <h1 className='text-2xl font-semibold text-[#5c7ad6]'>Projects</h1>
            </div>
            {/* sends the whole data to ProjectSection */}
            <ProjectSection isLight={isLight} numItem={-1} projectData={projectData} />
        </section>
    );
};

export default Projects;
