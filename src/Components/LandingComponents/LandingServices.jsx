import React from "react";
import { hassaAppServices, hassaWebServices } from "../../Constant";

const LandingServices = ({ isWeb }) => {
  const services = isWeb ? hassaWebServices : hassaAppServices;
  return (
    <div id="services" className="wrapper py-12">
      <h2 className="section-name mb-2 text-center" data-aos="fade-up">
        Services
      </h2>
      <h2 className="main-heading text-center mb-8 !text-primary">
        {isWeb ? "Web Development Services" : "App Development Services"}
      </h2>
      <div className="grid md:grid-cols-2  gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-primary/80 shadow-lg rounded-xl text-center transform transition duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-4 !text-white">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 !text-white">
              {service.title}
            </h3>
            <p className="text-gray-100">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingServices;
