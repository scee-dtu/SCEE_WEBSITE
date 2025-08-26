import React from 'react';
import { Link } from 'react-router-dom';
import { DTU, secelogo } from '../assets/image';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <img
        src={DTU}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-75 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10"></div>

      {/* Soft Blue Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-teal-400/10 blur-3xl animate-pulse z-10"></div>

      {/* Center Content */}
      <div className="relative z-20 px-6 space-y-6 flex flex-col items-center justify-center h-full">
        <img
          src={secelogo}
          alt="SCEE Logo"
          className="mx-auto h-24 md:h-36 w-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition duration-500"
        />

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-white">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SCEE
          </span>
        </h2>

        <h3 className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
          Society for Civil and Environmental Engineers <br />
          at Delhi Technological University
        </h3>

        {/* Call to Action */}
        <div className="pt-6">
          <Link
            to="/about"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition duration-300"
          >
            Explore More
          </Link>
        </div>

        {/* 🔔 Announcement Box */}
        <div className="mt-10 w-full max-w-3xl px-6 hover:scale-105 transition duration-300">
          <div className="bg-gradient-to-r from-cyan-600/90 to-blue-700/90 backdrop-blur-md rounded-2xl shadow-xl border border-cyan-400/30 p-6 animate-fadeIn">
            <h4 className="text-xl font-semibold text-white flex items-center gap-2">
              🔔 Announcements
            </h4>
            <p className="mt-3 text-lg md:text-xl font-medium text-cyan-200 animate-pulse">
              🌟 Parichay 2025 – Coming Soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
