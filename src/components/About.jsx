import React from "react";
import cardList from "./cardList.json";
import projectList from "./projectList.json";
import Card from "./Card";
import ProjectCard from "./ProjectCard";

const About = () => {
  return (
    <>
      <div id="about" className="bgClr2 text-white innerShadow ">
        <div className=" pt-16 pb-16 sm:pb-32">
          <div className="mx-6 sm:mx-12 lg:mx-32">
            <h1 className="text-5xl sm:text-6xl font-bold">About</h1>
            <p className="text-xl sm:text-2xl mt-8 sm:mt-12">
              <span className="inline-block w-20 h-2 border-t-2 border-orange-300"></span>{" "}
              Hi, I'm Aman, currently working as a{" "}
              <span className="text-orange-300">
                Frontend Developer (Junior MERN Stack Developer)
              </span>{" "}
              with a strong foundation in building scalable and user-friendly
              web applications. I have also completed{" "}
              <span className="text-orange-300">
                professional training in MERN Stack from JSpiders Institute,
              </span>{" "}
              which strengthened my skills across both frontend and backend
              development. I specialize in{" "}
              <span className="text-orange-300">
                MongoDB, Express.js, React.js, and Node.js,
              </span>{" "}
              along with core frontend technologies like{" "}
              <span className="text-orange-300">
                HTML, CSS, JavaScript, and Tailwind CSS.
              </span>{" "}
              With hands-on experience, I’m passionate about turning ideas into
              clean, efficient, and responsive digital solutions. I also have a
              creative edge with skills in photo and video editing, allowing me
              to craft visually engaging user experiences that go beyond code.
              Driven by curiosity and a love for problem-solving, I’m always
              eager to learn, collaborate, and take on new challenges that push
              the boundaries of what I can build.
            </p>
          </div>

          <div className=" pt-16 sm:pt-24  flex flex-col items-center ">
            <h1 className="text-6xl font-bold text-orange-300">My skills</h1>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {cardList.map((data) => (
                  <Card data={data}></Card>
                ))}
              </div>
              {/* <div className="flex justify-center gap-8 mt-8">
                {cardList.slice(8).map((data) => (
                  <Card data={data}></Card>
                ))}
              </div> */}
            </div>
            <div id="projects">
              <h1 className="text-6xl font-bold mt-16 sm:mt-32 text-center ">
                Projects
              </h1>
              <div className=" mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {projectList.map((data) => (
                  <ProjectCard data={data}></ProjectCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
