import React from 'react'
import strToLogo from './logoUtils';
import { ReactComponent as GithubLogo } from '../logos/github.svg'
import { ReactComponent as LinkLogo } from '../logos/link.svg'

const ProjectCard = ({ data, projectKey, isLight }) => {
    const projectTitle = data.properties.Name.title[0].plain_text;
    const description = data.properties.Description.rich_text[0].plain_text;
    const githubUrl = data.properties.Github.url;
    const imageUrl = data.cover.file?.url || data.cover.external.url;

    let burgerColor;
    let textColor;
    let shadowColor;

    if (isLight) {
        burgerColor = "bg-[#2e313c]";
        textColor = "text-[#2e313c]";
        shadowColor = "shadow-[0_4px_6px_-1px_rgb(92,122,214)]";
    } else {
        burgerColor = "bg-[#fef8f1c7]";
        textColor = "text-[#fef8f1c7]";
    }

    function toLogo(str) {
        return strToLogo(str, isLight); 
    }

    const tags = data.properties.Tags.multi_select;
    // console.log(tags)

    // svg icon link https://flowbite.com/icons/

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
                            <div className={"flex flex-wrap flex-row gap-1 items-center"}>
                                {tags.map((tag) => <p key={tag.id} className={`py-px rounded text-sm text-white`}>{toLogo(tag.name)}</p>)}
                                {/* {console.log("tag rendering")} */}
                            </div>

                            <div className='flex flex-row items-center'>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200">

                                    <a className={""} href={`${githubUrl}`} target='_blank'>
                                        <GithubLogo className={`w-[22px] h-[22px] ${textColor} hover:text-[#5c7ad6] transition`} />
                                    </a>
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <a href={`${githubUrl}`} target='_blank'>
                                        <LinkLogo className={`w-[20px] h-[20px] ${textColor} hover:text-[#5c7ad6] transition`} />
                                    </a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectCard
