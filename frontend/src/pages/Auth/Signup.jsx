import React, { useState } from "react";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";
import { User, Mail, LockKeyhole } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../components/GoogleIcon.jsx";
import { useForm } from "react-hook-form";
import { userRegister } from "../../redux/authActions.js";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const respones = await dispatch(userRegister(data)).unwrap();
      toast.success(respones.message);
      navigate("/login");
    } catch (error) {
      toast.error(error || "Signup failed");
    }
  };

  return (
    <div className="max-h-screen w-screen px-3 sm:px-14 md:px-24 lg:px-36 pt-0 pb-8 mb-16 ">
      <form
        className="sm:w-5/6 md:3/5 lg:w-3/6 shadow-md shadow-slate-600 rounded-md mx-auto px-3 sm:px-6 pt-4 pb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl mb-8">
          <span className="font-bold text-blue-600">Sign</span>up
        </h2>

        {/* Username Input */}
        <div
          className={`inpt-cnt flex items-center bg-white rounded-md px-3 ${
            errors.username ? "mb-0" : "mb-5"
          }`}
        >
          <User className="text-gray-500" />
          <Input
            type="text"
            placeholder="Enter username"
            className="border-x-none border-t-0 outline-none text-lg ml-3 pl-0 pr-3 py-2 w-full border-b-[1px]
            border-b-slate-800 "
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
              minLength: {
                value: 3,
                message: "mininum 3 character is required",
              },
              maxLength: {
                value: 30,
                message: "at least 30 character is accepted",
              },
            })}
          />
        </div>

        {errors.username && (
          <p className="w-full pl-11 text-xs text-red-500 inline-block">
            {errors.username.message}
          </p>
        )}

        {/* Email Input */}
        <div
          className={`inpt-cnt flex items-center bg-white rounded-md px-3 ${
            errors.email ? "mb-0" : "mb-5"
          } `}
        >
          <Mail className="text-gray-500" />
          <Input
            type="email"
            placeholder="Enter email"
            className="outline-none text-lg ml-3 pl-0 pr-3 py-2 w-full border-b-[1px]
            border-b-slate-800 border-x-none border-t-0"
            {...register("email", {
              required: { value: true, message: "email is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email",
              },
            })}
          />
        </div>

        {errors.email && (
          <p className="w-full pl-11 text-xs text-red-500 inline-block">
            {errors.email.message}
          </p>
        )}

        {/* Password Input */}
        <div
          className={`inpt-cnt flex items-center bg-white rounded-md px-3 ${
            errors.password ? "mb-0" : "mb-5"
          } `}
        >
          <LockKeyhole className="text-gray-500" />
          <Input
            type="password"
            placeholder="Enter password"
            className={`outline-none text-lg ml-3 pl-0 pr-3 py-2 w-full border-b-[1px]
            border-b-slate-800 border-x-none`}
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "mininum 6 character is required",
              },
            })}
          />
        </div>
        {errors.password && (
          <p className="w-full pl-11 text-xs text-red-500 inline-block">
            {errors.password.message}
          </p>
        )}

        {/* Sign Up Button */}
        <Button
          type="submit"
          className="px-3 py-3 w-full border-none outline-none bg-blue-600 text-white hover:bg-blue-500 rounded hover:scale-105 transition duration-200 ease-linear mt-5"
        >
          Sign Up
        </Button>

        {/* Login Link */}
        <div className="my-4 flex justify-center gap-2 items-center flex-wrap  font-light text-lg ">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Log In
          </Link>
        </div>

        {/* OR Separator */}
        <div className="flex items-center justify-between my-3">
          <hr className="w-1/5 border-gray-300" />
          <p className="text-gray-500">or</p>
          <hr className="w-1/5 border-gray-300" />
        </div>

        {/* Google Signup Button */}
        <Button className="w-full flex justify-center gap-3 px-4 py-3 mx-auto text-white border rounded-md shadow-md bg-sky-600 transition duration-200 ease-in hover:scale-105 hover:bg-sky-500">
          <GoogleIcon className="w-5 h-5" />
          Sign up with Google
        </Button>
      </form>
    </div>
  );
};

export default Signup;

// const Signup = () => {
//   const [inputData, setInputData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const dataHandler = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(inputData);
//   };

//   return (
//     <>
//       <div className="max-h-screen w-screen px-3 sm:px-14 md:px-24 lg:px-36 py-8 mb-16 ">
//         <form
//           className=" sm:w-5/6 md:3/5 lg:w-3/6 shadow-md shadow-slate-500 rounded-md mx-auto px-3 sm:px-6 pt-4 pb-4 "
//           onSubmit={submitHandler}
//         >
//           <h2 className="text-2xl mb-8">
//             <span className="font-bold text-blue-600">Sign</span>up
//           </h2>
//           <div className="inpt-cnt flex items-center bg-white rounded-md px-3 mb-4 ">
//             <User />
//             <Input
//               type="text"
//               placeholder="Enter username"
//               className=" border-none outline-none text-lg px-3 py-2 w-full"
//               name="username"
//               onChange={dataHandler}
//               value={inputData.username}
//               key={"username"}
//             />
//           </div>
//           <div className="inpt-cnt flex items-center bg-white rounded-md px-3 mb-4 ">
//             <Mail />
//             <Input
//               type="email"
//               placeholder="Enter email"
//               className="border-non outline-none text-lg px-3 py-2 w-full"
//               name="email"
//               onChange={dataHandler}
//               value={inputData.email}
//               key={"email"}
//             />
//           </div>
//           <div className="inpt-cnt flex items-center bg-white rounded-md px-3 mb-4 ">
//             <LockKeyhole />
//             <Input
//               type="password"
//               placeholder="Enter password"
//               className="border-none outline-none text-lg px-3 py-2 w-full"
//               name="password"
//               onChange={dataHandler}
//               value={inputData.password}
//               key={"password"}
//             />
//           </div>
//           <Button
//             className="px-3 py-3 w-full border-none outline-none bg-blue-600 text-white hover:bg-blue-500 rounded hover:scale-105 transition duration-200 ease-linear"
//             onClick={submitHandler}
//             key={"signup"}
//           >
//             Sign Up
//           </Button>
//           <div className="my-4 font-light text-lg text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-600 underline">
//               Log In
//             </Link>
//           </div>
//           <div className="flex items-center justify-between my-3">
//             <hr className="w-1/5 border-gray-300" />
//             <p className="text-gray-500">or</p>
//             <hr className="w-1/5 border-gray-300" />
//           </div>
//           <Button
//             key={"google-signup"}
//             className="w-full flex justify-center gap-3 px-4 py-3 mx-auto text-white border rounded-md shadow-md bg-sky-600 transition duration-200 ease-in hover:scale-105 hover:bg-sky-500 "
//           >
//             <GoogleIcon className="w-5 h-5" />
//             Sign up with Google
//           </Button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;

{
  /* <input
              type="text"
              placeholder="Enter username"
              className=" border-none outline-none text-lg px-3 py-2 w-full"
            /> */
  {
    /* <input
              type="email"
              placeholder="Enter email"
              className="border-none outline-none text-lg px-3 py-2 w-full"
            /> */
  }
  {
    /* <input
              type="password"
              placeholder="Enter password"
              className=" border-none outline-none text-lg px-3 py-2 w-full"
            /> */
  }
}
