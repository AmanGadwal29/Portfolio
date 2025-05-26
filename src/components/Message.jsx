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
                Focused on Full-Stack Excellence
              </h1>
              <p className="sm:text-xl">
                <span className="inline-block w-20 h-2 mr-4  border-t-4 border-orange-300"></span>
                With a solid foundation in MERN development, you can count on me
                for reliable and practical solutions. I have experience building
                both frontend and backend applications using MongoDB,
                Express.js, React.js, and Node.js, along with a strong
                understanding of creating user-friendly interfaces. I’m
                committed to delivering quality work, paying attention to
                detail, and continuously improving my skills. I look forward to
                contributing effectively to your projects and collaborating with
                the team.
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
