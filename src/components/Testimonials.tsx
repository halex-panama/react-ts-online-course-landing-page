import { ProfilePict } from "../assets";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-dark-neutral"
      >
        {/* Blockquote */}
        <blockquote className="text-center lg:mx-auto lg:w-3/5">
          <div className="mt-6 lg:mt-10">
            <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-dark-200">
              <svg
                className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-dark-800 sm:h-24 sm:w-24 dark:text-neutral-700"
                width={16}
                height={13}
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                  fill="currentColor"
                />
              </svg>
              <span className="relative z-10 italic text-dark-200 dark:text-neutral-200">
                I just wanted to say that I'm very happy with my purchase of
                Preline so far. The documentation is outstanding - clear and
                detailed.
              </span>
            </p>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <img src={ProfilePict} className="w-20 h-20 rounded-full" />
            <div className="flex items-center">
              <div className="px-4">
                <p className="font-semibold text-dark-200 dark:text-neutral-200">
                  Philip
                </p>
                <p className="text-sm text-dark-400 dark:text-neutral-500">
                  Product Manager
                </p>
              </div>
              <div className="border-l-2 border-dark-400 h-10 grid place-content-center px-4 text-dark-200">
                Airbnb
              </div>
            </div>
          </div>
        </blockquote>
        {/* End Blockquote */}
      </section>
      {/* End Testimonials */}
    </>
  );
};

export default Testimonials;
