import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ data }) => {
  return (
    <div>
      <div className="box">
        <img src={data.img} alt="" />
        <div className="overlay">
          <h1>{data.title}</h1>
          <p>{data.discription}</p>
          <a href={data.link} target="_blank">
            <FaExternalLinkAlt className="text-2xl mt-6" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
