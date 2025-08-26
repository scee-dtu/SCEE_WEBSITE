import React from "react";
import { aarambh, samvaad, envirosity, parichay } from "./utils/constants";
import { group } from "../assets/image";

const Events = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image with Parallax feel */}
      <img
        src={group}
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover -z-10 opacity-40 scale-105 animate-pulse"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 -z-10"></div>

      {/* Heading */}
      <div className="relative flex flex-col items-center justify-center text-center py-24 lg:py-40">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-widest drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent animate-pulse">
          EVENTS
        </h2>
        <p className="mt-6 max-w-2xl text-gray-300 text-lg md:text-xl animate-fadeIn">
          A glimpse into our flagship fests, conclaves, and celebrations ✨
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 space-y-20 pb-20">
        {/* Aarambh */}
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-green-400 to-green-600 opacity-30 blur-lg"></div>
          <h2 className="relative text-3xl md:text-4xl font-bold mb-6 pl-4 border-l-4 border-green-400">
            Aarambh (Invictus)
          </h2>
          <p className="relative text-base md:text-lg leading-relaxed text-gray-200 mb-8">
            Invictus is the annual Technical Fest DTU organized in February each
            year. Our Society showcases various projects and research papers,
            and we also organize various Technical and Non-Technical events that
            include fun games and nail-biting competitions, under the banner of
            “Aarambh.”
          </p>
          <div className="relative flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x snap-mandatory">
            {aarambh.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center transform hover:scale-105 hover:-rotate-1 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Aarambh ${i + 1}`}
                  className="rounded-2xl shadow-xl w-72 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        
        {/* Parichay */}
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-pink-400 to-pink-600 opacity-30 blur-lg"></div>
          <h2 className="relative text-3xl md:text-4xl font-bold mb-6 pl-4 border-l-4 border-pink-400">
            Parichay '24
          </h2>
          <p className="relative text-base md:text-lg leading-relaxed text-gray-200 mb-8">
            Parichay '24, the orientation program organized by the Society for Civil and Environmental Engineers (SCEE-DTU), is a signature annual event at Delhi Technological University dedicated to welcoming new students to the department’s vibrant academic community. Held in October each year, Parichay offers an immersive experience through inspiring talks, interactive sessions, and opportunities for incoming students to connect with seniors and faculty.
            <br /><br />
            This year’s edition was especially memorable, featuring celebrated speakers such as Awadh Ojha, whose guidance and motivational insights transformed the atmosphere into one of excitement and aspiration. Designed to help students acclimate to campus life, the program blends practical orientation about courses, campus culture, and society activities with sessions aimed at personal development.
          </p>
          <div className="relative flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x snap-mandatory">
            {parichay.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center transform hover:scale-105 hover:-rotate-1 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Parichay ${i + 1}`}
                  className="rounded-2xl shadow-xl w-72 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Samvaad */}
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 blur-lg"></div>
          <h2 className="relative text-3xl md:text-4xl font-bold mb-6 pl-4 border-l-4 border-blue-400">
            Samvaad 2025
          </h2>
          <p className="relative text-base md:text-lg leading-relaxed text-gray-200 mb-8">
            Samvaad 2025: Business Sustainability Conclave, was an attempt at
            propagating sustainable and innovative solutions to pressing global
            challenges, in collaboration with Y20, an official engagement group
            under G20. The event saw participation from across the country and
            boasted an attractive prize pool of Rs. 25,000 plus several goodies.
          </p>
          <div className="relative flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x snap-mandatory">
            {samvaad.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center transform hover:scale-105 hover:-rotate-1 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Samvaad ${i + 1}`}
                  className="rounded-2xl shadow-xl w-72 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Envirosity */}
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-30 blur-lg"></div>
          <h2 className="relative text-3xl md:text-4xl font-bold mb-6 pl-4 border-l-4 border-yellow-400">
            Envirosity 5.0
          </h2>
          <p className="relative text-base md:text-lg leading-relaxed text-gray-200 mb-8">
            Every year, we celebrate World Environment Day on 5th June, by
            hosting our flagship event - ‘Envirosity’. This year, we hosted 4
            fascinating competitions including a case study competition titled
            ‘Case-A-Thon’ and a photography competition titled ‘Quarant
            Clicked’.
          </p>
          <div className="relative flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x snap-mandatory">
            {envirosity.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center transform hover:scale-105 hover:-rotate-1 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Envirosity ${i + 1}`}
                  className="rounded-2xl shadow-xl w-72 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Events;
