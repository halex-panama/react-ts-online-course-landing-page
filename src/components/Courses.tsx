import { FaRegClock } from "react-icons/fa6";
import { CardImage1, CardImage2, CardImage3, CardImage4 } from "../assets";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Courses = () => {
  const coursesContent = [
    {
      title: "Mechanics",
      imageSrc: CardImage1,
    },
    {
      title: "Thermodynamics",
      imageSrc: CardImage2,
    },
    {
      title: "Electromagnetism",
      imageSrc: CardImage3,
    },
    {
      title: "Optics",
      imageSrc: CardImage4,
    },
  ];
  return (
    <section
      id="courses"
      className="grid place-content-center gap-8 scroll-mt-12"
    >
      <h2 className="mb-4 text-4xl text-center tracking-tight font-bold text-dark-100 dark:text-white">
        Our Courses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coursesContent.map((item) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="w-full max-w-[250px] bg-white border border-dark-700 rounded-lg shadow dark:bg-secondary-100 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg min-h-[175px]"
              src={item.imageSrc}
              alt="product image"
            />
            <div className="grid gap-14 px-5 py-5">
              <div className="grid gap-2">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>

                <div className="flex items-center gap-1 dark:text-white">
                  <FaRegClock />
                  <span>3 hours per week</span>
                </div>
              </div>

              <div className="flex items-center ">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <FaStar className="text-accent-400" />
                  <FaStar className="text-accent-400" />
                  <FaStar className="text-accent-400" />
                  <FaStar className="text-accent-400" />
                  <FaStar className="text-accent-400" />
                </div>
                <span className="bg-primary-800 text-primary-200 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-secondary-700 dark:text-secondary-200 ms-3">
                  5.0
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="grid place-content-center">
        <motion.a
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-400 text-white hover:bg-primary-300 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          See More
        </motion.a>
      </div>
    </section>
  );
};

export default Courses;
