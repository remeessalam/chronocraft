import React from "react";
import { industries } from "../Constant";
// import servicebgimg from "../assets/image/servicebgimg.jpeg";
const Services = () => {
  console.log(industries, "asdfkmaasdfasdf");
  return (
    <div id="industry" className=" py-[4rem]">
      {" "}
      <section className="wrapper">
        <div className="text-center mb-12">
          <span className="section-name mb-2 block" data-aos="fade-up">
            Industry
          </span>
          <h2 className="main-heading mb-4 !text-primary" data-aos="fade-up">
            Industries We Serve
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto" data-aos="fade-up">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            console.log(industry, "asdfkmaasdfasdf");

            return (
              <div
                key={industries.id}
                data-aos="fade-up"
                className="relative rounded-3xl group p-4  transition-all duration-500 ease-in-out overflow-hidden bg-primary hover:bg-primary/90  hover:backdrop-blur-3xl group-hover:scale-110 "
              >
                {/* Background Image with Opacity Transition */}
                <div
                  className="  w-full h-[10rem] rounded-xl  bg-cover  overflow-hidden  bg-center transition-opacity duration-500 ease-in-out "
                  // style={{ backgroundImage: `url(${industry?.image})` }}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-fit group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                {/* <div className="absolute w-full h-full top-0 left-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500" /> */}
                {/* White Overlay */}
                {/* <div className="absolute top-0 left-0 w-full h-full bg-primary/70  transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div> */}

                {/* Content */}
                <div className="  group-hover:text-white text-white mt-3">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
                    {industry.title}
                  </h3>
                  <p className="font-montserrat">{industry.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
