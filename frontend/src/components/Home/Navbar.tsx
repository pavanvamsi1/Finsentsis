import React from "react";
import logo from "../../assets/logos/finsentsis.png";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solution", path: "/solution" },
    { name: "Features", path: "/features" },
    { name: "Leadership", path: "/leadership" },
    { name: "Careers", path: "/careers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-[9999] px-10 py-6">
      <div className="max-w-[1400px] mx-auto relative flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3 z-10">
          <div className="w-[40px] h-[40px] bg-black rounded-xl border border-white/10 flex items-center justify-center">
            <img src={logo} alt="logo" className="w-6 h-6" />
          </div>
          <span className="text-white text-[18px] font-medium">
            Finsentsis
          </span>
        </div>

        {/* CENTER NAV */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
          <div
            className="
              flex items-center gap-8
              px-12 py-3
              rounded-full
              bg-black/40
              backdrop-blur-2xl
              border border-white/10
              shadow-[0_0_60px_rgba(255,255,255,0.06)]
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"} // important for Home
                className={({ isActive }) =>
                  `relative text-sm font-medium transition duration-300 ${
                    isActive
                      ? "text-[#9AFF2E] drop-shadow-[0_0_8px_#9AFF2E] drop-shadow-[0_0_16px_#9AFF2E]"
                      : "text-white hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* RIGHT: CTA */}
        <div className="hidden md:flex z-10">
          <NavLink
            to="/requestademo"
            className="
              px-7 py-3
              rounded-full
              bg-black/50
              backdrop-blur-xl
              border border-white/10
              text-white text-sm font-medium
              hover:bg-white/10 transition
            "
          >
            Join our early access ↗︎
          </NavLink>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
