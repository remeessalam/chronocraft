import { Link as Scroll } from "react-scroll";

const Intro = () => {
  return (
    <div>
      <section className="bg-primary py-[3rem] sm:py-[7rem] ">
        <div className=" wrapper">
          <h1
            className="main-heading uppercase font-candal !text-white"
            data-aos="fade-up"
          >
            Your Partner in Navigating the Digital Transformation Journey
          </h1>
          <div className="grid md:grid-cols-3">
            <p
              className="text-white/80 mt-5 sm:mt-10 sm:max-w-[60vw] md:col-span-2 font-roboto"
              data-aos="fade-up"
            >
              Our vision is to be the trusted partner that businesses turn to
              when they need to adapt, innovate, and excel. We believe that
              technology should not be a barrier but a catalyst for growth.
              Through our solutions, we aim to transform the way businesses
              operate, helping them stay competitive in an increasingly complex
              world.
            </p>
            <div className="w-full flex md:justify-end md:mt-0 mt-5 sm:mt-10">
              <Scroll
                aria-label="Home"
                smooth={true}
                to="contactus"
                className="cursor-pointer primary-btn px-10 py-4 h-fit self-end"
                data-aos="fade-left"
              >
                Talk to us
              </Scroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
