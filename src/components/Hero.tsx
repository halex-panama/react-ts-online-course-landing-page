import { motion } from "framer-motion";
import { HeroImage } from "../assets";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-16"
      >
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="text-center md:text-start">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="block text-3xl font-bold text-dark-100 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white"
            >
              Master{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Physics
              </span>{" "}
              with Our Comprehensive Online Course
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-3 text-lg text-dark-200 dark:text-dark-800"
            >
              State-of-the-art facilities and expert faculty at your fingertips
            </motion.p>
            {/* Buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-7 space-x-3 w-full sm:inline-block"
            >
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-400 text-white hover:bg-primary-300 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Register Now
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-dark-800 bg-se text-dark-100 shadow-sm hover:bg-dark-800 disabled:opacity-50 disabled:pointer-events-none dark:bg-dark-100 dark:border-dark-300 dark:text-white dark:hover:bg-dark-300"
                href="#"
              >
                Sign Up
              </a>
            </motion.div>
            {/* End Buttons */}
          </div>
          {/* End Col */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="ms-4 grid place-content-center"
          >
            <img
              className="w-80 lg:w-full rounded-md "
              src={HeroImage}
              alt="Hero Image"
            />
          </motion.div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </section>
      {/* End Hero */}
    </>
  );
};

export default Hero;
