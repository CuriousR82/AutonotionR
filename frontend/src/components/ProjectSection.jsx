import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ProjectCard from './ProjectCard';
import '../App.css'


const ProjectSection = ({ isLight, numItem, projectData }) => {

    return (
        <>
            <section className="fade-on-load container  mx-auto px-10 sm:px-14 pt-6 items-center justify-center text-gray-600 body-font">
                {/* <h1 className='text-2xl font-semibold text-[#5c7ad6] mb-4'>Projects</h1> */}
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                    {(0 < numItem) && projectData.map((project, index) => {
                        if (index < numItem) {
                            return <ProjectCard key={project.id} data={project} isLight={isLight} />
                        }
                    })}
                    {(numItem < 0) && projectData.map((project) => <ProjectCard key={project.id} data={project} isLight={isLight} />)}

                </div>
            </section>
        </>
    );
};

export default ProjectSection;
