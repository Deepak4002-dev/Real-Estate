import React from "react";
import Header from "../../components/Header";
import Home from "./Home";
import Properties from "../../components/Properties";

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full min-h-screen relative bg-center bg-cover flex justify-center items-center "
        style={{ backgroundImage: 'url("/header_img.png")' }}
      >
        <Header />
        <Home />
      </div>
    </>
  );
};

export default HeroSection;
