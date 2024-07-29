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

          <div className="mt-12 gap-6 flex flex-col sm:flex-row sm:gap-6 md:gap-12">
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
                DevSpark (1 june 2023 - 31 july 2023)
              </p>
              <p className="  sm:text-2xl">
                Played a key role in frontend development projects, leveraging
                technologies like HTML, CSS, JavaScript, and Bootstrap to create
                visually appealing and functional user interfaces. Focused on
                enhancing the user experience by designing responsive and
                interactive layouts that work seamlessly across different
                platforms and devices. This involved collaborating closely with
                design teams to translate visual concepts into code, ensuring
                consistency with branding guidelines, and optimizing the user
                interface for accessibility and performance. Contributed to the
                development process by implementing best practices in code
                structure and modularity, making the codebase easier to maintain
                and scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
