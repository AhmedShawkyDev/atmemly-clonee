// @ts-ignore
import img1 from "../../../public/image/Atmemly-Logo.svg";
import { Link } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className=" bg-white border-b-2   md:flex md:items-center md:justify-between ">
      <div className="flex items-center justify-between ">
        <span className="text-2xl cursor-pointer font-pops  ">
          <img
            src={img1}
            alt="logo"
            className="max-sm:mb-2 max-md:ml-10 xl:ml-20 lg:ml-5 2xl:w-[100px] 2xl:my-3 xl:w-[75px]  lg:w-[80px] lg:my-0 md:w-[70px] cursor-pointer md:ml-10"
          />
        </span>
        <span
          onClick={menuu}
          className="block mx-2 text-3xl cursor-pointer md:hidden max-md:mr-10"
        >
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>

      <ul
        className={` md:flex md:items-center z-[5] md:z-auto md:static absolute
         bg-white w-[50%] h-[100%] left-0 top-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 
          ${menuOpen ? "opacity-0 left-[-400px]" : "opacity-100 left-[0px]"} 
          transition-all  ease-in duration-300 lg:text-[10px] xl:text-xl md:text-xs`}
      >
        <li className="mx-4 my-6 md:my-0 ">
          <span className="text-2xl cursor-pointer font-pops">
            <img
              src={img1}
              alt="logo"
              className="md:hidden w-[75px] 2xl:w-[100px] 2xl:my-3 xl:w-[95px] xl:my-1 lg:w-[80px] lg:my-0 md:w-[70px] cursor-pointer"
            />
          </span>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/home"
            className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
          >
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/projects"
            className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
          >
            Projects
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/services"
            className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
          >
            Services
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/freelancers"
            className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
          >
            Freelancers
          </Link>
        </li>

        <li className="mx-3 my-11 md:my-9 lg:ml-52  ">
          <Link
            to="/createa"
            className="2xl:ml-56 xl:text-lg  lg:text-[10px] px-6 py-4 text-white transition-all duration-300 ease-in-out border rounded-lg md:text-xs bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300"
            // className="px-6 py-4 text-sm transition-all duration-300 ease-in-out lg:text-white lg:border lg:rounded-lg lg:bg-sky-300 lg:hover:bg-white lg:hover:text-sky-300 lg:border-sky-300 "
          >
            Create Account
          </Link>
        </li>
        <li className=" my-9 md:my-9 lg:ml-0 lg:mr-16">
          <Link
            to="/login"
            className="xl:text-lg lg:text-[10px] px-6 py-4 mx-3 text-xs duration-500 border rounded-lg bg-cyan-50 hover:bg-white text-sky-300 hover:text-sky-400 border-sky-100 hover:border-slate-100"

            // className="px-6 py-4 mx-3 text-sm duration-500 lg:border lg:rounded-lg lg:bg-cyan-50 lg:hover:bg-white lg:text-sky-300 lg:hover:text-sky-400 lg:border-sky-100 lg:hover:border-slate-100 md:text-neutral-500 md:hover:text-sky-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
