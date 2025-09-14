import React from "react";
import { FaCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <div className=" bg-zinc-700 text-white">
        <div className=" mx-10 md:mx-16 lg:mx-32 py-10 sm:pt-20 sm:pb-20">
          <div className=" ">
            <h1 className=" inline text-4xl sm:text-6xl font-bold text-white">
              Experience
              <span className=" ml-2 sm:ml-6 inline-block w-1/5 sm:w-1/3 h-3 border-t-4 border-orange-300 "></span>
            </h1>
          </div>

          {/* KUMUDU SOFTWARE SOLUTION */}
          <div className="mt-12 gap-6 flex flex-col sm:flex-row sm:gap-6 md:gap-12">
            <div className="">
              <h1 className=" text-center cmnShadow text-xl font-bold px-4 py-1 rounded-full bg-zinc-600">
                2025
              </h1>
            </div>
            <div
              className=" hidden sm:flex gap-12
            flex-col items-center"
            >
              <FaCircle className="pngShadow text-orange-300" />
              <span className=" block w-0 h-full   border-2 border-white  "></span>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className=" text-3xl sm:text-4xl font-bold">
                Frontend Developer (Junior MERN Developer)
              </h1>
              <p className=" text-2xl sm:text-3xl text-orange-300">
                KUMUDU SOFTWARE SOLUTION (16 June 2025 - Present)
              </p>
              <ul className=" list-disc pl-6 sm:text-2xl space-y-2">
                <li>
                  Designed and developed complete UI for{" "}
                  <span className="text-orange-300">
                    Gold Saving Scheme App
                  </span>{" "}
                  using React.js and Material-UI, ensuring responsive design.
                </li>
                <li>
                  Integrated backend REST APIs for transactions, dashboards, and
                  scheme tracking with error handling and loading states.
                </li>
                <li>
                  Collaborated with backend team to implement secure
                  authentication flows and optimize API calls.
                </li>
                <li>
                  Built{" "}
                  <span className="text-orange-300">Ticketing Application</span>{" "}
                  (Customer & Internal) with React.js, Material-UI, and Figma,
                  integrating APIs for ticket creation, updates, and
                  notifications with real-time status rendering.
                </li>
                <li>
                  Will be working on{" "}
                  <span className="text-orange-300">
                    Jewellery E-commerce Project
                  </span>{" "}
                  involving product listing, filtering, cart, checkout, and
                  secure payment gateway integration.
                </li>
              </ul>
            </div>
          </div>

          {/* DevSpark Internship */}
          <div className="mt-20 gap-6 flex flex-col sm:flex-row sm:gap-6 md:gap-12">
            <div className="">
              <h1 className=" text-center cmnShadow text-xl font-bold px-4 py-1 rounded-full bg-zinc-600">
                2023
              </h1>
            </div>
            <div
              className=" hidden sm:flex gap-12
            flex-col items-center"
            >
              <FaCircle className="pngShadow text-orange-300" />
              <span className=" block w-0 h-full   border-2 border-white  "></span>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className=" text-3xl sm:text-4xl font-bold">
                Intern — Front End — UI developer
              </h1>
              <p className=" text-2xl sm:text-3xl text-orange-300">
                DevSpark (1 June 2023 - 31 July 2023)
              </p>
              <ul className=" list-disc pl-6 sm:text-2xl space-y-2">
                <li>
                  Built responsive UIs with HTML, CSS, JavaScript, and
                  Bootstrap.
                </li>
                <li>
                  Collaborated with design team to translate visual concepts
                  into code.
                </li>
                <li>
                  Ensured consistency with branding, accessibility, and
                  performance.
                </li>
                <li>
                  Designed interactive layouts for seamless cross-device
                  experience.
                </li>
                <li>
                  Applied best practices in modular code for easier maintenance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
