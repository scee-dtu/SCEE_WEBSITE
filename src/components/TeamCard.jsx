import React from "react";

const TeamCard = ({ img, name, role }) => {
  return (
    <div
      className="flex flex-col items-center text-center 
      bg-gradient-to-br from-white/10 via-white/5 to-transparent 
      backdrop-blur-xl rounded-2xl shadow-xl p-6 
      border border-white/20 hover:border-cyan-400/60 
      hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
      transition-all duration-500"
    >
      {/* Profile Image with Glow */}
      <div className="relative w-40 h-44">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-xl 
          shadow-md border-2 border-cyan-400 
          transition-all duration-500 hover:border-pink-400"
        />
        <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Name */}
      <h3
        className="mt-4 text-2xl font-bold text-white drop-shadow-md
        hover:text-transparent hover:bg-clip-text 
        hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-400 
        transition-all duration-500"
      >
        {name}
      </h3>

      {/* Role */}
      <p className="mt-2 text-cyan-300 text-lg font-medium tracking-wide uppercase">
        {role}
      </p>
    </div>
  );
};

export default TeamCard;
