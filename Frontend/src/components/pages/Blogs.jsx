import React from 'react'
import blog_1 from '../../assets/blog-1.png'


function Blogs() {
    return (
        <>
            <div class="bg-gradient-to-r from-[#194266] to-[#235C85] text-white py-4 sm:py-10 md:py-16">
                <div class="grid grid-cols-1 content-center justify-center text-center">
                    <div class="px-4 flex flex-col items-center">
                        {/* <!-- Heading --> */}
                        <p class="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-heading leading-tight font-bold">
                            Blo<span class="text-gray-400">gs</span>
                        </p>
                        {/* <!-- Paragraph --> */}
                        <p class="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-full md:max-w-3xl font-para text-center">
                        Welcome to our insightful blog, where innovation meets knowledge. Dive into the world of Blockchain, Data Engineering, and AI through thought-provoking articles, expert insights, and industry trends. Stay updated with the latest advancements and discover how these transformative technologies are shaping the future. Join us on this exciting journey as we share valuable information, spark discussions, and explore the endless possibilities of the digital landscape. Happy reading and let's embark on this quest for knowledge together!
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
                            Responsive Web Design
                        </h1>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-base max-w-full md:max-w-3xl font-para text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque repudiandae ut facilis fugit, deleniti, et qui officiis a quos ipsum nulla aperiam voluptatem saepe? Exercitationem illum harum cupiditate necessitatibus voluptates!
                        </p>
                        <button className="mt-4 sm:mt-6 lg:mt-8 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                            READ MORE
                        </button>
                    </div>
                    {/* Right Column */}
                    <div className="col-span-1 lg:col-span-2 border border-white px-0 py-0 sm:px-7 sm:py-7 lg:px-10 lg:py-10 md:px-10 md:py-10 w-fit">
                        <img src={blog_1}
                            alt="Group-1"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
            {/* <!-- Section --> */}
        </>
    )
}

export default Blogs