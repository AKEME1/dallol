import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import menu from "../assets/menu.png";
import close from "../assets/cross.png";
const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [active, setIsActive] = useState<string>("Home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5; // Change the scroll threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <section
      className={`${
        scrolled ? "bg-black" : "bg-white"
      } py-4 px-4 w-full fixed top-0 z-10`}
    >
      <nav className=" max-w-[1200px] mx-auto flex justify-between items-center">
        {/* logo part */}

        <div className="w-32">
          <img
            className="w-full"
            src="https://www.dalloltech.com/assets/front/img/dalloltech_logo.png"
            alt="dalloltech_logo"
          />
        </div>

        {/* navigation content */}

        <div className="lg:block hidden w-full">
          <div className="flex justify-evenly">
            {[
              "Home",
              "About Us",
              "Services",
              "Industries",
              "Portfolio",
              "Testimonial",
              "Contact Us",
            ].map((item) => (
              <div onClick={() => setIsActive(item)} key={item}>
                <ul>
                  <li
                    className={`cursor-pointer hover:text-gray-400 ${
                      item === active ? "text-gray-400" : "text-orange-300"
                    }`}
                  >
                    <a href={`#${item}`}> {item}</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* close and menu part */}
        <div className="hidden max-lg:block ">
          {toggle ? (
            <div
              className="w-8 cursor-pointer bg-orange-400"
              onClick={() => setToggle(false)}
            >
              <img src={close} alt="close" />
            </div>
          ) : (
            <div
              onClick={() => setToggle(true)}
              className="w-8 cursor-pointer bg-orange-400"
            >
              <img src={menu} alt="menu_logo" />
            </div>
          )}
        </div>
        {/* selector part */}
        <div className="w-48 lg:block hidden">
          <select
            className="w-full p-3 rounded-md outline-orange-400"
            id="language"
            name="language"
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="japanese">Japanese</option>
          </select>
        </div>
      </nav>
      {toggle && (
        <div className="absolute top-20 right-3  left-3 w-auto h-72 p-4 rounded-md max-lg:block hidden bg-slate-900">
          <div className="max-lg:block hidden w-full">
            <div className="flex flex-col justify-evenly mb-20">
              {[
                "Home",
                "About Us",
                "Services",
                "Industries",
                "Portfolio",
                "Testimonial",
                "Contact Us",
              ].map((item) => (
                <div onClick={() => setIsActive(item)} key={item}>
                  <ul>
                    <li
                      className={`cursor-pointer hover:text-gray-400 ${
                        item === active ? "text-gray-400" : "text-orange-300"
                      }`}
                    >
                      <a href={`#${item}`}> {item}</a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavBar;
