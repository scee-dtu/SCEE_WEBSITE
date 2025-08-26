import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import { teamAdministrative, teamSenior } from "./utils/constants";
import { group } from "../assets/image";

const Team = () => {
  const [activeTab, setActiveTab] = useState("administrative"); // default tab

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <img
        src={group}
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover z-0 scale-110 brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 z-0"></div>

      {/* Page Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center lg:h-[60vh] text-center px-6">
        <h2 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text lg:text-8xl md:text-6xl sm:text-4xl font-extrabold tracking-wide drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
          OUR TEAM
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Meet the passionate individuals driving innovation, creativity, and
          leadership in SCEE.
        </p>
      </div>

      {/* Tabs */}
      <div className="relative z-10 flex gap-6 mt-6">
        <button
          onClick={() => setActiveTab("administrative")}
          className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
            activeTab === "administrative"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
              : "bg-white/10 text-gray-300 hover:bg-white/20"
          }`}
        >
          Administrative Council
        </button>

        <button
          onClick={() => setActiveTab("senior")}
          className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
            activeTab === "senior"
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105"
              : "bg-white/10 text-gray-300 hover:bg-white/20"
          }`}
        >
          Senior Council
        </button>
      </div>

      {/* Team Section */}
      <div className="relative z-10 w-full py-16 flex flex-col items-center px-6">
        {activeTab === "administrative" && (
          <>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 
              bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Administrative Council
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl w-full">
              {teamAdministrative.map((member, index) => (
                <div
                  key={index}
                  className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <TeamCard
                    img={member.photo}
                    name={member.name}
                    role={member.position}
                    className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 group-hover:border-cyan-400/50 transition duration-500 p-4"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "senior" && (
          <>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 
              bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Senior Council
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl w-full">
              {teamSenior.map((member, index) => (
                <div
                  key={index}
                  className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <TeamCard
                    img={member.photo}
                    name={member.name}
                    role={member.position}
                    className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 group-hover:border-cyan-400/50 transition duration-500 p-4"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Team;
