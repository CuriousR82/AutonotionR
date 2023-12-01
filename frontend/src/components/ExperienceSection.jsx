import React from 'react'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = ({ isLight, expData }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-10 sm:px-14 flex flex-col ">
                    <h1 className='text-2xl font-semibold text-[#5c7ad6] mb-6'>Experiences</h1>
                    {expData && expData.map((exp, index) => {
                        return <ExperienceCard isLight={isLight} exp={exp} />
                    })}
                </div>
            </section>
        </>
    )
}

export default ExperienceSection
