import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section - Logo & About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SCEE
            </span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Society for Civil and Environmental Engineers <br />
            at Delhi Technological University
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
          <ul className="space-y-2 text-white/70">
            <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
            <li><Link to="/events" className="hover:text-cyan-400 transition">Events</Link></li>
            <li><Link to="/team" className="hover:text-cyan-400 transition">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
          <p className="text-white/70 text-sm">
            Delhi Technological University <br />
            New Delhi, India
          </p>
          <p className="text-white/70 text-sm">✉️ scee@dtu.ac.in</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        © {new Date().getFullYear()} SCEE, DTU. All Rights Reserved.
        <br />
        <span className="text-white/70">
          🚀 Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/param-gupta-9206092b9/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Param Gupta
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
