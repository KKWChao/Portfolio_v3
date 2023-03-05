import React from "react";

const ButtonStyled = ({ target }) => {
  return (
    <button
      className="button w-1/4 rounded border border-black border-opacity-20 py-3 shadow-lg duration-200 ease-in-out hover:bg-MediumBg hover:shadow-2xl active:bg-Highlight"
      href={target}
      target="_blank"
      onClick={() => {}}
    >
      <a href={target} target="_blank">
        Github
      </a>
    </button>
  );
};

export default ButtonStyled;
