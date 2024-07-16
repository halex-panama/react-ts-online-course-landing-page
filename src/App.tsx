import ScrollToTop from "react-scroll-to-top";
import {
  About,
  Courses,
  CTA,
  Feature,
  Footer,
  Hero,
  Navbar,
  Testimonials,
} from "./components";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const App = () => {
  return (
    <div className="grid gap-10 dark:bg-dark-100">
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Courses />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTop
        smooth
        component={<MdOutlineKeyboardDoubleArrowUp size={20} />}
        className="grid place-content-center text-black bg-primary-800"
      />
    </div>
  );
};

export default App;
