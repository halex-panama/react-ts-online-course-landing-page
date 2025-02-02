import { motion } from "framer-motion";
import { TbRosetteDiscountCheck } from "react-icons/tb";

const Feature = () => {
  const featureContent = [
    {
      title: "Modern Library",
      description: "Access a vast collection of physics resources.",
    },
    {
      title: "Comfortable Classrooms",
      description: "Learn in comfortable environments.",
    },
    {
      title: "Video Lessons",
      description: "Engage with high-quality video lessons.",
    },
    {
      title: "Group Learning",
      description: "Participate in interactive group learning sessions.",
    },
  ];
  return (
    <>
      {/* Icon Blocks */}
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
            {/* Icon Block */}
            {featureContent.map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.7 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex"
              >
                <TbRosetteDiscountCheck className="flex-shrink-0 size-10 text-primary-500 " />
                <div className="ms-2 sm:ms-4">
                  <h3 className="text-base sm:text-lg font-semibold text-primary-500 ">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-dark-200 dark:text-dark-800">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* End Icon Block */}
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </section>
      {/* End Icon Blocks */}
    </>
  );
};

export default Feature;
