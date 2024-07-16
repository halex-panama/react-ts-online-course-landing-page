import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "../assets";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { DarkMode } from "./";
import { AnimatePresence, motion } from "framer-motion";
import { menuVariant } from "../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 px-5 dark:bg-dark-100">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between relative"
        aria-label="Global"
      >
        <a
          className="flex-none text-xl flex items-center gap-2 font-semibold dark:text-white"
          href="#"
        >
          <img src={Logo} alt="logo" className="h-10" />
          <span className="text-dark-300 dark:text-white">PhysiXpert</span>
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-primary-500"
              href="#"
              aria-current="page"
            >
              Home
            </a>
            <a
              className="font-medium text-dark-200 hover:text-dark-400 dark:text-dark-700 dark:hover:text-white"
              href="#about"
            >
              About
            </a>
            <a
              className="font-medium text-dark-200 hover:text-dark-400 dark:text-dark-700 dark:hover:text-white"
              href="#courses"
            >
              Courses
            </a>
            <a
              className="font-medium text-dark-200 hover:text-dark-400 dark:text-dark-700 dark:hover:text-white"
              href="#testimonials"
            >
              Testimonials
            </a>
          </div>
          <DarkMode />
          <GiHamburgerMenu
            className="text-2xl md:hidden flex dark:text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="initial"
              whileInView="animate"
              exit="exit"
              key="mobile-menu"
              variants={menuVariant}
              className="transition-transform fixed top-0 right-0 bottom-0 h-full w-80 bg-white dark:bg-dark-50 drop-shadow-2xl z-10"
            >
              <div className="flex justify-end p-12">
                <button onClick={() => setMenuOpen(false)}>
                  <RiCloseFill className="size-10 dark:text-white" />
                </button>
              </div>

              <div className="flex flex-col ml-[33%] gap-10">
                <a
                  className="text-2xl text-primary-500"
                  href="#"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  className="text-2xl text-dark-200 hover:text-dark-400 dark:text-dark-700 dark:hover:text-white"
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
                <a
                  className="text-2xl text-dark-200 hover:text-dark-400 dark:text-dark-700 dark:hover:text-white"
                  href="#courses"
                  onClick={() => setMenuOpen(false)}
                >
                  Courses
                </a>
                <a
                  className="text-2xl text-dark-200 hover:text-dark-400 dark:text-dark-700 dark:hover:text-white"
                  href="#testimonials"
                  onClick={() => setMenuOpen(false)}
                >
                  Testimonials
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
