import { motion } from "framer-motion";
import { AboutImage } from "../assets";

const About = () => {
  return (
    <section id="about">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full rounded-md"
          src={AboutImage}
          alt="dashboard image"
        />

        <div className="mt-4 md:mt-0">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mb-4 text-4xl tracking-tight font-bold text-dark-100 dark:text-white"
          >
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Course?
            </span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mb-6 font-light text-dark-200 md:text-lg dark:text-dark-800"
          >
            Our physics online course offers unparalleled learning opportunities
            with cutting-edge facilities and expert instructors. Our course is
            also designed to provide a deep understanding of each field.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
