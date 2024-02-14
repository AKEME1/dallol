import React from "react";
import { listOfAreas } from "../../utils/listOfAreas";
import { link } from "fs";
const AboutWorkingWith = () => {
  return (
    <>
      <div className="my-9">
        <h1 className="text-center  text-black text-3xl">
          Who are we Working With?
        </h1>
      </div>

      <div className="max-lg:mx-4 max-lg:items-center lg:mx-12 flex flex-col lg:flex-row lg:max-w-[1200px] lg:justify-between    mt-3">
        <div className=" w-full lg:w-[600px] lg:h-289">
          <img
            className="w-full"
            src="https://www.dalloltech.com/assets/front/img/features.png"
            alt="pic-1"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {listOfAreas.map((item) => (
            <div className=" h-155px shadow-md lg:max-w-[216px] w-full  text-black px-6 py-5">
              <div className="flex justify-between items-center">
                <div className="w-12 mr-3">
                  <img className="w-full" src={item.icon} alt="" />
                </div>
                <div>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutWorkingWith;
