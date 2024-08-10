import React from "react";

interface Props {
  children: string;
  color?: string; // Optional Color here to change
  //Get to work!!!
  
  onClick: () => void;
}

const Buttons = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"py-1 m-1 btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
