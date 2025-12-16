'use client'

import Link from 'next/link';
import { useState } from "react";

import { close, logo, menu } from '@/assets';
import { navLinks } from '@/constants';
import { styles } from '@/styles';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={
        `${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 bg-primary/95 backdrop-blur-sm`
      }
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo.src} alt="logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          <p className="text-white text-[16px] sm:text-[18px] font-bold cursor-pointer flex pt-2">
            Samyak&nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[16px] lg:text-[18px] font-medium cursor-pointer transition-colors`}
                onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] xs:w-[28px] xs:h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute
              top-16 xs:top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl
              transition-all duration-300`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[15px] xs:text-[16px]
                    hover:text-white transition-colors`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
