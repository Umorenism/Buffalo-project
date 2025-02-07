import React, { useEffect, useState } from "react";
import picImage from "../assets/aboutimg.png";
import openImage from "../assets/open.png";
import { motion } from "framer-motion";
import vec1 from "../assets/v1.png";
import vec2 from "../assets/v2.png";
import vec3 from "../assets/v3.png";
import vec4 from "../assets/v4.png";
const AboutFlow = () => {
  const counters = [26, 400, 23, 61000, 3];
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((target, index) => {
      const increment = target / 100;
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < target) {
            newCounts[index] = Math.min(newCounts[index] + increment, target);
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="w-full overflow-x-hidden ">
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${picImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center" />
      </div>

      <div className="py-10  md:mt-[150px] w-full flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center text-white">
          <div className="p-2">
            <h1 className="text-3xl font-bold text-[#6D142A]">
              {Math.floor(counts[0])}
            </h1>
            <p className="text-sm text-slate-900">Years in the Industry</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#6D142A]">
              {Math.floor(counts[1])}+
            </h1>
            <p className="text-sm text-slate-900">Satisfied</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#6D142A]">
              {Math.floor(counts[2])}
            </h1>
            <p className="text-sm text-slate-900">Completed projects</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#6D142A]">
              {Math.floor(counts[3])}+
            </h1>
            <p className="text-sm text-slate-900">Built area</p>
          </div>
          <div>
            <h1 className="text-3xl  font-bold text-[#6D142A]">
              {Math.floor(counts[4])}
            </h1>
            <p className="text-sm text-slate-900">Upcoming</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-10 md:mt-[150px] w-full flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-black max-w-5xl px-4">
          <div className="flex md:flex-col items-center">
            <p className="h-1 w-20 bg-orange-500 mb-4"></p>
            <h1 className="text-xl font-semibold">
              Our Vision <br /> and Mission
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Vision</h1>
            <p className="text-sm text-gray-700">
              To be a beacon of innovation and excellence in Nigeria’s
              construction and real estate sectors, creating sustainable
              solutions that shape tomorrow.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Mission</h1>
            <p className="text-sm text-gray-700">
              To be a beacon of innovation and excellence in Nigeria’s
              construction and real estate sectors, creating sustainable
              solutions that shape tomorrow.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-10 md:mt-[150px] w-full flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-black max-w-5xl px-4">
          <div className="flex md:flex-col items-center">
            <p className="h-1 w-20 bg-orange-500 mb-4"></p>
            <h1 className="text-xl font-semibold">
              Our Core <br /> Values
            </h1>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex  w-full items-start">
              <img src={vec1} alt="" />
              <h1 className="text-xl font-bold mb-2">Vision</h1>
            </div>
            <p className="text-sm text-gray-700">
              At Buffalo & Bay, our foundation is built on the <span>4P’s</span>{" "}
              of Excellence:
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex  w-full items-start">
              <img src={vec2} alt="" />
              <h1 className="text-xl font-bold mb-2">Precision</h1>
            </div>
            <p className="text-sm text-gray-700">
              Delivering projects with unmatched attention to detail.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2"></h1>
            <p className="text-sm text-gray-700"></p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex w-full items-start">
              <img src={vec3} alt="" />
              <h1 className="text-xl font-bold mb-2">Passion</h1>
            </div>
            <p className="text-sm text-gray-700">
              Bringing dedication and enthusiasm to every project.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex  w-full items-start">
              <img src={vec4} alt="" />
              <h1 className="text-xl font-bold mb-2">Partnership</h1>
            </div>
            <p className="text-sm text-gray-700">
              Collaborating with clients, communities, and stakeholders to
              achieve shared success
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="py-10 hidden md:block  md:mt-[150px] w-full justify-center items-center mb-3">
        <motion.img
          src={openImage}
          alt="About"
          className="w-full h-auto max-w-5xl object-cover"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <hr />
      <div className="md:mt-20 flex justify-center items-center  py-6">
        <div className="max-w-5xl flex-col md:block  flex w-full justify-center gap-10 p-4">
          <div className="flex">
            <div className="flex justify-center">
              <p className="h-1 w-20 mt-1 bg-orange-500"></p>
              <h1>Acess</h1>
            </div>
          </div>
          <div
            className="w-full md:w-[
818px] h-64 md:h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36856066.273693986!2d36.85509089715201!3d1.7417735632926017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1738755019122!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFlow;
