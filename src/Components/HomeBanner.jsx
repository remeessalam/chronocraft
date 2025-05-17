import homebannerimage from "../assets/image/homebannerimage.jpg";
import { Link as Scroll } from "react-scroll";
import Scroller from "./Scroller";

const HomeBanner = () => {
  return (
    <div
      className="relative bg-current bg-cover   bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${homebannerimage})` }}
    >
      <div className="absolute w-full h-full opacity-70  bg-black/50 overflow-hidden" />

      <div className="h-screen z-10  relative overflow-hidden">
        {/* Navigation Numbers */}

        {/* Main Content */}
        <div className="wrapper w-full h-full flex items-center">
          <Scroller />
          <div className="max-w-2xl ">
            <div className="space-y-4">
              <p
                data-aos="fade-right"
                className="text-gray-300 sm:text-3xl font-bold"
              >
                Welcome to
              </p>
              <h1
                data-aos="fade-right"
                className="main-heading !text-white mb-4"
              >
                Chronocraft AI Solution
              </h1>
              <h2
                data-aos="fade-right"
                className="text-2xl font-bold text-white mb-6"
              >
                Invent worlds evolve minds power the future
              </h2>
              <p data-aos="fade-right" className="text-gray-300 max-w-xl mb-8">
                At Chronocraft AI Solution, we pride ourselves on being at the
                forefront of technological innovation. We focused on delivering
                comprehensive solutions that help businesses evolve and excel in
                the ever-changing digital world...
              </p>
              <button
                data-aos="fade-right"
                className="primary-btn px-8 py-3 !bg-primary !text-white"
              >
                <Scroll
                  aria-label="Home"
                  smooth={true}
                  to="contactus"
                  className="cursor-pointer font-bold"
                >
                  JOIN THE INNOVATION
                </Scroll>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="absolute right-28 bottom-0 lg:flex hidden"
      >
        {/* <img src={homerobotimage} alt="" className="h-[80vh]" /> */}
      </div>
    </div>
  );
};

export default HomeBanner;
