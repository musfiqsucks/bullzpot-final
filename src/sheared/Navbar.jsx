import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <>
      <nav className="relative bg-[#ECF4FF]">
        <div className="container max-w-screen-xl w-10/12 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="mainlogo"
                src="https://i.ibb.co/ZSxJg78/Bullzpot-1-removebg-preview.png"
                alt=""
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={handleMenuToggle}
                type="button"
                className="text-gray-500"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-primary md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink
                style={linkStyle}
                className="my-2 text-lg color-primary font-semibold transition-colors duration-300 transform   md:mx-4 md:my-0"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={linkStyle}
                className="my-2 text-lg color-primary font-semibold transition-colors duration-300 transform   md:mx-4 md:my-0"
                to="/about-us"
              >
                About
              </NavLink>
              <NavLink
                style={linkStyle}
                className="my-2 text-lg color-primary font-semibold transition-colors duration-300 transform   md:mx-4 md:my-0"
                to="/reviews"
              >
                Reviews
              </NavLink>
              <NavLink
                style={linkStyle}
                className="my-2 text-lg color-primary font-semibold transition-colors duration-300 transform   md:mx-4 md:my-0"
                to="/pricing"
              >
                Pricing
              </NavLink>
              {/*   <NavLink
                style={linkStyle}
                className="my-2 text-lg color-primary font-semibold transition-colors duration-300 transform   md:mx-4 md:my-0"
                to="/signin"
              >
                Sing In
          </NavLink> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
