import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Scroller() {
  const [selected, setSelected] = useState(1);

  const sections = [
    { id: 1, title: "Our Services offerings", path: "service", offset: -70 },
    { id: 2, title: "Industry", path: "industry", offset: -100 },
    { id: 3, title: "About Us", path: "about", offset: -70 },
    { id: 4, title: "Our Values", path: "values", offset: -40 },
    { id: 5, title: "Testimonials", path: "reviews", offset: -70 },
    { id: 6, title: "Contact Us", path: "contactus", offset: -70 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = sections.map((section) => {
        const element = document.getElementById(section.path);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id: section.id, top: rect.top, bottom: rect.bottom };
        }
        return null;
      });

      const visibleSection = sectionPositions.find(
        (section) =>
          section &&
          section.top <= window.innerHeight / 2 &&
          section.bottom >= window.innerHeight / 2
      );

      if (visibleSection) {
        setSelected(visibleSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex z-40">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 h-full flex items-center px-4">
        <div className="flex flex-col ">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              spy={true}
              smooth={true}
              duration={500}
              offset={section.offset}
              className="group relative min-h-[72px] flex items-center cursor-pointer"
              onClick={() => setSelected(section.id)}
            >
              <div
                className={`w-10 h-10 relative rounded-full flex items-center justify-center transition-all
                    ${
                      section.id === selected
                        ? "bg-primary"
                        : "bg-white group-hover:bg-secondary border  border-secondary"
                    }`}
              >
                <div
                  className={`absolute border-r border-2 transition-all duration-300 overflow-y-hidden ${
                    section.id === selected
                      ? `border-secondary`
                      : `border-secondary/40`
                  } h-[4.5rem] -z-[1] `}
                />
                <span
                  className={`${
                    section.id === selected ? `text-white` : `text-secondary`
                  } font-bold group-hover:text-white`}
                >
                  {section.id}
                </span>
              </div>
              {section.id === selected && (
                <span
                  className={`ml-3 text-black ${
                    section.id === 1 || section.id === 6
                      ? `text-[#FFC107]`
                      : `text-[#FFC107]`
                  }  whitespace-nowrap text-wrap max-w-14`}
                >
                  {section.title}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
