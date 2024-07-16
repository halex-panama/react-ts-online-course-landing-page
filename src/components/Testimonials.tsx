import { RiDoubleQuotesL } from "react-icons/ri";
import { ProfilePict } from "../assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto scroll-mt-8"
      >
        {/* Blockquote */}
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="text-center lg:mx-auto lg:w-3/5"
        >
          <div className="mt-6 lg:mt-10">
            <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-dark-200">
              <RiDoubleQuotesL className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-dark-800 sm:h-24 sm:w-24 dark:text-dark-500" />
              <span className="relative z-10 italic text-dark-200 dark:text-dark-900">
                This course has transformed my understanding of physics. The
                facilities and instructors are top-notch!
              </span>
            </p>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <img src={ProfilePict} className="w-20 h-20 rounded-full" />
            <div className="flex items-center">
              <div className="px-4">
                <p className="font-semibold text-dark-200 dark:text-dark-900">
                  Philip
                </p>
                <p className="text-sm text-dark-400 dark:text-dark-800">
                  Product Manager
                </p>
              </div>
              <div className="border-l-2 border-dark-400 h-10 grid place-content-center px-4 text-white font-semibold">
                Airbnb
              </div>
            </div>
          </div>
        </motion.blockquote>
        {/* End Blockquote */}
      </section>
      {/* End Testimonials */}
    </>
  );
};

export default Testimonials;
