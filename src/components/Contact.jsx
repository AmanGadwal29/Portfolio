import React from "react";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div id="contact" className="bg-zinc-600 innerShadow">
        <div className="flex flex-col gap-6 py-12  ">
          <h1 className="text-5xl text-center text-white font-bold">
            Contact me
          </h1>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center ">
            <div className="px-3 text-xl flex gap-4 items-center contactBox text-white">
              <IoMail className="mt-1" />
              <p className="text-orange-300">amangadwal001@gmail.com</p>
            </div>
            <div className="px-3 text-xl flex gap-4 items-center contactBox text-white">
              <IoCall />
              <p className="text-orange-300">91-9015106615</p>
            </div>
          </div>
          <div className=" flex text-white justify-center text-3xl gap-10">
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
    </>
  );
};

export default Contact;
