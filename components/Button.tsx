import React from "react";

type Props = {
  slug: string;
};

const Button = (props: Props) => {
  return (
    <button
      className="transform 
  -skew-x-12 
  bg-zinc-300 
  bg-gradient-to-tr 
  from-zinc-300 
  to-zinc-500 
  box-border 
  border-black 
  border-2 
  border-opacity-0 
  text-black 
  font-bold 
  py-3 
  px-8 
  rounded"
    >
      <span className="transform skew-x-12">{props.slug}</span>
    </button>
  );
};

export default Button;
