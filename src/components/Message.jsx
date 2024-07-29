import React from "react";

const Message = () => {
  return (
    <>
      <div>
        <span className=" block w-full border-t-4 border-orange-300 "></span>
        <div className="bg-zinc-800 text-white ">
          <div className="flex flex-col md:flex-row pb-16 sm:pt-16 justify-between ">
            <div className="px-6 lg:px-32 pt-10 md:w-3/5">
              {" "}
              <h1 className=" mb-12 text-4xl sm:text-5xl">
                Focused on Front End Excellence
              </h1>
              <p className="sm:text-xl">
                <span className="inline-block w-20 h-2 mr-4  border-t-4 border-orange-300"></span>
                With the solid foundation in Front End Development uou can count
                on my unwavering dedication to achieving excellence. With a
                solid foundation in Front End development and a track record of
                creating impactful user interfaces, I am committed to delivering
                high-quality work tailored to your needs. My approach combines
                attention to detail, a passion for innovation, and a strong work
                ethic. I’m eager to bring my skills to your team, tackle
                challenges head-on, and contribute to the success of your
                projects.
              </p>
            </div>
            <div className=" md:w-2/5  ">
              <img src="/images/11.png" alt="" />
            </div>
          </div>
        </div>
        <span className=" block w-full border-t-4 border-orange-300 "></span>
      </div>
    </>
  );
};

export default Message;
