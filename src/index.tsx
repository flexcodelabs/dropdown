import React, { FC, ReactNode } from "react";
import { useClickOutsideListener } from "@flexcodelabs/use-events-hooks";
import "./dropdown.css";

export type DropdownProps = {
  Toggle: ReactNode;
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  close?: () => void;
  style?: React.CSSProperties;
  dropdownstyles?: React.CSSProperties;
  open?:
    | "left"
    | "right"
    | "up"
    | "down"
    | "left-center"
    | "down-center"
    | "up-center"
    | "right-center";
};

const Dropdown: FC<DropdownProps> = ({
  Toggle,
  children,
  open = "down",
  isOpen,
  close,
  style,
  dropdownstyles,
  className,
}) => {
  const ref = React.useRef(null);
  useClickOutsideListener(ref, () => close && close());
  return (
    <div
      style={{
        position: "relative",
        ...style,
      }}
      className={className}
      ref={ref}
    >
      {Toggle}
      <div
        className={`${isOpen ? "dropdown open" : "dropdown"} ${open}`}
        style={{
          ...(open === "up" && { bottom: "20px" }),
          ...(open === "down" && { top: "20px" }),
          ...(open === "left" && { right: "100%", top: "0" }),
          ...(open === "right" && { left: "100%", top: "0" }),
          ...(open === "up-center" && {
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }),
          ...(open === "down-center" && {
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }),
          ...(open === "left-center" && {
            right: "100%",
            top: "50%",
            transform: "translateY(-50%)",
          }),
          ...(open === "right-center" && {
            left: "100%",
            top: "50%",
            transform: "translateY(-50%)",
          }),

          ...dropdownstyles,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
