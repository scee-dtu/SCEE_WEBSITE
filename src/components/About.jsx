import React from "react";
import { Aim, DTU, group, Plan } from "../assets/image";

const About = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background with soft overlay */}
      <img
        src={DTU}
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover scale-105 opacity-30 -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black -z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-16 py-24 space-y-28">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-500 bg-clip-text text-transparent tracking-wide">
          About SCEE
        </h2>

        {/* WHO WE ARE */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase">
              Who We Are
              <span className="block w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 rounded-full"></span>
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              The Society for Civil and Environmental Engineers (SCEE-DTU) is one of the most
              prominent technical societies at Delhi Technological University. It is a vibrant
              student-led community that brings together undergraduate and postgraduate students
              passionate about civil and environmental engineering. Guided by experienced faculty,
              we foster an environment of growth, creativity, and professional development.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="p-[3px] rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-xl">
              <img
                src={group}
                alt="Who We Are"
                className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* OUR AIM */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase">
              Our Aim
              <span className="block w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 rounded-full"></span>
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Our primary aim is to bridge the gap between theoretical learning and practical
              application in civil and environmental engineering. Through workshops, seminars,
              technical sessions, and field visits, we empower students with industry-relevant skills
              and leadership qualities.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="p-[3px] rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-xl">
              <img
                src={Aim}
                alt="Our Aim"
                className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* ESTABLISHMENT */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase">
              Establishment
              <span className="block w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 rounded-full"></span>
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Established in 2009, SCEE-DTU is the oldest technical society of the Civil Engineering
              Department at Delhi Technological University. Over the years, it has built a strong
              legacy of impactful events, industry collaborations, and an inclusive culture for
              aspiring engineers.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="p-[3px] rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-xl">
              <img
                src={DTU}
                alt="Establishment"
                className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* PLAN OF ACTION */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase">
              Plan of Action
              <span className="block w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 rounded-full"></span>
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Our action plan focuses on student engagement, skill enhancement, and holistic
              development. We organize technical workshops, industrial visits, paper presentations,
              and national-level competitions to strengthen both academic and practical skills.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="p-[3px] rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-xl">
              <img
                src={Plan}
                alt="Plan of Action"
                className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
