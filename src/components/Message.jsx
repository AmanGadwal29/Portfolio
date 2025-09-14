import React from "react";

const Message = () => {
  return (
    <>
      <div>
        <span className=" block w-full border-t-4 border-orange-300 "></span>
        <div className="bg-zinc-800 text-white ">
          <div className="flex flex-col md:flex-row pb-16 sm:pt-16 justify-between ">
            <div className="px-6 lg:px-32 pt-10 md:w-3/5">
              <h1 className=" mb-12 text-4xl sm:text-5xl">
                Building Modern Frontend Experiences
              </h1>
              <p className="sm:text-xl">
                <span className="inline-block w-20 h-2 mr-4  border-t-4 border-orange-300"></span>
                Currently working as a{" "}
                <span className="text-orange-300">
                  Frontend Developer (Junior MERN Stack Developer)
                </span>{" "}
                at Kumudu Software Solution, I focus on delivering clean,
                scalable, and user-friendly interfaces. I have completed{" "}
                <span className="text-orange-300">
                  professional MERN Stack training at JSpiders Institute
                </span>{" "}
                which strengthened my full-stack skills. While I specialize in
                frontend development with React.js, Material-UI, and Tailwind
                CSS, I also have hands-on exposure to backend technologies like
                Node.js and Express.js. Passionate about creating responsive
                designs and smooth user flows, I’m eager to keep learning,
                improving, and contributing to impactful projects.
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
