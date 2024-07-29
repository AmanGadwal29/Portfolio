import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="">
        <div className="bgClr text-white px-6 sm:px-16">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                  onClick={toggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                {isDropdownOpen && (
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-zinc-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a onClick={() => scrollToSection("home")}>Home</a>
                    </li>
                    <li>
                      <a onClick={() => scrollToSection("about")}>About</a>
                    </li>
                    <li>
                      <a onClick={() => scrollToSection("projects")}>Project</a>
                    </li>
                    <li>
                      <a onClick={() => scrollToSection("contact")}>Contact</a>
                    </li>
                  </ul>
                )}
              </div>
              <div className="btn btn-ghost text-xl">
                <img
                  className="w-full h-full object-cover"
                  src="/images/logo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="navbar-center hidden lg:flex  ">
              <ul className=" flex gap-12 text-xl menu menu-horizontal px-1">
                <li>
                  <a
                    onClick={() => scrollToSection("home")}
                    className="hover:text-orange-300 duration-150"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("about")}
                    className="hover:text-orange-300 duration-150"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("projects")}
                    className="hover:text-orange-300 duration-150"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-orange-300 duration-150"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
