import { HeroImage } from "../assets";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 md:h-[75dvh] grid place-content-center"
      >
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-dark-100 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Master Physics with Our Comprehensive Online Course
            </h1>
            <p className="mt-3 text-lg text-dark-200 dark:text-dark-800">
              State-of-the-art facilities and expert faculty at your fingertips
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-400 text-white hover:bg-primary-300 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Register Now
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-se text-dark-100 shadow-sm hover:bg-dark-800 disabled:opacity-50 disabled:pointer-events-none dark:bg-dark-100 dark:border-dark-300 dark:text-white dark:hover:bg-dark-300"
                href="#"
              >
                Sign Up
              </a>
            </div>
            {/* End Buttons */}
          </div>
          {/* End Col */}
          <div className="relative ms-4">
            <img
              className="w-80 lg:w-full rounded-md "
              src={HeroImage}
              alt="Hero Image"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </section>
      {/* End Hero */}
    </>
  );
};

export default Hero;
