import React from "react";

import GlobalContainer from "../component/Container";
import pic from "../assets/np.png";
import pic2 from "../assets/pro.png";
import vec1 from "../assets/f-vector.png";
import property from "../assets/location.png";
import features from "../assets/f.png";
import Location from "../component/Location";
import Mail from "../component/Mail";

import Slider from "../component/Slider";

const ProjectDes = () => {
  return (
    <div className="overflow-x-hidden">
      <Slider />
      <div className="h-full w-full bg-gray-50 py-5 px-4 md:px-10 overflow-x-hidden">
        <GlobalContainer>
          <div className="mt-10 md:mt-20">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              UNN Physio Building
            </h1>
            <p className="text-sm md:text-base mb-4">
              Full Building Construction
            </p>
            <hr className="my-4" />

            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-between">
              <h1 className="text-sm md:text-base">
                Address: St. Nishava 97, Nbhd. Strelbishte, Sofia
              </h1>
              <span className="hidden md:inline">|</span>

              <h1 className="text-sm md:text-base">
                Level of completion: Rough construction
              </h1>
              <span className="hidden md:inline">|</span>

              <h1 className="text-sm md:text-base">Year: 2024</h1>
              <span className="hidden md:inline">|</span>

              <h1 className="text-sm md:text-base">Residential</h1>
            </div>

            <hr className="my-4" />
          </div>
        </GlobalContainer>

        {/* card1 */}
        <div className="py-8 w-full px-4 mt-24 md:px-16 lg:px-24 ">
          <div className="md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full ">
            {/* Text Section */}
            <div className="w-full">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                About Project
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                The exterior features a contrast of white ceramic tiles and dark
                gray vertical grid. The French windows reveal an incredible
                urban landscape overlooking Sofia and the Vitosha mountain as a
                backdrop.
              </p>
            </div>

            {/* Image Section for Desktop */}
            <div className="hidden md:block">
              <img
                src={pic}
                alt="Urban Landscape"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>
          </div>

          {/* Full-width Image for Mobile */}
          <div className="md:hidden w-full overflow-hidden">
            <img
              src={features}
              alt="Urban Landscape"
              className="w-full mt-4 rounded-xl shadow-md object-cover"
            />
          </div>
        </div>

        <div className="py-8  px-4 md:mt-24 md:px-16 lg:px-24">
          <div className="md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full  ">
            {/* Image desktop*/}
            <div className="hidden md:block w-full">
              <img
                src={pic2}
                alt="Urban Landscape"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>
            {/* Image desktop*/}

            {/* mobile text */}
            <div className="md:hidden overflow-hidden">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Details
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                ‍Common areas:Finished with first-quality granite tiles.
                Staircase: Finished with first-quality granite tiles. Glass
                railing according to architectural detail. Designer lighting
                according to architectural detail.
              </p>
            </div>

            <div className=" md:hidden w-full overflow-hidden">
              <img
                src={features}
                alt="Urban Landscape"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>
            {/* Text Section */}
            <div className="hidden md:block">
              <h1 className="text-2xl  md:text-4xl font-bold text-gray-800 mb-4">
                About Project
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                The exterior features a contrast of white ceramic tiles and dark
                gray vertical grid. The French windows reveal an incredible
                urban landscape overlooking Sofia and the Vitosha mountain as a
                backdrop.
              </p>
            </div>
          </div>
        </div>

        {/* Features desktop*/}
        <div className="py-8 hidden md:block px-4 md:mt-24 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto gap-8 items-center">
            <h1 className="text-2xl font-serif font-bold items-start md:text-start w-full  mb-10">
              Features
            </h1>
            <div className="flex flex-col md:flex-row gap-8 mb-5">
              <div className="flex flex-col items-center md:items-start w-full">
                <img
                  src={vec1}
                  alt="Feature 1"
                  className="h-10 w-10 object-contain"
                />
                <p className="mt-4 text-start md:text-left">
                  The heating in the building is centrally provided by
                  Toplofikatsiya AD. All rooms in all apartments are equipped
                  with underfloor heating, ensuring comfort, cleanliness, and
                  spaciousness.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <img
                  src={vec1}
                  alt="Feature 2"
                  className="h-10 w-10 object-contain"
                />
                <p className="mt-4 text-start md:text-left">
                  The heating in the building is centrally provided by
                  Toplofikatsiya AD. All rooms in all apartments are equipped
                  with underfloor heating, ensuring comfort, cleanliness, and
                  spaciousness.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img
                src={vec1}
                alt="Feature 3"
                className="h-10 w-10 object-contain"
              />
              <p className="mt-4 text-start md:text-left md:w-[50%]">
                The heating in the building is centrally provided by
                Toplofikatsiya AD. All rooms in all apartments are equipped with
                underfloor heating, ensuring comfort, cleanliness, and
                spaciousness.
              </p>
            </div>
          </div>
        </div>

        {/* features on mobile */}

        <div className="py-8 md:hidden overflow-hidden px-4  w-full">
          <div className="max-w-6xl mx-auto gap-8 items-start w-full">
            <h1 className="text-2xl font-serif font-bold items-start md:text-start w-full  mb-10">
              Features
            </h1>
            <div className="flex flex-col md:flex-row gap-8 mb-5">
              <div className="flex flex-col items-start md:items-start w-full">
                <img
                  src={vec1}
                  alt="Feature 1"
                  className="h-5  w-5 object-contain"
                />
                <p className="mt-4 text-start md:text-left">
                  The heating in the building is centrally provided by
                  Toplofikatsiya AD. All rooms in all apartments are equipped
                  with underfloor heating, ensuring comfort, cleanliness, and
                  spaciousness.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-start">
                <img
                  src={vec1}
                  alt="Feature 2"
                  className="h-5 w-5 object-contain"
                />
                <p className="mt-4 text-start md:text-left">
                  The heating in the building is centrally provided by
                  Toplofikatsiya AD. All rooms in all apartments are equipped
                  with underfloor heating, ensuring comfort, cleanliness, and
                  spaciousness.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-start">
              <img
                src={vec1}
                alt="Feature 3"
                className="h-5 w-5 object-contain"
              />
              <p className="mt-4 text-start md:text-left md:w-[50%]">
                The heating in the building is centrally provided by
                Toplofikatsiya AD. All rooms in all apartments are equipped with
                underfloor heating, ensuring comfort, cleanliness, and
                spaciousness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location des */}

      <div className="md:hidden overflow-x-hidden w-full">
        <div className="p-2">
          <h1 className="text-2xl text-black font-serif mb-4 font-bold">
            Location
          </h1>
          <p className="mb-3 text-slate-500">
            Nishava Residence is located at 97 Nishava Street, Strelbishte
            District, Sofia. The project is situated near major boulevards as
            well as parks, kindergartens, schools, sports complexes, shopping
            centers, and shops.
          </p>
          <p className="text-slate-500">
            This provides convenient and quick access to the building, both by
            public transportation and within walking distance. For mountain
            enthusiasts, Vitosha Mountain is only a 17-minute drive away.
          </p>
        </div>
      </div>

      <div className="mb-4 w-full overflow-x-hidden md:hidden">
        <img src={features} alt="feature" />
      </div>
      <img
        src={property}
        alt=""
        className="w-full hidden md:block h-[543px] mt-4 object-cover bg-center brightness-125"
      />
      <div className=" w-full md:hidden p-2 overflow-x-hidden">
        <h1 className="mb-2 font-bold text-2xl">Teams</h1>
        <p>
          Architect Anton Uzunov, Uzunov Architectural Studio Construction
          engineer Maya Misheva Construction engineer Aleksandar Mishev
          Architect Stefan Gerenski Visualizations: HAUSstudio
        </p>
      </div>
      <hr />

      <div className="hidden md:block overflow-x-hidden">
        <Location />
      </div>
      <Mail />
    </div>
  );
};

export default ProjectDes;









