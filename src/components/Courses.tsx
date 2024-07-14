import { FaRegClock } from "react-icons/fa6";
import { CardImage1 } from "../assets";
import { FaStar } from "react-icons/fa";

const Courses = () => {
  const coursesContent = [
    {
      title: "Mechanics",
      imageSrc: CardImage1,
    },
    {
      title: "Thermodynamics",
      imageSrc: CardImage1,
    },
    {
      title: "Electromagnetism",
      imageSrc: CardImage1,
    },
    {
      title: "Optics",
      imageSrc: CardImage1,
    },
  ];
  return (
    <section
      id="courses"
      className="grid place-content-center gap-8 dark:bg-dark-neutral"
    >
      <h2 className="mb-4 text-4xl text-center tracking-tight font-bold text-dark-100 dark:text-white">
        Our Courses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coursesContent.map((item) => (
          <div className="w-full max-w-[250px] bg-white border border-dark-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
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
                  <FaStar className="text-primary-400" />
                  <FaStar className="text-primary-400" />
                  <FaStar className="text-primary-400" />
                  <FaStar className="text-primary-400" />
                  <FaStar className="text-primary-400" />
                </div>
                <span className="bg-primary-800 text-primary-200 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  5.0
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid place-content-center">
        <a
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default Courses;
