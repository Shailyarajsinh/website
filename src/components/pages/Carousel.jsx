import { Carousel } from "@material-tailwind/react";
import image_1 from '../../assets/about-us_1.png'
import image_2 from '../../assets/about-us_2.png'

// team images
import team_1 from '../../assets/team-1.png'
import team_2 from '../../assets/team-2.png'
import team_3 from '../../assets/team-3.png'
import team_4 from '../../assets/team-4.png'



export function CarouselWithContent() {
  return (
    <Carousel className="rounded-none">
      <div className="relative h-full w-full">
        <div className="grid grid-rows-2 ">
          {/* Top Row */}
          <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 border-b border-white">
            <div className="col-span-1">
              <img
                src={team_1}
                alt="Group-1"
                className="w-full h-full "
              />
            </div>
            <div className="col-span-1">
              <img
                src={team_2}
                alt="Group-1"
                className="w-full h-full "
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 border-b border-white">
            <div className="col-span-1">
              <img
                src={team_3}
                alt="Group-1"
                className="w-full h-full "
              />
            </div>
            <div className="col-span-1">
              <img
                src={team_4}
                alt="Group-1"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="grid grid-rows-2 ">
          {/* Top Row */}
          <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 border-b border-white">
            <div className="col-span-1">
              <img
                src={team_1}
                alt="Group-1"
                className="w-full h-full "
              />
            </div>
            <div className="col-span-1">
              {/* <img
                src={image_2}
                alt="Group-1"
                className="w-full h-full "
              /> */}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 border-b border-white">
            <div className="col-span-1">
              {/* <img
                src={image_1}
                alt="Group-1"
                className="w-full h-full "
              /> */}
            </div>
            <div className="col-span-1">
              {/* <img
                src={image_2}
                alt="Group-1"
                className="w-full h-full "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}