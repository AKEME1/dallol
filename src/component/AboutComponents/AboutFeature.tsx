import React from "react";

const AboutFeature = () => {
  return (
    <>
      <div className="my-9">
        <h1 className="text-center text-orange-300 text-3xl">Our feature</h1>
      </div>

      <div className="max-lg:mx-4 lg:mx-12 flex flex-col lg:flex-row lg:max-w-[1200px]    mt-3">
        <div className="flex flex-col py-8 px-8 max-lg:mb-6  border  items-center">
          <div className="py-8 px-14">
            <img
              src="https://www.dalloltech.com/assets/front/img/values-1.png"
              alt="about_pic"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-2xl text-center text-orange-300">
              High turnover / profit <br /> maximization
            </h2>
          </div>
          <div className="w-4/5">
            <p className="text-center">
              By providing new and innovative technologies, Dallol Tech will
              lead your company to higher profits.
            </p>
          </div>
        </div>

        <div className="flex flex-col py-8 px-8 max-lg:mb-6 lg:ml-6  border  items-center">
          <div className="py-8 px-14">
            <img
              src="https://www.dalloltech.com/assets/front/img/values-2.png"
              alt="about_pic"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-2xl text-orange-300">Sales will increase</h2>
          </div>
          <div className="w-4/5">
            <p className="text-center">
              By providing new and innovative technologies, Dallol Tech will
              lead your company to higher profits.
            </p>
          </div>
        </div>

        <div className="flex flex-col py-8 px-8 lg:ml-6  border  items-center">
          <div className="py-8 px-14">
            <img
              src="https://www.dalloltech.com/assets/front/img/values-3.png"
              alt="about_pic"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-2xl text-orange-300">Team work</h2>
          </div>
          <div className="w-4/5">
            <p className="text-center">
              By providing new and innovative technologies, Dallol Tech will
              lead your company to higher profits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFeature;
