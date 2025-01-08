import React from 'react'

function NotFound() {

  const handleClick = () => {
    window.location.href = '/';
  }
  return (
    <>

      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 bg-[#17181D]">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="top-0 left-0 right-0 bottom-0 bg-[#17181D] bg-opacity-90 flex flex-col justify-center items-start p-8">
                <h1 className="my-2 text-white font-bold text-3xl">
                  Looks like you've found the
                  doorway to the great nothing
                </h1>
                <p className="my-2 text-white text-start">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <button onClick={handleClick} className=" m-2 mx-auto justify-center items-center  text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                  Home
                </button>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div className="bg-[#17181D]">
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" 
          
          className='bg-opacity-90"'
          />
        </div>
      </div>
    </>
  )
}

export default NotFound