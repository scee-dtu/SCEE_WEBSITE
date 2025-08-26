import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { secelogo } from "../assets/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = ["Home", "About", "Events", "Team", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur-md shadow-lg">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-3">
        <img
          src={secelogo}
          alt="SCEE Logo"
          className="h-10 w-10 rounded-full shadow-lg shadow-cyan-500/40"
        />
        <h1 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          SCEE
        </h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-white text-sm uppercase font-semibold">
        {navItems.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <li key={item}>
              <Link
                to={path}
                className={`relative group ${
                  isActive ? "text-cyan-400" : "text-white"
                }`}
              >
                <span className="transition duration-300 group-hover:text-cyan-400">
                  {item}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="absolute top-16 right-4 bg-black/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl shadow-cyan-500/20 md:hidden animate-fade-in">
          <ul className="flex flex-col space-y-4 text-white text-lg font-medium">
            {navItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <li key={item}>
                  <Link
                    to={path}
                    className={`block transition ${
                      isActive ? "text-cyan-400" : "hover:text-cyan-400"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
