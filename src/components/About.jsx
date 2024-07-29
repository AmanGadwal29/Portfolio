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
          <div className=" mx-6 sm:mx-12 lg:mx-32">
            <h1 className=" text-5xl sm:text-6xl font-bold">About</h1>
            <p className=" text-xl sm:text-2xl mt-8 sm:mt-12">
              <span className="inline-block w-20 h-2 border-t-2 border-orange-300"></span>{" "}
              I'm Aman, a{" "}
              <span className="text-orange-300">React Developer</span> and
              student at the{" "}
              <span className="text-orange-300">
                National Institute of Technology,
              </span>{" "}
              Hamirpur. I specialize in{" "}
              <span className="text-orange-300">
                HTML, CSS, JavaScript, React.js, and MongoDB,
              </span>{" "}
              with additional skills in
              <span className="text-orange-300"> photo and video editing</span>.
              My passion for technology and problem-solving fuels my drive to
              create functional and visually engaging digital experiences.
              Always eager to learn and take on new challenges, I'm committed to
              delivering exceptional user experiences through both web
              development and multimedia content.
            </p>
          </div>
          <div className=" pt-16 sm:pt-24  flex flex-col items-center ">
            <h1 className="text-6xl font-bold text-orange-300">My skills</h1>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {cardList.slice(0, 8).map((data) => (
                  <Card data={data}></Card>
                ))}
              </div>
              <div className="flex justify-center gap-8 mt-8">
                {cardList.slice(8).map((data) => (
                  <Card data={data}></Card>
                ))}
              </div>
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
