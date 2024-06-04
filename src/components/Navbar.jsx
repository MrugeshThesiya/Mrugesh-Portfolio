import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, subNavLinks } from "../constants";
import { logo, menu, close } from "../assets";
function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [home, setHome] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Mrugesh Thesiya &nbsp;
            <span className="lg:block hidden">| Software Dev</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10 justify-end">
          {subNavLinks.map((subNav) => (
            <li
              key={subNav.id}
              className={`${
                active === subNav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(subNav.title)}
            >
              {home && <a href={`#${subNav.id}`}>{subNav.title}</a>}
            </li>
          ))}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } ${
                home && nav.link == "/" ? "hidden" : "block"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                if (nav.link != "/") {
                  setHome(false);
                } else {
                  setHome(true);
                }
              }}
            >
              <Link to={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-[4rem] right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul
              className={`list-none flex items-center justify-center flex-1 flex-col ${home?"gap-4":"gap-1"}`}
            >
              {subNavLinks.map((subNav) => (
                <li
                  key={subNav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === subNav.title ? "text-white" : "text-secondary"
                  }
              } hover:text-white`}
                  onClick={() => setActive(subNav.title)}
                >
                  {home && <a href={`#${subNav.id}`}>{subNav.title}</a>}
                </li>
              ))}
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }
                  ${
                    home && nav.link == "/" ? "hidden" : "block"
                  } hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    if (nav.link != "/") {
                      setHome(false);
                    } else {
                      setHome(true);
                    }
                  }}
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
