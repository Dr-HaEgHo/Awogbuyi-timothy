import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { styles } from "../style"
import { navLinks } from '../constants'

import {logo, menu, close} from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  const location = useLocation();

  console.log(location)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-[987987987987] bg-none`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex text-white items-center gap-2"
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                location.pathname === `/${item.id}` ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-[300] cursor-pointer link transition duration-200`}
            >
              <Link to={`/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#ffffff30] backdrop-blur-md border border-[#ffffff30] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[987987987987] rounded-xl`}
          >
            <ul className="list-none flex md:hidden flex-col items-start justify-end gap-4">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    location.pathname === `/${item.id}` ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-poppins font-medium cursor-pointer transition duration-200`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <Link to={`/${item.id}`}>{item.title}</Link>
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