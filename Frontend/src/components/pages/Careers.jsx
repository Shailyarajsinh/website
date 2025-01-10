import React from 'react'

function Careers() {
    return (
        <>
            <div class="bg-gradient-to-r from-[#194266] to-[#235C85] text-white py-4 sm:py-10 md:py-16">
                <div class="grid grid-cols-1 content-center justify-center text-center">
                    <div class="px-4 flex flex-col items-center">
                        {/* <!-- Heading --> */}
                        <p class="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-heading leading-tight font-bold">
                            Care<span class="text-gray-400">ers</span>
                        </p>
                        {/* <!-- Paragraph --> */}
                        <p class="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-full md:max-w-3xl font-para text-center">
                            Ready to embark on an exciting career journey filled with innovation and growth? At Your Company Name, we offer a vibrant and inclusive work environment that fosters creativity and collaboration. Join our team of talented professionals from diverse backgrounds and explore endless opportunities in Blockchain, Data Engineering, and AI. Whether you're an experienced expert or a fresh graduate, we welcome passionate individuals eager to make a difference in the world of technology. Discover a rewarding career path with us and be part of shaping a brighter future for the global community.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- Section --> */}
            <div className="bg-gradient-to-r from-[#194266] to-[#235C85] text-white flex flex-col justify-center items-center py-10 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 ">
                    {/* Left Column */}
                    <div className=" text-white py-3 sm:py-6 lg:py-12 px-3 sm:px-8 lg:px-10 border border-white flex flex-col justify-center items-start font-bold">
                        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl pb-4 sm:pb-6 lg:pb-8 text-left">
                            We Are Hiring
                        </h1>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-base max-w-full md:max-w-3xl font-para text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque repudiandae ut facilis fugit, deleniti, et qui officiis a quos ipsum nulla aperiam voluptatem saepe? Exercitationem illum harum cupiditate necessitatibus voluptates!
                        </p>
                        <button className="mt-4 sm:mt-6 lg:mt-8 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                            APPLY
                        </button>
                    </div>
                    <div className="col-span-1 lg:col-span-2 border border-white px-0 py-0 sm:px-7 sm:py-7 lg:px-10 lg:py-10 md:px-10 md:py-10">
                        <div className="grid grid-rows-5 gap-4">
                            {/* Job Row */}
                            {[
                                { title: "UI/UX Designer", type: "Full-Time", location: "On-Site" },
                                { title: "Front-End Developer", type: "Full-Time", location: "On-Site" },
                                { title: "Back-End Developer", type: "Full-Time", location: "On-Site" },
                                { title: "QA Engineer", type: "Full-Time", location: "On-Site" },
                                { title: "Business Analyst", type: "Full-Time", location: "On-Site" },
                            ].map((job, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b border-white pt-4 pb-4 last:border-0 px-4"
                                >
                                    {/* Job Info */}
                                    <div>
                                        <h2 className="text-xl font-bold">{job.title}</h2>
                                        <div className="flex space-x-2 mt-2">
                                            <span className="text-sm px-3 py-3 text-white rounded-full border border-gray-600">
                                                {job.type}
                                            </span>
                                            <span className="text-sm px-3 py-3 text-white rounded-full border border-gray-600">
                                                {job.location}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Arrow Icon */}
                                    <div>
                                        <a
                                            href="#"
                                            className="text-white text-5xl justify-end transform transition hover:scale-110"
                                        >
                                            &#8599;
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- Section --> */}
        </>
    )
}

export default Careers