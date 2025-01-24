import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="footer w-full px-10 sm:px-15 md:px-24 py-10 bg-slate-900 box-border">
        <div className="first-section flex flex-col md:flex-row md:justify-between justify-start items-start mx-auto gap-16">
          <div className="one w-full md:w-5/12 ">
            <img src={assets.logo_dark} alt="logo_dark" className="mb-5" />
            <p className=" text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eaque
              quia delectus accusamus inventore corporis necessitatibus eum.
            </p>
          </div>
          <div className="two w-full md:w-3/12">
            <div className="text-lg font-semibold text-gray-200 mt-1 mb-5">
              Company
            </div>
            <ul className=" text-gray-400 flex flex-col gap-3 text-sm">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="third w-full md:w-4/12">
            <div className="text-gray-200 text-lg font-semibold mt-1 mb-5 ">
              Subscribe to our newsletter
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="flex gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="py-1.5 px-2 outline-none bg-slate-800 rounded-md text-gray-300"
                />
                <button className="bg-blue-500 text-white px-1.5 lg:px-2.5 py-2.5 rounded-md text-sm font-medium">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="last-section mt-20 flex w-full mx-auto  ">
          <div className="text-gray-400 mx-auto w-full text-[15px] font-normal text-center border-t-[1px] border-gray-500 pt-5">
            Copyright 2024 © Himalaya Invest & Development Company Pvt. Ltd. All
            Right Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
