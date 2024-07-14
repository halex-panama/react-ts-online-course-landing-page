const CTA = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-bold leading-tight text-dark-100 dark:text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="mb-6 font-light text-dark-200 dark:text-gray-400 md:text-lg">
            Transform your understanding of physics with our expert-led online
            course.
          </p>
          <a
            href="#"
            className="text-white bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none dark:focus:ring-primary"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
