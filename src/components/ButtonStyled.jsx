import React from "react";

const ButtonStyled = (props) => {
  return (
    <button
      className="button w-1/4 rounded border border-black border-opacity-20 py-3 text-black shadow-lg duration-200 ease-in-out hover:bg-MediumBg hover:shadow-2xl active:bg-Highlight"
      href={props.buttonTarget}
      target="_blank"
      onClick={() => {}}
    >
      <a href={props.buttonTarget} target="_blank">
        {props.name}
      </a>
    </button>
  );
};

export default ButtonStyled;
