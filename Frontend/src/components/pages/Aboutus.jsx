import React from 'react'
import image_1 from '../../assets/about-us_1.png'
import image_2 from '../../assets/about-us_2.png'
import image_3 from '../../assets/about-us_3.png'

import { CarouselWithContent } from '../pages/Carousel'

function Aboutus() {
    return (
        <>
            <div class="bg-gradient-to-r from-[#194266] to-[#235C85] text-white py-4 sm:py-10 md:py-16">
                <div class="grid grid-cols-1 content-center justify-center text-center">
                    <div class="px-4 flex flex-col items-center">
                        {/* <!-- Heading --> */}
                        <p class="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-heading leading-tight font-bold">
                            About <span class="text-gray-400">Us</span>
                        </p>
                        {/* <!-- Paragraph --> */}
                        <p class="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-full md:max-w-3xl font-para text-center">
                            We specialize in harnessing the transformative potential of cutting-edge technologies, with a primary focus on Blockchain, Data Engineering, and Artificial Intelligence. Our mission is to pave the way for a more innovative and interconnected world, where businesses and individuals thrive through secure and seamless technology solutions. Through our comprehensive range of services and expertise, we are committed to delivering tangible value and empowering our clients to embrace the future with confidence.
                        </p>
                        {/* <!-- Button -->
            <button class="mt-6 sm:mt-8 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition transform ease-in-out duration-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                REQUEST A PROJECT
            </button> */}
                    </div>
                </div>
            </div>

            {/* <!-- Section --> */}

            <div className="bg-gradient-to-r from-[#194266] to-[#235C85] text-white flex flex-col justify-center items-center py-10 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 ">
                    {/* Left Column */}
                    <div className="bg-gradient-to-r from-[#194266] to-[#235C85] text-white py-8 sm:py-12 lg:py-16 px-6 sm:px-16 lg:px-28 border border-white flex flex-col justify-center items-start font-bold">
                        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl pb-4 sm:pb-6 lg:pb-8 text-left">
                            Life at Your Company
                        </h1>
                        <button className="mt-4 sm:mt-6 lg:mt-8 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                            VIEW JOB OPENINGS
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 lg:col-span-2 border border-white">
                        <div className="grid grid-rows-2 ">
                            {/* Top Row */}
                            <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 border-b border-white">
                                <div className="col-span-1">
                                    <img
                                        src={image_1}
                                        alt="Group-1"
                                        className="w-full h-full "
                                    />
                                </div>
                                <div className="col-span-1">
                                    <img
                                        src={image_2}
                                        alt="Group-1"
                                        className="w-full h-full "
                                    />
                                </div>
                            </div>

                            {/* Bottom Row */}
                            <div className="row-span-1">
                                <img
                                    src={image_3}
                                    alt="Group-1"
                                    className="w-full h-full object-cover "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Section --> */}

            {/* <!-- Section-2 --> */}
            <div className="bg-gradient-to-r from-[#194266] to-[#235C85] text-white flex flex-col justify-center items-center py-10 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 ">
                    {/* Left Column */}
                    <div className="bg-gradient-to-r from-[#194266] to-[#235C85] text-white py-3 sm:py-6 lg:py-12 px-3 sm:px-8 lg:px-10 border border-white flex flex-col justify-center items-start font-bold">
                        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl pb-4 sm:pb-6 lg:pb-8 text-left">
                         Our Team
                        </h1>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-base max-w-full md:max-w-3xl font-para text-justify">
                        our diverse and dynamic team is the heart of our success. Comprising exceptional talents from around the world, we unite under a common vision to drive innovation and excellence. With deep expertise in Blockchain, Data Engineering, and AI, our collaborative spirit fuels groundbreaking solutions that propel our clients towards their goals. Together, we are committed to shaping a brighter future empowered by technology and fostering meaningful connections on a global scale.</p>
                        <button className="mt-4 sm:mt-6 lg:mt-8 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                            VIEW JOB OPENINGS
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 lg:col-span-2 border border-white">
                       <CarouselWithContent />
                    </div>
                </div>
            </div>
            {/* <!-- Section-2 --> */}
        </>
    )
}

export default Aboutus