import { Link, useLocation } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBars,
  FaTimes,
  FaLinkedin,
} from "react-icons/fa"; // Import icons from react-icons
import { useState } from "react";
import logo from "../assets/image/logo/logo.png";
import { clientDetails, routes } from "../Constant";
import { Link as Scroll } from "react-scroll";
import { FaXTwitter } from "react-icons/fa6";

const LandingHeader = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-40 py-4 bg-white  w-screen">
      <div className="wrapper flex items-center justify-between">
        {/* Logo Section */}
        <Link to={"/"} className="flex items-center">
          <img
            src={logo}
            alt="Chronocraft AI Solutions"
            className="h-12 sm:h-16"
          />
        </Link>

        {/* Navigation Section */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((obj) => (
            <>
              {obj.name === "HOME" ? (
                <Link
                  key={obj.name}
                  to={obj.path}
                  className={`${
                    pathname === `${obj.path}`
                      ? `text-secondary font-medium`
                      : `text-gray-700`
                  }  hover:text-primary`}
                >
                  {obj.name}
                </Link>
              ) : (
                <Scroll
                  key={obj.name}
                  aria-label="Home"
                  smooth={true}
                  offset={-70}
                  to={obj.landingpath}
                  className="cursor-pointer"
                >
                  {obj.name}
                </Scroll>
              )}
            </>
          ))}
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={clientDetails.facebook}
              className="text-white  text-xl bg-primary pt-[3px]"
            >
              <FaFacebookF /> {/* Facebook icon */}
            </Link>
            <Link
              to={clientDetails.instagram}
              className="text-white  bg-primary p-[2px] text-xl"
            >
              <FaInstagram /> {/* Instagram icon */}
            </Link>
            <Link
              to={clientDetails.linkedin}
              className="text-white  bg-primary p-[2px] text-xl"
            >
              <FaLinkedin />
            </Link>
            {/* <Link to="#" className="text-primary  text-xl">
              <FaXTwitter />
            
            </Link>
            <Link
              to={clientDetails.youtube}
              className="text-white bg-primary text-xl"
            >
              <FaYoutube />
            </Link> */}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
            {routes.map((obj) => (
              <>
                {obj.name === "HOME" ? (
                  <Link
                    key={obj.name}
                    to={obj.path}
                    className={`${
                      pathname === `${obj.path}`
                        ? `text-secondary font-medium`
                        : `text-gray-700`
                    }  hover:text-purple-700`}
                  >
                    {obj.name}
                  </Link>
                ) : (
                  <Scroll
                    key={obj.name}
                    aria-label="Home"
                    smooth={true}
                    offset={-70}
                    to={obj.landingpath}
                    className="cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {obj.name}
                  </Scroll>
                )}
              </>
            ))}
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Link
                to={clientDetails.facebook}
                className="text-white  text-xl bg-primary pt-[3px]"
              >
                <FaFacebookF /> {/* Facebook icon */}
              </Link>
              <Link
                to={clientDetails.instagram}
                className="text-white  bg-primary p-[2px] text-xl"
              >
                <FaInstagram /> {/* Instagram icon */}
              </Link>
              <Link
                to={clientDetails.linkedin}
                className="text-white  bg-primary p-[2px] text-xl"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;
