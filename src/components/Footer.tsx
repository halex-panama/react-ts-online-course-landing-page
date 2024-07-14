import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <>
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full dark:bg-dark-neutral">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-xl flex items-center gap-2 font-semibold text-dark-200 dark:text-white"
                href="#"
              >
                <img src={Logo} alt="logo" className="h-7" />
                <span>PhysiXpert</span>
              </a>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <h4 className="font-semibold text-dark-200 dark:text-white">
                Product
              </h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-dark-300 hover:text-dark-500 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-dark-300 hover:text-dark-500 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="#"
                  >
                    Changelog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-dark-300 hover:text-dark-500 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="#"
                  >
                    Docs
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <h4 className="font-semibold text-dark-200 dark:text-white">
                Company
              </h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-dark-300 hover:text-dark-500 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-dark-300 hover:text-dark-500 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="#"
                  >
                    Blog
                  </a>
                </p>

                <p>
                  <a
                    className="inline-flex gap-x-2 text-dark-300 hover:text-dark-500 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="#"
                  >
                    Customers
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-span-2">
              <h4 className="font-semibold text-dark-200 dark:text-white">
                Subscribe
              </h4>
              <p className="mt-3 text-sm text-dark-200 dark:text-white">
                Stay Updated With Us
              </p>
              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <a
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-400 text-white hover:bg-primary-300 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Subscribe
                  </a>
                </div>
              </form>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-black dark:text-neutral-400">
                © 2024 Physics Course. All rights reserved.
              </p>
            </div>
            {/* End Col */}
            {/* Social Brands */}
            <div>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-dark-200 hover:bg-dark-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <FaFacebook />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-dark-200 hover:bg-dark-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-dark-200 hover:bg-dark-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <FaLinkedin />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-dark-200 hover:bg-dark-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <FaTwitter />
              </a>
            </div>
            {/* End Social Brands */}
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </>
  );
};

export default Footer;
