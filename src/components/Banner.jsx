import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <div className="bgClr ">
        <div>
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2">
            <div className=" order-2 sm:order-1 mt-8 sm:ml-16 lg:mt-32 flex flex-col items-center">
              <div className="">
                <h1 className="  text-xl sm:text-2xl text-white">
                  UI/UX Designer
                </h1>
                <p className=" text-3xl sm:text-4xl lg:text-6xl text-white ">
                  I'm{" "}
                  <span className=" text-4xl md:text-6xl lg:text-8xl font-bold text-orange-300 ">
                    Aman
                  </span>{" "}
                  <br />{" "}
                  <span className=" sm:text-2xl lg:text-6xl">
                    {" "}
                    A website developer
                  </span>
                </p>
                <a
                  className=" inline-block my-6 sm:mt-12  rounded-md text-orange-300 text-2xl border-4 px-4 py-3 border-orange-300 "
                  href="../../public/Aman.pdf"
                  download
                >
                  {" "}
                  Download CV{" "}
                </a>
              </div>
            </div>
            <div className=" order-1 sm:order-2 relative">
              <img
                className="imgShadow"
                src="../../public/images/1.png"
                alt=""
              />
              <div className="text-white absolute right-5 sm:right-10 lg:right-16 flex flex-col items-center gap-6 text-2xl sm:text-3xl sm:top-0 lg:top-20 top-2  ">
                <span className="w-0 h-16 sm:h-28 lg:h-56 border-2 border-amber-300"></span>
                <a
                  href="https://www.linkedin.com/in/aman-gadwal-126639214/"
                  target="_blank"
                >
                  <FaLinkedinIn className="hover:text-orange-300" />
                </a>
                <a
                  href="https://www.instagram.com/_aman_gadwal_/?hl=en"
                  target="_blank"
                >
                  <FaInstagram className="hover:text-orange-300" />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/20beevxfl/"
                  target="_blank"
                >
                  <SiGeeksforgeeks className="hover:text-orange-300" />
                </a>
                <a href="https://github.com/AmanGadwal29" target="_blank">
                  <FaGithub className="hover:text-orange-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
