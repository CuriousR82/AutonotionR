import React from 'react'

const ArtCard = ({ data, artKey, isLight }) => {
    const projectTitle = data.properties.Name.title[0].plain_text;
    const description = data.properties.Description.rich_text[0].plain_text;
    const portfolioUrl = data.properties.Portfolio.url;
    const imageUrl = data.cover.file?.url || data.cover.external.url;
    const tags = data.properties.Tags.multi_select;

    let textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";

    return (
        <>
            <div className={`md:w-80 lg:w-[22rem] mb-12 shadow-[0_0px_25px_-5px_rgba(158,158,158,0.4)] hover:shadow-[0_0px_25px_-5px_rgba(92,122,214,1.0)] transition border border-gray-200 border-opacity-60 rounded-lg`}>
                <div className="flex flex-col h-full overflow-hidden ">
                    
                    <img className="rounded-t-md object-cover w-full" src={imageUrl} alt=""></img>
                    <div className="p-5 flex flex-col h-full justify-between">
                        
                        <div>
                            <h1 className={`title-font text-lg font-medium ${textColor} mb-2`}>{projectTitle}</h1>
                            <p className="leading-relaxed mb-4 text-sm text-[#808080]">{description}</p>
                        </div>


                        <div className="flex items-center justify-between flex-wrap ">
                            <div className={"flex flex-wrap flex-row gap-1"}>
                                {tags.map((tag) => <p className={`py-[2.5px] p-1.5 rounded text-xs text-white bg-[#5c7ad6]`}>{tag.name}</p>)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ArtCard
