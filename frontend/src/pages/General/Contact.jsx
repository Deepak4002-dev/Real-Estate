import React from "react";

// const Contact = () => {
//   return (
//     <div
//       id="contact"
//       className="w-screen min-h-screen px-5 sm:px-20 md:px-20 lg:px-30 py-2 flex flex-col justify-center items-center pt-5 pb-14 "
//     >
//       <h1 className="text-4xl w-full text-center mt-5 mb-4 font-extralight cursor-pointer">
//         {" "}
//         Contact Us
//       </h1>
//       <form
//         action=""
//         className=" px-3 sm:px-8 py-3  md:4/5 lg:w-4/6 w-full shadow-lg shadow-slate-300 rounded-lg bg-[#faf9f9]"
//       >
//         <div
//           key="name"
//           className="input-cnt rounded-md w-full mt-3 flex justify-start border-gray-800 border-[0.5px] hover:shadow-lg hover:shadow-slate-100"
//         >
//           <i className="fa-regular fa-user text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-r-gray-800 border-r-[0.5px]"></i>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="px-4 py-3 bg-transparent outline-none border-none"
//             name="name"
//           />
//         </div>
//         <div
//           key="email"
//           className=" input-cnt border-gray-800 border-[0.5px] rounded-md w-full mt-3 flex justify-start hover:shadow-lg hover:shadow-slate-100"
//         >
//           <i className="fa-regular fa-envelope text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-gray-800 border-r-[0.5px] "></i>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 bg-transparent outline-none border-none"
//             name="email"
//           />
//         </div>
//         <div
//           key="textarea"
//           className="input-cnt  rounded-md w-full mt-3 h-64 flex border-zinc-800 border-[0.5px] hover:shadow-md hover:shadow-slate-100"
//         >
//           <i className="fa-regular fa-message text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-gray-800 border-r-[0.5px] h-full leading-[14rem]"></i>
//           <textarea
//             className="w-full h-full py-3 px-4 outline-none border-none  bg-transparent"
//             placeholder="Enter message..."
//             name="message"
//           ></textarea>
//         </div>
//         <input
//           type="submit"
//           value={"Submit"}
//           className="w-full px-4 py-3 text-lg rounded-md border-[0.5px]
//             border-gray-800 mt-3 submit-button hover:shadow-lg hover:shadow-slate-100
//             cursor-pointer bg-blue-500 text-white"
//         />
//       </form>
//     </div>
//   );
// };

// const Contact = () => {
//   return (
//     <div
//       id="contact"
//       className=" w-screen min-h-screen px-1 sm:px-20 md:px-20 lg:px-30 py-2 flex flex-col justify-center items-center pt-5 pb-14 overflow-hidden "
//     >
//       <h1 className=" text-3xl md:text-4xl w-full text-center mt-5 mb-4 font-extralight cursor-pointer tracking-tight">
//         <span className="text-sky-700 font-semibold">Contact</span>
//         <span className="font-extralight text-3xl"> With Us</span>
//       </h1>
//       <form
//         action=""
//         className=" px-3 sm:px-8 py-3  md:4/5 lg:w-4/6 w-full rounded-lg shadow-lg shadow-slate-400"
//       >
//         {/*   */}
//         <div
//           key="name"
//           className="input-cnt rounded-md w-full mt-3 flex justify-start bg-white  hover:shadow-lg hover:shadow-slate-100 border-gray-800 border-[0.5px]"
//         >
//           <i className="fa-regular fa-user text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-r-gray-800 border-r-[0.5px]"></i>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="px-4 py-3 bg-transparent outline-none border-none"
//             name="name"
//           />
//         </div>
//         <div
//           key="email"
//           className=" input-cnt  rounded-md w-full mt-3 flex justify-start hover:shadow-lg hover:shadow-slate-100 bg-white border-gray-800 border-[0.5px]"
//         >
//           <i className="fa-regular fa-envelope text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-gray-800 border-r-[0.5px] "></i>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 bg-transparent outline-none border-none"
//             name="email"
//           />
//         </div>
//         <div
//           key="textarea"
//           className="input-cnt  rounded-md w-full mt-3 h-64 flex  hover:shadow-md hover:shadow-slate-100 bg-white border-gray-800 border-[0.5px]"
//         >
//           <i className="fa-regular fa-message text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-gray-800 border-r-[0.5px] h-full leading-[14rem]"></i>
//           <textarea
//             className="w-full h-full py-3 px-4 outline-none border-none  bg-transparent"
//             placeholder="Enter message..."
//             name="message"
//           ></textarea>
//         </div>
//         <input
//           type="submit"
//           value={"Submit"}
//           className="w-full px-4 py-3 text-lg rounded-md  mt-3 submit-button hover:shadow-lg hover:shadow-slate-100
//             cursor-pointer bg-blue-600 text-white"
//         />
//       </form>
//     </div>
//   );
// };

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen min-h-screen px-4 sm:px-8 md:px-12 lg:px-32 py-10 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-2"
    >
      {/* Contact Information Section */}
      <div className="w-full pl-8 sm:px-2 lg:w-1/2 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
        <h1 className="text-3xl md:text-4xl text-center lg:text-left font-extralight cursor-pointer tracking-tight mb-10">
          <span className="text-sky-700 font-semibold">Contact</span>
          <span className="font-extralight text-3xl"> With Us</span>
        </h1>

        <div className="w-full space-y-6">
          <div className="flex items-center">
            <i className="fa-solid fa-envelope text-2xl text-sky-700 mr-4"></i>
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p className="text-gray-600">himalayaRealEstate90@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-phone text-2xl text-sky-700 mr-4"></i>
            <div>
              <p className="text-lg font-semibold">Phone</p>
              <p className="text-gray-600">+977 (123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-location-dot text-2xl text-sky-700 mr-4"></i>
            <div>
              <p className="text-lg font-semibold">Location</p>
              <p className="text-gray-600">
                123 New Road Street,Pokhara, Nepal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2 mt-14 sm:mt-1">
        <div className="mb-2 w-full ">
          <h1 className="text-3xl md:text-4xl mx-auto text-center font-extralight">
            <span className="text-blue-700 font-semibold sm:text-3xl">
              Contact
            </span>{" "}
            Form
          </h1>
        </div>
        <form
          action=""
          className="px-6 py-8 rounded-lg shadow-lg shadow-slate-400 bg-white"
        >
          <div
            key="name"
            className="input-cnt rounded-md w-full mt-3 flex justify-start bg-white hover:shadow-lg hover:shadow-slate-100 border-gray-800 border-[0.5px]"
          >
            <i className="fa-regular fa-user text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-r-gray-800 border-r-[0.5px]"></i>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-3 bg-transparent outline-none border-none"
              name="name"
            />
          </div>
          <div
            key="email"
            className="input-cnt rounded-md w-full mt-3 flex justify-start hover:shadow-lg hover:shadow-slate-100 bg-white border-gray-800 border-[0.5px]"
          >
            <i className="fa-regular fa-envelope text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-gray-800 border-r-[0.5px]"></i>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 bg-transparent outline-none border-none"
              name="email"
            />
          </div>
          <div
            key="textarea"
            className="input-cnt rounded-md w-full mt-3 h-64 flex hover:shadow-md hover:shadow-slate-100 bg-white border-gray-800 border-[0.5px]"
          >
            <i className="fa-regular fa-message text-xl px-4 py-3 rounded-tl-md rounded-bl-md border-gray-800 border-r-[0.5px] h-full leading-[14rem]"></i>
            <textarea
              className="w-full h-full py-3 px-4 outline-none border-none bg-transparent"
              placeholder="Enter message..."
              name="message"
            ></textarea>
          </div>
          <input
            type="submit"
            value={"Submit"}
            className="w-full px-4 py-3 text-lg rounded-md mt-3 submit-button hover:shadow-lg hover:shadow-slate-100 cursor-pointer bg-blue-600 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
