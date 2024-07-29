import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div className="cardShadow h-44 w-36 lg:h-48 lg:w-44 bg-zinc-600 rounded-lg">
        <div className="m-3 h-2/3 flex justify-center items-center">
          <img className=" h-2/3 object-cover" src={data.img} alt="" />
        </div>
        <div className="flex justify-center">
          <h1 className="text-xl">{data.title}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
