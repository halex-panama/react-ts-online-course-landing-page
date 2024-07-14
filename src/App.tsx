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
    </div>
  );
};

export default App;
