import React from "react";

const HText = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="p-4 text-center text-5xl font-bold">Technologies</h1>
      {/* MOBILE WILL HAVE SIMPLE AND DESKTOP WILL HAVE 3D */}

      {/* WILL ADD THREE FIBER ANIMATIONS */}
      <div className="w-full text-center">
        <div className="flex w-full flex-col justify-around bg-tertiaryOrange-300 lg:flex-row">
          {skillsList.map((items, i) => (
            <div
              className="flex items-center p-2 md:flex-col"
              key={`${items.skill}_${i}`}
            >
              <a href="" className="h-full w-fit">
                {items.icon}
              </a>
              <p>{items.skill}</p>
            </div>
          ))}
        </div>
        ;
      </div>
    </div>
  );
};

export default HText;
