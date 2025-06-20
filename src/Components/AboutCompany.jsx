import { useNavigate } from "react-router-dom";
import aboutcompanyimage from "../assets/image/aboutcompanyimage.png";
import backgroundimage from "../assets/image/aboutusbg.webp";
const AboutCompany = () => {
  const navigate = useNavigate();
  return (
    <div
      id="about"
      className=" bg-bgcolor px-8 pt-[4rem] pb-[9rem] bg-current bg-cover bg-no-repeat bg-left"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="wrapper">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="section-name mb-2" data-aos="fade-up">
            Our Story
          </h2>
          <h1 className="main-heading" data-aos="fade-up">
            About Company
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section with Image and Experience Box */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden ">
              <img
                data-aos="fade-right"
                src={aboutcompanyimage}
                alt="Business people silhouettes"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Box */}
            <div
              className="absolute -bottom-20 left-0 bg-primary text-white p-4 sm:p-8 rounded-3xl max-w-sm"
              data-aos="fade-up"
            >
              <div className="mb-1 sm:mb-4 text-common">
                <span className="text-2xl sm:text-6xl font-bold font-candal">
                  4
                </span>
                <span className="text-xl sm:text-4xl font-bold">+</span>
              </div>
              <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2 font-candal">
                Years of Experience
              </h3>
              <p className="text-sm font-montserrat">
                The trusted choice for your software development solutions
              </p>
            </div>
          </div>

          {/* Right Section with Vision */}
          <div className="space-y-6 mt-16 sm:mt-0">
            <h2 className="text-4xl font-bold" data-aos="fade-left">
              Our Vision
            </h2>
            <h3
              className="text-primary text-3xl font-bold leading-tight"
              data-aos="fade-left"
            >
              Empowering Businesses to Adapt, Innovate, and Thrive Through
              Technology
            </h3>
            <p className="text-gray-700 leading-relaxed" data-aos="fade-left">
              Our vision is to be the trusted partner that businesses turn to
              when they need to adapt, innovate, and excel. We believe that
              technology should not be a barrier but a catalyst for growth.
              Through our solutions, we aim to transform the way businesses
              operate, helping them stay competitive in an increasingly complex
              world.
            </p>
            <button
              className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
              data-aos="fade-left"
              onClick={() => navigate("/about-us")}
            >
              KNOW MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCompany;
