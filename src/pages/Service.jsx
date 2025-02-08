




import React from "react";
import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa6";
import propertytension from '../assets/propertytension.png'
import { FaArrowRight } from "react-icons/fa6";
const Service = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Mobile View */}
      <div className="md:hidden grid grid-cols-1 gap-4 p-4">
        <div className="relative bg-cover bg-center  h-[400px] rounded-lg" style={{backgroundImage:`url(${propertytension})`}}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>  
        </div>
        <div className="flex justify-center  text-center mt-2 w-full items-center gap-2 ">
         <p className="text-center">See More</p>
         <p className="h-10 flex items-center justify-center w-10 bg-[#6D142A] text-white"><FaArrowRight/></p>
         </div>
        <div className="relative bg-cover bg-center  h-[400px] rounded-lg" style={{backgroundImage:`url(${propertytension})`}}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>  
        </div>
        <div className="flex justify-center  text-center mt-2 w-full items-center gap-2 ">
         <p className="text-center">See More</p>
         <p className="h-10 flex items-center justify-center w-10 bg-[#6D142A] text-white"><FaArrowRight/></p>
         </div>
        <div className="relative bg-cover bg-center  h-[400px] rounded-lg" style={{backgroundImage:`url(${propertytension})`}}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>  
        </div>
         <div className="flex justify-center  text-center mt-2 w-full items-center gap-2 ">
         <p className="text-center">See More</p>
         <p className="h-10 flex items-center justify-center w-10 bg-[#6D142A] text-white"><FaArrowRight/></p>
         </div>
      </div>
       <hr className="mt-10" />

      {/* for any use on the mobile */}

       {/* Content */}
          {/* <div className="absolute bottom-5 left-5 right-5 text-white space-y-3">
            <h2 className="text-lg font-semibold">UNN Physio Building</h2>
            <p className="text-sm">
              Full Building Construction
            </p>
            <motion.button
              className="bg-[#6D142a] text-white px-4 py-2 rounded-md w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowRight/>
            </motion.button>
          </div> */}

      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-img"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute w-full flex items-center justify-center bottom-10 px-4">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Section */}
            <div className="flex flex-col space-y-3 text-start md:text-left w-full">
              <div className="md:w-[290px] w-full gap-2 flex flex-col items-start text-start p-2 ">
                <motion.button
                  className="bg-white px-4 py-2 w-full  md:w-[300px] mx-auto md:mx-0"
                  // whileHover={{ width: "100%" }}
                  // transition={{ duration: 0.3 }}
                >
                  UNN Physio Building
                </motion.button>
                <motion.p
                  className="bg-[#6D142a] text-white px-4 py-2  md:w-[290px] text-start mx-auto md:mx-0"
                  // whileHover={{ width: "100%" }}
                  // transition={{ duration: 0.3 }}
                >
                  UNN Physio Building
                </motion.p>
              </div>

              <p className="text-white text-sm md:text-base px-2">
                We were in charge of the large louver-like grid elements on the
                building's exterior. The design required extremely high
                construction and installation precision, which we achieved
                through thorough quality management.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full flex justify-center md:w-[30%]">
              <motion.div
                className="w-[80%] md:w-full border border-white rounded-full text-white px-6 py-1 hover:bg-white hover:text-black transition duration-300"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <button>Discover Project</button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;




