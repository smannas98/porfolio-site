import clsx from "clsx";
import React from "react";

type ButtonProps = {
  readonly children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(
        "transform -skew-x-12",
        // background
        "bg-zinc-300 bg-gradient-to-tr from-zinc-300 to-zinc-500",
        // border
        "border-black border-2 border-opacity-0 rounded",
        // Text styles
        "text-black font-bold",
        // padding & margin
        "py-3 px-8",
        // hover states
        "hover:bg-gradient-to-tr hover:from-zinc-300 hover:to-zinc-600",
        // active states
        "active:border-opacity-100"
      )}
    >
      <span className="transform skew-x-12">{ props.children }</span>
    </button>
  );
};

export default Button;
