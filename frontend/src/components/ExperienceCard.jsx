import React from 'react'

const ExperienceCard = ({ isLight, exp }) => {
    const companyName = exp.properties.Company.rich_text[0].plain_text;
    const positionName = exp.properties.Title.title[0].plain_text;
    const location = exp.properties.Location.rich_text[0].plain_text;
    const description = exp.properties.Description.rich_text[0].plain_text;
    const imageUrl = exp.cover.file?.url || exp.cover.external.url;
    const skills = exp.properties.Skills.multi_select;
    const startDate = exp.properties.Date.date.start || "Incoming";
    const endDate = exp.properties.Date.date.end || "Present";

    function formatDate(start, end) {
        const [startYear, startMonth] = start.split('-');
        const [endYear, endMonth] = end.split('-');
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        let formattedStart = `${months[Number(startMonth) - 1]} ${startYear}`;
        let formattedEnd = `${months[Number(endMonth) - 1]} ${endYear}`;

        if (endDate == "Present") { formattedEnd = "Present"; }

        return `${formattedStart} - ${formattedEnd}`;
    }

    let formattedDate = (startDate == endDate ? "Incoming" : formatDate(startDate, endDate));
    // if (startDate == endDate) { formattedDate = "Incoming"; }
    // else { formattedDate = formatDate(startDate, endDate); }


    let textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";


    return (
        <>
            <div className="flex relative pt-4 pb-16 sm:items-center md:w-2/3 ">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-px bg-[#808080] pointer-events-none"></div>
                </div>

                <div className='flex flex-row items-start'>
                    <div className="flex-shrink-0 w-4 h-4 rounded-full mt-8 sm:mt-7 inline-flex items-center justify-center bg-indigo-500  relative left-1  z-10 title-font font-medium text-sm"></div>

                    <div className="flex-grow px-6 flex sm:items-start flex-col sm:flex-row">
                        <img className="rounded-md object-cover w-16 h-16 border border-gray-200 border-opacity-60" src={imageUrl} alt=""></img>
                        <div className="flex-grow sm:pl-5 mt-4 sm:mt-0">
                            <p className="leading-relaxed text-sm text-[#808080]">{formattedDate}</p>
                            <h2 className={`font-medium title-font ${textColor} mb-1 text-lg`}>{companyName}</h2>
                            <h3 className="font-medium title-font text-[#5c7ad6] mb-1 text-base">{positionName}</h3>
                            <p className="leading-relaxed text-sm text-[#808080] mb-2">{location}</p>
                            <p className="leading-relaxed text-base text-[#808080] mb-2">{description}</p>
                            <div className={"flex flex-wrap flex-row gap-1"}>
                                {skills.map((skill) => <p className={`py-[2.5px] p-1.5 rounded text-xs text-white bg-[#5c7ad6]`}>{skill.name}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard
