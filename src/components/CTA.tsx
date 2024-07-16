import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center relative">
          <div className="block absolute h-[100px] w-[100px] overflow-hidden rounded-[40%_60%_60%_40%/55%_73%_27%_45%] bg-gradient-to-l from-primary-400 to-accent-300 filter blur-lg opacity-40 -top-8 right-5"></div>
          <div className="block absolute h-[100px] w-[100px] overflow-hidden rounded-[60%_40%_32%_68%/35%_16%_84%_65%] bg-gradient-to-l from-primary-400 to-accent-300 filter blur-lg opacity-40 -bottom-5 left-5"></div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-4 text-4xl relative tracking-tight font-bold leading-tight text-dark-100 dark:text-white"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-6 text-dark-200 dark:text-dark-800 md:text-lg"
          >
            Transform your understanding of physics with our expert-led online
            course.
          </motion.p>
          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            href="#"
            className="text-white bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:ring-primary-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
          >
            Enroll Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
