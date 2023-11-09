"use client";

//import { useTextProps } from "@/hooks";
import style from "./styles.module.scss";


const Button= ({
  children, className = "",
  type,
  onClick,
}) => {
  //const { fontSize, lineHeight } = useTextProps({ size, line });



  return (
    <button
      
      className={`${style.corner} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
