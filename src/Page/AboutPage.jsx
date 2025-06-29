import React from "react";
import PageBanner from "../Components/PageBanner";
import bannerImage from "../assets/image/aboutusbanner.png";
import Intro from "../Components/Intro";
import aboutusimage from "../assets/image/aboutusimage.png";
import workexperienceimage from "../assets/image/workexperienceimage2.png";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import OurValues from "../Components/OurValues";
import Testimonials from "../Components/Testimonials";
import AssociatedWith from "../Components/Associated";
import LeadForm from "../Components/LeadForm";
import recognition from "../assets/svgs/recognition.svg";
import agilityorange from "../assets/svgs/agilityorange.svg";
const AboutPage = () => {
  return (
    <div className="max-w-screen overflow-hidden">
      <PageBanner image={bannerImage} title="About Company" />
      <Intro />
      <div className="max-w-screen overflow-hidden">
        {/* Know About Us Section */}
        <div className="wrapper py-12 relative">
          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="">
              <h1
                className="text-primary text-5xl font-bold mb-8"
                data-aos="fade-right"
              >
                Know About Us
              </h1>
              <p className="text-gray-800 mb-6" data-aos="fade-right">
                At Chronocraft AI Solutions, we don't just deliver technology
                solutions — we become an integral part of your journey toward
                success. Our mission is simple: to help businesses thrive in a
                rapidly evolving digital world by providing innovative and
                tailored solutions. With years of experience and a relentless
                drive to solve problems, we're committed to enabling businesses
                of all sizes to unlock their full potential.
              </p>
              <p className="text-gray-800" data-aos="fade-right">
                We understand that the digital landscape can be overwhelming.
                That's why we work hand-in-hand with you to understand your
                unique challenges and goals. Through collaboration, creativity,
                and cutting-edge technology, we create customized solutions that
                make a real difference. Whether you're a startup or an
                established enterprise, our team is here to guide you every step
                of the way. give a heading for this also
              </p>
            </div>
            <div className="" data-aos="fade-left">
              <img src={aboutusimage} alt="Technology Circuit" className="" />
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="w-full grid lg:grid-cols-[60%_40%] items-end relative">
          <img
            data-aos="fade-right"
            loading="lazy"
            src={workexperienceimage}
            alt="experience"
            width="800"
            height="600"
            className="w-full  lg:block hidden object-cover grayscale-[20%]"
          />
          <div
            data-aos="fade-left"
            className="px-6 flex justify-between h-full flex-col items-center lg:items-start lg:pl-5 w-full z-10"
          >
            <div className="flex flex-col items-start gap-3 mb-5 md:ml-10">
              <h6 className="section-name font-candal" data-aos="fade-left">
                Work Experience
              </h6>
              <h2 className="text-[2rem] md:text-5xl font-candal text-primary font-extrabold  text-center lg:text-start">
                We specialize in custom tailoring solutions
              </h2>
            </div>
            <img
              loading="lazy"
              src={workexperienceimage}
              width="400"
              height="300"
              alt="experience"
              className="w-full  rounded-t-lg block lg:hidden object-cover  object-right z-10"
            />
            <div
              className="z-10 bg-gradient-to-b from-primary to-secondary w-full px-5 py-10 grid md:grid-cols-3 gap-5 lg:w-[70vw] lg:-translate-x-[30vw]"
              // data-aos="fade-left"
            >
              <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
                {/* <BsLightningChargeFill className="h-[4rem] w-[4rem] text-orange-400 object-contain  -mb-4" /> */}
                <img
                  src={agilityorange}
                  alt=""
                  className="h-[4rem] w-[4rem] grayscale"
                />
                <h2 className="text-4xl font-bold font-candal">100+</h2>
                <p className=" pl-3 font-semibold">Projects Completed</p>
              </div>
              <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
                <MdGroups className="h-[4rem] w-[4rem] text-orange-400 grayscale  " />

                <h2 className="text-4xl font-bold font-candal">
                  100<span className="text-3xl">%</span>{" "}
                </h2>
                <p className=" pl-3 font-semibold">Satisfied clients</p>
              </div>
              <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
                {/* <LiaAwardSolid className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" /> */}
                <img
                  src={recognition}
                  alt=""
                  className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c grayscale "
                />
                <h2 className="text-4xl font-bold font-candal">02+</h2>
                <p className=" pl-3 font-semibold">Recognition</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <OurValues hideWorkProcess={false} />
      <Testimonials />
      <section className="bg-primary">
        <div className="wrapper text-white py-[4rem] sm:py-[8rem]">
          <h1 className="text-3xl sm:text-7xl font-bold" data-aos="fade-up">
            {" "}
            WHO WE ARE
          </h1>
          <p className="text-[#ffffff] mt-5" data-aos="fade-up">
            At Chronocraft AI Solutions, we are more than just a service
            provider – we are your trusted technology partner. Our expert team
            is committed to delivering innovative, customized solutions that
            address your unique business challenges. Whether you’re aiming to
            streamline processes, enhance customer experiences, or leverage new
            technologies, we’re here to help you succeed in a rapidly evolving
            digital world. Get in touch with us today to explore how we can help
            your business innovate, grow, and thrive.
          </p>
        </div>
      </section>
      <AssociatedWith />
      <LeadForm />
    </div>
  );
};

export default AboutPage;
