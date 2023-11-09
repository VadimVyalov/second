'use client';
import Navbar from '../Navbar/Navbar';
import useScreen from '../../hooks/useScreen';
//import Image from "next/image";
//import { Link } from "react-scroll";
//import Container from "../Conteiner/Container";

//import config from '../../public/config/index.json';

const Header = ({ className = '' }) => {
  const { isM } = useScreen();
  //const {menu} = config;
  return (
    <header
      className={`text-white absolute z-10 top left w-[100vw] px-[20px] pt-[36px] t:px-[32px] t:pt-[25px] d:px-[24px] d:pt-[48px] ${className}`}
    >
      {isM ? <Navbar /> : <p>BurgerMenu</p>}
    </header>
  );
};

export default Header;
