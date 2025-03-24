"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_MENU = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Projects",
    link: "/"
  },
  {
    name: "Certificates",
    link: "/"
  }
];

const NavItem = ({ nav }: { nav: { name: string, link: string } }) => {
  return (
    <Link
      className="flex justify-center items-center gap-2 font-medium text-light-text-primary dark:text-dark-text-primary h-16 w-36 mt-8"
      href={nav.link}
    >
      {nav.name}
    </Link>
  )
}

const SideItem = (
  { nav, toggleSidebar }: { nav: { name: string, link: string }, toggleSidebar: () => void }
) => {
  return (
    <Link
      href={nav.link}
      className="dark:text-dark-text-primary text-light-text-primary"
      onClick={toggleSidebar}
    >
      {nav.name}
    </Link>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full z-40">
      <div className="flex justify-between items-center p-4">
        {/* Hamburger menu for mobile */}
        <button
          className="block md:hidden"
          onClick={toggleSidebar}
        >
          <FaBars className="h-6 w-6 dark:text-dark-text-primary text-light-text-primary" />
        </button>

        {/* Desktop navigation */}
        <div
          className="hidden md:flex justify-center items-center border-0 w-full h-full"
        >
          {
            NAV_MENU.map((nav, i) => {
              return (
                <NavItem nav={nav} />
              )
            })
          }
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-light-accent dark:bg-dark-accent shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-4">
          <button
            className="self-end"
            onClick={toggleSidebar}
          >
            <FaTimes className="h-6 w-6 dark:text-dark-text-primary text-light-text-primary" />
          </button>

          <div className="flex flex-col space-y-4 mt-8">

            {
              NAV_MENU.map((nav, i) => {
                return (
                  <SideItem nav={nav} toggleSidebar={toggleSidebar} />
                )
              })
            }
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </nav>
  );
}

export default Navbar;