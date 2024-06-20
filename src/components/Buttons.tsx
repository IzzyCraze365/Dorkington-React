import React from "react";

interface Props {
  children: string;
  color?: string; // Optional
  onClick: () => void;
}

const Buttons = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      Buttons: {children}
    </button>
  );
};

export default Buttons;
