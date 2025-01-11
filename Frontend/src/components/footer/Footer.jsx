import React from 'react'
import image from '../../assets/footer.png'
import image2 from '../../assets/footer_2.png'

function Footer() {
  return (
    <>


      <div class="bg-gradient-to-r from-[#194266] to-[#235C85] text-white pb-4 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-center sm:pt-10 sm:pb-16 md:pt-10 md:pb-16  text-center">
          <div className="md:col-span-3 relative h-40 md:h-80 overflow-x-clip">
            <img
              src={image}
              alt="image"
              className="w-32 h-32 md:w-48 md:h-48 absolute bottom-[-30px] md:bottom-[-60px] right-[-10px] md:right-[-20px] "
            />
          </div>

          <div className="md:col-span-6 px-4">
            <h1 className="text-3xl md:text-5xl font-bold font-heading">
              Let&apos;s <span className="text-gray-400">work</span> together!
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg max-w-full md:max-w-3xl pt-4 md:pt-5 font-para">
              Take the first step towards a transformative future by partnering with us today. Explore our cutting-edge solutions in Blockchain, Data Engineering, and AI, and experience the power of innovation and seamless connectivity. Contact us now for a personalized consultation, and together, let&apos;s build a brighter tomorrow. Your success awaits!
            </p>
            <button className="mt-6 md:mt-8 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              REQUEST A PROJECT
            </button>
          </div>

          <div className="md:col-span-3 relative h-40 md:h-80">
            <img
              src={image2}
              alt="image"
              className="w-32 h-32 md:w-48 md:h-48 absolute top-[-40px] md:top-[-70px] left-[20px] md:left-[-20px]"
            />
          </div>
        </div>



        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 border border-white mt-10">

          {/* <!-- Logo and About Section --> */}
          <div className="col-span-1 border-r border-white px-6 md:px-[117px] py-[20px]">
            <div className="mb-4">
              <div className="bg-gray-700 h-16 w-16 flex items-center justify-center">
                {/* <!-- Placeholder for logo --> */}
                <span className="text-white">Logo</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur. Duis sollicitudin magna eget velit volutpat consectetur ac. Mattis fermentum etiam sit non. Duis dictumst libero senectus quis mauris elit integer. Sed massa vel elit duis at.
              Sit auctor magna lacinia sed viverra odio ultrices accumsan. Fringilla consectetur massa odio morbi vestibulum. Lectus pharetra amet imperdiet quis blandit odio dapibus netus magnis. Aliquam egestas ultrices nunc auctor eu nibh senectus. Dictum orci libero tortor cras venenatis semper scelerisque egestas porttitor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 md:grid-rows-12 col-span-2 w-full border border-white ">
            <div className="grid grid-cols-6 row-span-2 justify-center items-center ">
              {/* Quick links horizontally */}
              <a href="/" className="text-white text-xs md:text-sm font-semibold col-span-1 text-center border-r border-white px-5 py-5">
                Home
              </a>
              <a href="/about-us" className="text-white text-xs md:text-sm font-semibold col-span-1 text-center border-r border-white px-5 py-5">
                About
              </a>
              <a href="/projects" className="text-white text-xs md:text-sm font-semibold col-span-1 text-center border-r border-white px-5 py-5">
                Projects
              </a>
              <a href="/blogs" className="text-white text-xs md:text-sm font-semibold col-span-1 text-center border-r border-white px-5 py-5">
                Blogs
              </a>
              <a href="/careers" className="text-white text-xs md:text-sm font-semibold col-span-1 text-center border-r border-white px-5 py-5">
                Careers
              </a>
              <a href="/contact-us" className="text-white text-xs md:text-sm font-semibold col-span-1 text-center border-r border-white px-5 py-5">
                Contact
              </a>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 row-span-10 ">
              <div className="grid grid-rows-3 col-span-1 justify-start items-start md:border-r border-t border-white ">
                {/* Logo and Head Office */}
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="32" fill="#232428" />
                    <path d="M36.6745 36.5C39.654 31.8246 39.2795 32.4079 39.3653 32.286C40.4501 30.7559 41.0234 28.9551 41.0234 27.0781C41.0234 22.1005 36.9842 18 32 18C27.0321 18 22.9766 22.0924 22.9766 27.0781C22.9766 28.9539 23.5619 30.8019 24.6823 32.3525L27.3254 36.5C24.4994 36.9343 19.6953 38.2285 19.6953 41.0781C19.6953 42.1169 20.3733 43.5973 23.6034 44.7509C25.8588 45.5564 28.8408 46 32 46C37.9076 46 44.3047 44.3336 44.3047 41.0781C44.3047 38.228 39.5062 36.9352 36.6745 36.5ZM26.0527 31.4501C26.0437 31.436 26.0342 31.4222 26.0244 31.4087C25.0921 30.1261 24.6172 28.6061 24.6172 27.0781C24.6172 22.9756 27.9206 19.6406 32 19.6406C36.0709 19.6406 39.3828 22.9771 39.3828 27.0781C39.3828 28.6086 38.9168 30.077 38.035 31.3258C37.956 31.43 38.3682 30.7895 32 40.7822L26.0527 31.4501ZM32 44.3594C25.5472 44.3594 21.3359 42.4626 21.3359 41.0781C21.3359 40.1476 23.4998 38.6175 28.2948 38.021L31.3082 42.7495C31.4588 42.9858 31.7197 43.1289 31.9999 43.1289C32.2802 43.1289 32.5411 42.9858 32.6917 42.7495L35.705 38.021C40.5001 38.6175 42.6641 40.1476 42.6641 41.0781C42.6641 42.4509 38.4907 44.3594 32 44.3594Z" fill="white" />
                    <path d="M32 22.9766C29.7384 22.9766 27.8984 24.8165 27.8984 27.0781C27.8984 29.3397 29.7384 31.1797 32 31.1797C34.2616 31.1797 36.1016 29.3397 36.1016 27.0781C36.1016 24.8165 34.2616 22.9766 32 22.9766ZM32 29.5391C30.643 29.5391 29.5391 28.4351 29.5391 27.0781C29.5391 25.7212 30.643 24.6172 32 24.6172C33.357 24.6172 34.4609 25.7212 34.4609 27.0781C34.4609 28.4351 33.357 29.5391 32 29.5391Z" fill="white" />
                  </svg>
                </div>
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  <h1 className="text-greyCustom text-xl md:text-2xl font-semibold">Our Head Office</h1>
                </div>
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  <p className="text-greyCustom text-sm md:text-base font-semibold">1234 Street Name, City Name, Country Name</p>
                </div>
              </div>

              <div className="grid grid-rows-3 col-span-1 justify-start items-start border border-white ">
                {/* Contact Us */}
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.666504" width="64" height="64" rx="32" fill="#232428" />
                    <g clip-path="url(#clip0_1_4335)">
                      <path d="M43.451 39.1254L39.3668 35.0412C38.5166 34.1911 37.1382 34.1901 36.2871 35.0412L35.0977 36.2306C32.3799 34.5709 30.0966 32.2876 28.4369 29.5698L29.741 28.2657C30.59 27.4166 30.59 26.035 29.741 25.1859L25.6568 21.1018C24.8091 20.2541 23.4326 20.2462 22.5746 21.1043L20.0081 23.6908C18.7801 24.7218 18.3482 26.4148 18.9082 28.0192C21.7818 36.2539 28.4137 42.8857 36.6483 45.7593C38.1976 46.2998 39.7886 45.8956 40.8001 44.8534C40.8147 44.8405 40.829 44.8272 40.8429 44.8132L43.451 42.2051C44.3001 41.356 44.3001 39.9745 43.451 39.1254ZM42.15 40.904L39.6009 43.4531C39.5698 43.4789 39.5403 43.507 39.5127 43.5371C38.9761 44.1203 38.113 44.3217 37.2546 44.022C29.5449 41.3316 23.3359 35.1226 20.6455 27.4129C20.3375 26.5301 20.5597 25.6156 21.2118 25.0829C21.2365 25.0627 21.2603 25.0411 21.2828 25.0184L23.8782 22.4028C23.9642 22.3167 24.0648 22.3038 24.117 22.3038C24.1693 22.3038 24.2698 22.3166 24.3559 22.4028L28.4399 26.4869C28.5716 26.6186 28.5716 26.8328 28.44 26.9645L26.6329 28.7716C26.3409 29.0636 26.2792 29.5144 26.4821 29.8741C28.4431 33.3506 31.317 36.2245 34.7934 38.1854C35.1531 38.3883 35.6039 38.3266 35.896 38.0346L37.5883 36.3423C37.72 36.2105 37.9339 36.2104 38.0659 36.3423L42.15 40.4265C42.2816 40.5581 42.2816 40.7724 42.15 40.904Z" fill="white" />
                      <path d="M33.3722 25.1821C32.8641 25.1821 32.4521 25.594 32.4521 26.1021C32.4521 26.6102 32.864 27.0221 33.3722 27.0221C35.7284 27.0221 37.6454 28.9391 37.6454 31.2954C37.6454 31.8035 38.0573 32.2154 38.5654 32.2154C39.0735 32.2154 39.4854 31.8035 39.4854 31.2954C39.4854 27.9245 36.743 25.1821 33.3722 25.1821Z" fill="white" />
                      <path d="M33.3722 21.5713C32.8641 21.5713 32.4521 21.9832 32.4521 22.4913C32.4521 22.9994 32.864 23.4113 33.3722 23.4113C37.7195 23.4113 41.2563 26.9481 41.2563 31.2954C41.2563 31.8035 41.6682 32.2154 42.1763 32.2154C42.6844 32.2154 43.0963 31.8035 43.0963 31.2954C43.0963 25.9335 38.734 21.5713 33.3722 21.5713Z" fill="white" />
                      <path d="M42.7728 21.8948C40.2619 19.3838 36.9232 18.001 33.3722 18.001C32.8641 18.001 32.4521 18.4129 32.4521 18.921C32.4521 19.4291 32.8641 19.841 33.3722 19.841C39.6882 19.841 44.8267 24.9794 44.8267 31.2955C44.8267 31.8036 45.2386 32.2155 45.7467 32.2155C46.2548 32.2155 46.6667 31.8036 46.6667 31.2955C46.6666 27.7443 45.2838 24.4058 42.7728 21.8948Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4335">
                        <rect width="28" height="28" fill="white" transform="translate(18.6665 18)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  <h1 className="text-greyCustom text-xl md:text-2xl font-semibold">Contact Us</h1>
                </div>
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  <p className="text-greyCustom text-sm md:text-base font-semibold">123456789</p>
                </div>
              </div>

              <div className="grid grid-rows-3 col-span-1 justify-start items-start border border-white">
                {/* Mail Us */}
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  {/* Add SVG here */}
                  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.333496" width="64" height="64" rx="32" fill="#232428" />
                    <g clip-path="url(#clip0_1_4354)">
                      <path d="M46.0618 18.63C46.0139 18.5633 45.9612 18.502 45.9046 18.4446C45.902 18.4418 45.8999 18.4388 45.8971 18.4362C45.8947 18.4339 45.892 18.4317 45.8896 18.4294C45.5728 18.1158 45.1321 17.9453 44.622 17.9453C44.3325 17.9453 44.0217 18 43.6985 18.1079L19.9036 26.0393C18.6447 26.4591 18.4153 27.1918 18.3907 27.5911C18.3659 27.9905 18.5033 28.7459 19.7004 29.3176L25.6755 32.1711L23.0016 38.774C22.9949 38.7901 22.989 38.8063 22.9836 38.8225C22.6865 39.714 22.8061 40.5155 23.3122 41.0213C23.6354 41.3446 24.0791 41.5101 24.5899 41.5101C24.8787 41.5101 25.1889 41.4571 25.5108 41.3499C25.5272 41.3443 25.5433 41.3386 25.5593 41.332L32.1624 38.658L35.0157 44.6329C35.5611 45.7747 36.28 45.9454 36.66 45.9454C36.9995 45.9454 37.8381 45.7975 38.294 44.4297L46.2256 20.6348C46.4869 19.851 46.4288 19.139 46.0618 18.63ZM20.1649 27.7011C20.2298 27.6682 20.3148 27.6319 20.4225 27.596L43.1548 20.0183L30.3299 32.8434C29.8621 32.4499 29.3729 32.1188 28.9089 31.8973L20.4073 27.8369C20.305 27.788 20.2253 27.7417 20.1649 27.7011ZM24.9695 39.8009C24.6864 39.8917 24.526 39.8761 24.4747 39.8588C24.4574 39.8073 24.4418 39.6471 24.5326 39.3641L27.1587 32.8795L28.2018 33.3779C29.1947 33.8519 30.4814 35.1388 30.9556 36.1315L31.454 37.1748L24.9695 39.8009ZM36.7376 43.911C36.7017 44.0189 36.6653 44.1037 36.6324 44.1687C36.5916 44.1082 36.5451 44.0285 36.4962 43.9258L32.436 35.4244C32.2145 34.9604 31.8834 34.4714 31.4899 34.0034L44.3152 21.1783L36.7376 43.911Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4354">
                        <rect width="28" height="28" fill="white" transform="translate(18.3335 18)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  <h1 className="text-greyCustom text-xl md:text-2xl font-semibold">Mail Us</h1>
                </div>
                <div className="flex ps-4 pt-4 row-span-1 mx-10">
                  <p className="text-greyCustom text-sm md:text-base font-semibold">mahidashailyaraj@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////// */}

      </div>
      {/* <!-- Footer Bottom --> */}
      <div class="pt-3 text-start  text-gray-400 text-sm bg-gradient-to-r from-[#194266] to-[#235C85]">
        <p>Copyright © {
          new Date().getFullYear()
          }. All rights reserved by Shailyarajsinh J Mahida</p>
      </div>
    </>
  )
}

export default Footer