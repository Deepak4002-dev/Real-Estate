import React, { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import { assets, projectsData } from "../../assets/assets.js";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCard, setShowCard] = useState(1);

  const previousProperty = () => {
    setCurrentIndex((pre) => (pre === 0 ? projectsData.length - 1 : pre - 1));
  };
  const nextProperty = () => {
    setCurrentIndex((pre) => (pre + 1) % projectsData.length);
  };

  useEffect(() => {
    const updateShowCard = () => {
      if (window.innerWidth >= 1024) {
        setShowCard(projectsData.length);
      } else {
        setShowCard(1);
      }
    };
    updateShowCard();
    window.addEventListener("resize", updateShowCard);
    return () => window.removeEventListener("resize", updateShowCard);
  }, []);

  return (
    <>
      <div
        className="w-screen px-6 sm:px-14 md:px-24 lg:px-28 mt-12 mb-10 overflow-hidden "
        id="property"
      >
        <h2 className="font-light text-2xl sm:text-3xl text-neutral-900 mb-6">
          Buy Your Dream
          <span className="font-extrabold text-3xl sm:text-4xl text-sky-600 ">
            {" "}
            P
          </span>
          roperty
        </h2>
        <div className="flex justify-end items-center mb-10 flex-nowrap">
          <Button label={"Previous Property"} Click={previousProperty}>
            <ArrowLeft className="text-base" />
          </Button>
          <Button label={"Next Property"} Click={nextProperty}>
            <ArrowRight className="text-base " />
          </Button>
        </div>

        <div className="overflow-hidden ">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out "
            style={{
              transform: `translateX(-${(currentIndex * 100) / showCard}%)`,
            }}
          >
            {projectsData.map((property, index) => (
              <div
                key={index}
                className="w-full sm:w-1/4 flex-shrink-0 relative"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-auto mb-14"
                />
                <div className="absolute left-0 bottom-5 right-0 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {property.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {property.price}
                      <span>|</span>
                      {property.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-3">
          <Link
            to="/Allproperties"
            className="text-white bg-sky-600 rounded-sm p-1.5 sm:p-2 text-lg float-right"
          >
            Show More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Properties;
