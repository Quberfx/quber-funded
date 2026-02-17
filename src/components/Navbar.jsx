import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { QuberLogo } from "../assets/images";
import RippleButton from "./ui/RippleButton";

export default function Navbar() {
  const [active, setActive] = useState("Features");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Features", id: "pricing", type: "scroll" },
    { name: "Benefits", id: "benefits", type: "scroll" },
    { name: "About", path: "/about-us", type: "page" },
    { name: "Why Quber", id: "why-quber", type: "scroll" },
    { name: "FAQs", id: "faqs", type: "scroll" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMenuClick = (item) => {
    setActive(item.name);
    setOpen(false);

    if (item.type === "page") {
      navigate(item.path);
    } else if (item.type === "scroll") {
      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(item.id), 100);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-[88rem] mx-auto px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <img
            src={QuberLogo}
            alt="Quber Logo"
            className="h-8 w-auto object-contain"
          />
          <span>
            Quber<span className="text-blue-600">Funded</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base text-gray-600">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item)}
              className={`
                font-medium transition whitespace-nowrap cursor-pointer
                ${
                  active === item.name
                    ? "text-[#1D60E5]"
                    : "text-gray-600 hover:text-[#1D60E5]"
                }
            `}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Desktop buttons */}
          <button className="hidden md:block text-sm lg:text-base text-gray-700 font-medium cursor-pointer hover:text-gray-900 transition-colors">
            Register
          </button>

          <button className="hidden md:block text-sm lg:text-base bg-blue-600 text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-full hover:bg-blue-700 font-medium transition-colors cursor-pointer">
            Login
          </button>

          {/* MOBILE HAMBURGER */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {menu.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item)}
                className={`
                  text-left font-medium text-base py-2 px-3 rounded-lg transition-all
                  ${
                    active === item.name
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-blue-100"
                  }
                `}
              >
                {item.name}
              </button>
            ))}

            <hr className="my-2" />

            <RippleButton className="bg-white text-blue-600 hover:bg-gray-100 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold text-base justify-center transition-colors">
              Register
            </RippleButton>
            <RippleButton className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full font-semibold text-base justify-center transition-colors">
              Login
            </RippleButton>
          </div>
        </div>
      )}
    </header>
  );
}
