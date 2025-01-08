import React from "react";
import union from "../../assets/union.png";
import target from "../../assets/target 1.png";
import hands from "../../assets/hands.png";

import crypytography from "../../assets/crypytography.png";
import chain from "../../assets/chain.png";

import component_1 from "../../assets/Component 1.png";
import component_2 from "../../assets/Component 2.png";
import component_3 from "../../assets/Component 3.png";
import component_4 from "../../assets/Component 4.png";
import component_5 from "../../assets/Component 5.png";
import component_6 from "../../assets/Component 6.png";

import section3_1 from "../../assets/div.s-card-icon.png";
import section3_2 from "../../assets/div.s-card-icon (1).png";
import section3_3 from "../../assets/div.s-card-icon (2).png";
import section3_4 from "../../assets/div.s-card-icon (3).png";

const Homepage = () => {
  return (
    <>
      <h1 className="text-base md:text-xl lg:text-xl text-center tracking-widest pt-10 w-full bg-[#17181D] text-white ">
        Unlocking the Future of Blockchain
      </h1>
      <div className="bg-[#17181D] text-white flex flex-col justify-center items-center py-10 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
        <div className="grid grid-rows-2 gap-6 md:gap-10">
          {/* First Row */}
          <div className="row-span-1 grid grid-cols-1 md:grid-cols-4 items-center gap-6">
            <div className="col-span-3 text-left md:pr-16 lg:pr-24">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-relaxed">
                Safeguarding the Digital Landscape
              </span>
            </div>
            <div className="col-span-1 text-center flex flex-col  items-end">
              <img
                src={crypytography}
                alt="blockchain"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 flex flex-col justify-end"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="row-span-1">
            {/* Mobile Layout */}
            <div className="grid grid-cols-1 items-center gap-6 md:hidden">
              {/* Text Section */}
              <div className="text-left">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading leading-relaxed">
                  With Cutting-Edge Security.
                </span>
                <p className="text-sm sm:text-base leading-relaxed font-para mt-4">
                  Lorem ipsum dolor sit amet consectetur. Mi amet urna vestibulum interdum enim
                  vestibulum est lobortis eget. Gravida turpis ante tortor odio nunc sit at sem
                  pulvinar. Nunc netus lectus a ut malesuada tortor massa. Velit nunc proin
                  dignissim.
                </p>
              </div>

              {/* Image Section */}
              <div className="text-center">
                <img
                  src={chain}
                  alt="blockchain"
                  className="w-40 h-40 sm:w-48 sm:h-48 "
                />
              </div>
            </div>

            {/* Desktop and Tablet Layout */}
            <div className="hidden md:grid grid-cols-4 items-center gap-6">
              {/* Image Section */}
              <div className="col-span-1 text-center">
                <img
                  src={chain}
                  alt="blockchain"
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 mx-auto"
                />
              </div>

              {/* Text Section */}
              <div className="col-span-3 text-left md:pl-16 lg:pl-24">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading leading-relaxed">
                  With Cutting-Edge Security.
                </span>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed font-para mt-4">
                  Lorem ipsum dolor sit amet consectetur. Mi amet urna vestibulum interdum enim
                  vestibulum est lobortis eget. Gravida turpis ante tortor odio nunc sit at sem
                  pulvinar. Nunc netus lectus a ut malesuada tortor massa. Velit nunc proin
                  dignissim.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* section-2 */}
      <div className="bg-[#17181D] text-white flex flex-col justify-center items-center  sm:py-16 lg:py-20 px-4 sm:px-8 md:px-20 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white">
          <div
            className="col-span-1 border-white flex justify-center items-center bg-black md:bg-cover md:bg-center md:bg-black"
            style={{
              backgroundImage: window.innerWidth >= 768 ? `url(${union})` : "none",
            }}
          >
            <img
              src={component_1}
              alt="blockchain"
            />
          </div>
          <div className="col-span-1 py-6 px-6 sm:py-8 sm:px-12 md:py-10 md:px-16 lg:py-10 lg:px-20 content-center tracking-widest">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold pb-4 sm:pb-6 md:pb-8 text-wrap leading-relaxed">
              we prioritize your needs, working tirelessly to enhance your quality of
              life through cutting-edge solutions. With a passion for excellence and
              unwavering integrity, we forge trustworthy partnerships with our valued
              clients. Join us to achieve the impossible together!
            </p>
          </div>
        </div>
        <img
          src={target}
          alt="mesh"
          className="hidden lg:block w-32 sm:w-40 md:w-48 lg:w-fit h-auto relative -top-20 sm:-top-24 md:-top-32 left-20 sm:left-40 md:left-64 lg:left-[32rem] active:animate-bounce"
        />
      </div>

      {/* section-2 */}

      {/* section-3 */}
      <div className="bg-[#17181D] text-white flex flex-col justify-center items-center py-10 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-20 lg:x-36 ">

        <div className="bg-[#17181D] text-white pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Section */}
            <div className="col-span-1 py-8 md:py-16 px-8 md:px-16 lg:px-28 border border-white flex flex-col justify-center items-start">
              <h1 className="font-heading pb-4 md:pb-8 text-3xl md:text-4xl lg:text-5xl text-start">
                Pioneering Blockchain Technology
              </h1>
              <button className="mt-4 md:mt-8 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                REQUEST A PROJECT
              </button>
            </div>

            {/* Right Section */}
            <div className="col-span-2 border border-white">
              <div className="grid grid-rows-2 ">
                {/* First Row */}
                {/* <div className="">
                </div> */}
                  <div className=" row-span-1 grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 py-8 md:py-8 px-8 md:px-8 lg:px-16 border-b md:border-r border-white content-center">
                      <img
                        src={section3_1}
                        alt="Secure"
                        className="w-30 md:w-30 h-30 md:h-30 pb-6 md:pb-10"
                      />
                      <h1 className="font-heading pb-4 md:pb-8 text-xl md:text-2xl text-start font-semibold">
                        Unmatched Security
                      </h1>
                      <p className="text-base md:text-lg">
                        We prioritize the safety of your digital assets with cutting-edge
                        security protocols, ensuring your peace of mind in this
                        ever-evolving digital landscape.
                      </p>
                    </div>
                    <div className="col-span-1 py-8 md:py-8 px-8 md:px-8 lg:px-16 border-b border-white contebt-center">
                      <img
                        src={section3_2}
                        alt="Secure"
                        className="w-30 md:w-30 h-30 md:h-30 pb-6 md:pb-10"
                      />
                      <h1 className="font-heading pb-4 md:pb-8 text-xl md:text-2xl text-start font-semibold">
                        Future-Proof Technology
                      </h1>
                      <p className="text-base md:text-lg">
                        Our commitment to staying ahead of the curve guarantees that our
                        solutions are equipped to adapt and thrive in the rapidly
                        changing technological landscape.
                      </p>
                    </div>
                  </div>

                {/* Second Row */}
                {/* <div className="">
                </div> */}
                  <div className=" row-span-1 grid grid-cols-1 md:grid-cols-2">
                    <div className=" content-center col-span-1 py-8 md:py-8 px-8 md:px-8 lg:px-16 md:border-r sm:border-b border-white">
                      <img
                        src={section3_3}
                        alt="Secure"
                        className="w-30 md:w-30 h-30 md:h-30 pb-6 md:pb-10"
                      />
                      <h1 className="font-heading pb-4 md:pb-8 text-xl md:text-2xl text-start font-semibold">
                        Tailored for Success
                      </h1>
                      <p className="text-base md:text-lg">
                        Every solution we craft is meticulously customized to meet your
                        specific needs, ensuring seamless integration and optimal
                        performance.
                      </p>
                    </div>
                    <div className=" content-center col-span-1 py-8 md:py-8 px-8 md:px-8 lg:px-16">
                      <img
                        src={section3_4}
                        alt="Secure"
                        className="w-30 md:w-30 h-30 md:h-30 pb-6 md:pb-10"
                      />
                      <h1 className="font-heading pb-4 md:pb-8 text-xl md:text-2xl text-start font-semibold">
                        Global Reach, Personal Touch
                      </h1>
                      <p className="text-base md:text-lg">
                        We serve clients worldwide, yet maintain a personalized approach
                        that nurtures strong, lasting partnerships.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}

      {/* section-4 */}

      <div className="bg-[#17181D] text-white flex flex-col justify-center items-center sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white gap-6 md:gap-0">
          <div className="col-span-1 py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-20 content-center tracking-widest">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold pb-4 sm:pb-6 md:pb-8 leading-relaxed text-start md:text-right">
              we proudly embrace diversity as a multicultural corporate. Our team,
              comprised of talents from various backgrounds and cultures, fosters an
              inclusive environment that enriches our perspectives and fuels
              creativity in delivering top-notch solutions for our global clients.
            </p>
          </div>
          <div
            className="col-span-1 flex items-center justify-center bg-black md:bg-cover md:bg-center md:bg-black"
            style={{
              backgroundImage: window.innerWidth >= 768 ? `url(${union})` : "none",
            }}
          >

            <img
              src={component_1}
              alt="blockchain"
            />
          </div>
        </div>
        <img
          src={hands}
          alt="hands"
          className="hidden lg:block w-32 sm:w-40 md:w-48 lg:w-50 h-auto relative -top-20 sm:-top-24 md:-top-32 left-20 sm:left-40 md:left-64 lg:left-[-32rem] -rotate-12"
        />
      </div>

      {/* section-4 */}

      {/* section-5 */}
      <div className="bg-[#17181D] text-white flex flex-col justify-center items-center py-10 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-20 lg:x-36">

        <div className="bg-[#17181D] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Column */}
            <div className="col-span-1 py-8 sm:py-12 lg:py-16 px-6 sm:px-16 lg:px-28 border border-white flex flex-col justify-center items-start">
              <h1 className="font-heading pb-4 sm:pb-6 lg:pb-8 text-2xl sm:text-3xl lg:text-5xl text-start">
                Embark on an Exciting Journey into the Future of Technology
              </h1>
              <button className="mt-4 sm:mt-6 lg:mt-8 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                REQUEST A PROJECT
              </button>
            </div>

            {/* Right Column */}
            <div className="col-span-1 lg:col-span-2 border border-white">
              <div className="grid grid-rows-2 justify-center items-center">
                {/* Top Row */}
                <div className="row-span-1 border-b border-white">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 py-8 sm:py-12 lg:py-16 px-8 sm:px-12 lg:px-16 border-b md:border-b-0 md:border-r border-white">
                      <h1 className="font-heading pb-4 sm:pb-6 lg:pb-8 text-xl sm:text-2xl lg:text-3xl text-start font-semibold">
                        What we do
                      </h1>
                      <p className="text-wrap text-sm sm:text-base lg:text-lg justify-start">
                        We specialize in cutting-edge technologies, focusing on
                        Blockchain, Data Engineering, and Artificial Intelligence. Our
                        mission is to empower businesses and individuals with secure and
                        innovative solutions, driving progress and connectivity in the
                        modern world.
                      </p>
                    </div>
                    <div className="col-span-1 py-8 sm:py-12 lg:py-16 px-8 sm:px-12 lg:px-16">
                      <h1 className="font-heading pb-4 sm:pb-6 lg:pb-8 text-xl sm:text-2xl lg:text-3xl text-start font-semibold">
                        Why we do
                      </h1>
                      <p className="text-wrap text-sm sm:text-base lg:text-lg justify-start">
                        Our passion lies in driving innovation and making a positive
                        impact on people's lives. By delivering bespoke, high-quality
                        solutions, we build trustworthy partnerships with our clients,
                        fostering success and contributing to a brighter, more
                        interconnected future.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="row-span-1 py-8 sm:py-12 lg:py-16 px-8 sm:px-12 lg:px-16 text-sm sm:text-base lg:text-xl">
                  <h1 className="font-heading pb-4 sm:pb-6 lg:pb-8 text-xl sm:text-2xl lg:text-3xl text-start font-semibold">
                    How we do
                  </h1>
                  <p>
                    We leverage our expert talent and innovation-driven approach to
                    provide cutting-edge solutions in Blockchain, Data Engineering, and
                    AI. Through tailored services and rigorous quality control, we
                    empower clients for success in a rapidly evolving world. Our agile
                    project management ensures efficient delivery, driving progress and
                    connectivity in the modern technological landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-5 */}

      {/* Repeating heading */}
      <div className="relative overflow-hidden bg-white py-1">
        <div className="animate-marquee whitespace-nowrap text-sm text-center text-gray-800">
          {Array(16)
            .fill("Our Office Space")
            .map((text, index) => (
              <React.Fragment key={index}>
                {text}
                {index < 15 && <span className="mx-8">|</span>}{" "}
                {/* Separator */}
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* Office Images */}
      <div className="bg-[#17181D] text-white flex flex-col justify-center items-center  ">

        <div className="bg-[#17181D] pt-8 pb-20 relative min-h-auto overflow-hidden">
          {/* Background image container */}
          <div
            className="relative w-full min-h-full mb-4 bg-cover bg-center"
            style={{
              backgroundImage: window.innerWidth >= 768 ? `url(${union})` : "none",
            }}
          >
            {/* Image grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 relative top-6 sm:p-4 md:p-4 w-full z-10">
              {/* Example images */}
              <img
                src={component_1}
                alt="Office Space 1"
                className="w-full sm:w-72 md:w-80 h-60 sm:h-80 md:h-96 object-cover"
              />
              <img
                src={component_2}
                alt="Office Space 2"
                className="w-full sm:w-72 md:w-80 h-60 sm:h-80 md:h-96 object-cover grayscale"
                onMouseEnter={(e) => e.target.classList.remove("grayscale")}
              />
              <img
                src={component_3}
                alt="Office Space 3"
                className="w-full sm:w-72 md:w-80 h-60 sm:h-80 md:h-96 object-cover"
              />
              <img
                src={component_4}
                alt="Office Space 4"
                className="w-full sm:w-72 md:w-80 h-60 sm:h-80 md:h-96 object-cover grayscale"
                onMouseEnter={(e) => e.target.classList.remove("grayscale")}
              />
              <img
                src={component_5}
                alt="Office Space 5"
                className="w-full sm:w-72 md:w-80 h-60 sm:h-80 md:h-96 object-cover"
              />
              <img
                src={component_6}
                alt="Office Space 6"
                className="w-full sm:w-72 md:w-80 h-60 sm:h-80 md:h-96 object-cover grayscale"
                onMouseEnter={(e) => e.target.classList.remove("grayscale")}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Homepage;
