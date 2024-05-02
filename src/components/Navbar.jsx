import React, { useState } from "react";
import { styles } from "../styles";
import { Link, NavLink } from "react-router-dom";
import { close, dipanjantransparentlogo, menu } from "../assets";
import { navLinks } from "../constants";
import { mobileLinks } from "./SocialLinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={"w-full flex items-center py-5 fixed top-0 z-20 bg-primary"}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={dipanjantransparentlogo}
            alt="dipanjantransparentlogo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white underline text-[18px] font-bold cursor-pointer flex">
            Dipanjan's &nbsp; <span> | portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:hidden md:hidden xl:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <NavLink
                to={`/${link.id}`}
                className={({ isActive }) =>
                  isActive ? "text-white border-b-4" : "text-secondary"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="xl:hidden flex flex-1 justify-end items-center">
          <ul className="list-none md:flex md:flex-row md:relative md:left-[0%] sm:right-[0%] hidden lg:hidden">
            {mobileLinks.map((link) => (
              <li
                key={link.id}
                className={
                  "flex justify-between items-center w-12 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-transparent" +
                  " " +
                  link.style
                }
              >
                <a
                  href={link.href ? link.href : "/"}
                  className="flex justify-between items-center w-full text-white"
                  download={link.download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.child}
                </a>
              </li>
            ))}
          </ul>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]`}
                >
                  <NavLink
                    to={`/${link.id}`}
                    className={({ isActive }) =>
                      isActive ? "text-white border-b-2" : "text-secondary"
                    }
                    onClick={() => setToggle(!toggle)}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
