import { AboutImage } from "../assets";

const About = () => {
  return (
    <section id="about">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full rounded-md"
          src={AboutImage}
          alt="dashboard image"
        />

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-dark-100 dark:text-white">
            Why Choose Our Course?
          </h2>
          <p className="mb-6 font-light text-dark-200 md:text-lg dark:text-dark-800">
            Our physics online course offers unparalleled learning opportunities
            with cutting-edge facilities and expert instructors. Our course is
            also designed to provide a deep understanding of each field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
