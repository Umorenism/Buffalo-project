import React from "react";
import piv from '../assets/mail.png'

const Mail = () => {
  return (
    <div className="w-full p-4 flex flex-col items-center">
      <div
        className="w-[1730px] flex items-center justify-center h-[543px] top-[4235px] text-center "
      >
       <div className="max-w-sm  overflow-hidden  bg-white">
      
      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="uppercase font-semibold text-gray-800">
        Next Project
        </h2>
        
        {/* Description */}
        <h2 className="text-gray-600  text-2xl">
        Shoppers Pride Mall
        </h2>
      </div>

      {/* Image Section */}
      <img
        src={piv}
        alt="Card image"
        className="md:w-[558px] w-full h-[400px] object-cover"
      />
    </div>
     </div>
     </div>
  );
};

export default Mail;
