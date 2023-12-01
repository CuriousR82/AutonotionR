import React from 'react'
import { ReactComponent as LinkedinLogo } from '../logos/linkedin.svg'
import { ReactComponent as ResumeLogo } from '../logos/resume.svg'
import { ReactComponent as GithubLogo } from '../logos/github.svg'
import { ReactComponent as EmailLogo } from '../logos/mail.svg'

const Info = ({ isLight, personalData }) => {
    const titleText = personalData[0].properties.Title.title[0].plain_text;
    const desc1 = personalData[0].properties.Description1.rich_text[0].plain_text;
    const desc2 = personalData[0].properties.Description2.rich_text[0].plain_text;
    const githubUrl = personalData[0].properties.Github.url;
    const linkedinUrl = personalData[0].properties.Linkedin.url;
    const resumePdf = personalData[0].properties.Resume.files[0].file.url;
    const email = personalData[0].properties.Email.email;

    let textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";

    // nice point colour : bg-[#5c7ad6] button colour

    return (
        <>
            <div id='info-section' className="flex flex-col py-24 px-10 sm:px-14 items-start text-left mb-0 md:mb-12 ">
                <h1 className={`title-font text-5xl mb-4 font-semibold ${textColor}`}>{titleText}
                </h1>
                <p className="mb-8 leading-relaxed text-[#808080] md:w-2/3 text-base ">{desc1}<br></br>
                    {desc2}</p>
                <div className="flex justify-start items-end gap-3">
                    <button className="items-center text-white bg-[#5c7ad6] flex border-0 h-8 px-3 focus:outline-none hover:bg-[#808080] rounded text-lg">
                        <a href={resumePdf} target='_blank'>
                            <div className='flex flex-row gap-2 text-base items-center'>
                                <ResumeLogo className='w-3' />
                                Resume
                            </div>
                        </a>
                    </button>
                    <div className={`flex flex-row gap-2.5 items-end mb-1`}>
                        <a href={githubUrl} target='_blank'>
                            <GithubLogo className={`w-[20px] ${textColor} hover:text-[#5c7ad6]`} />
                        </a>
                        <a href={linkedinUrl} target='_blank'>
                            <LinkedinLogo className={`w-[20px] ${textColor} hover:text-[#5c7ad6]`} />
                        </a>
                        <a href={`mailto:${email}`} target='_blank'>
                            <EmailLogo className={`w-[20px] ${textColor} hover:text-[#5c7ad6]`} />
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Info
