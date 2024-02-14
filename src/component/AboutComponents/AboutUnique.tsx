import React, { useState } from "react";
import { useEffect } from "react";
import { makesUsUnique } from "../../utils/makesUsUnique";

const AboutUnique = () => {
  const [toggle, setToggle] = useState<number>(0);
  console.log(toggle);

  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(makesUsUnique[toggle]);
  }, [toggle]);
  return (
    <div className="max-lg:mx-4 lg:mx-12 flex flex-col lg:flex-row lg:max-w-[1200px] mt-20">
      <div className=" w-full flex flex-col items-start">
        <div>
          <h2 className="text-center text-black text-4xl mb-4">
            What makes us different?
          </h2>
        </div>
        <div className=" flex justify-between w-3/5">
          <div className="cursor-pointer" onClick={() => setToggle(0)}>
            OUR ADVANTAGES
          </div>
          <div className="cursor-pointer" onClick={() => setToggle(1)}>
            CENTER OF EXCELENCE
          </div>
        </div>
        <div className="w-full mt-5 lg:max-w-lg border-t-2">
          {content?.map((item) => (
            <div>
              <div>
                <h2 className="text-3xl mb-5 text-orange-300">{item.title}</h2>
              </div>
              <div className="mb-4">
                <p className="text-justify">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[1000px] lg:h-[627px]">
        <img
          src="https://www.dalloltech.com/assets/front/img/features-2.png"
          alt="pic-2"
        />
      </div>
    </div>
  );
};

export default AboutUnique;
