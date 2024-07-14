import { Logo } from "../assets";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 px-5 dark:bg-dark-100">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <a
          className="flex-none text-xl flex items-center gap-2 font-semibold dark:text-white"
          href="#"
        >
          <img src={Logo} alt="logo" className="h-10" />
          <span className="text-dark-300 dark:text-white">PhysiXpert</span>
        </a>
        <div className="hidden md:flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <a
            className="font-medium text-primary-500"
            href="#"
            aria-current="page"
          >
            Home
          </a>
          <a
            className="font-medium text-dark-600 hover:text-dark-400 dark:text-dark-700 dark:hover:text-dark-500"
            href="#about"
          >
            About
          </a>
          <a
            className="font-medium text-dark-600 hover:text-dark-400 dark:text-dark-700 dark:hover:text-dark-500"
            href="#courses"
          >
            Courses
          </a>
          <a
            className="font-medium text-dark-600 hover:text-dark-400 dark:text-dark-700 dark:hover:text-dark-500"
            href="#testimonials"
          >
            Testimonials
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
