/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../assets/login2.jpg";
const Login = () => {
  const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.id]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       dispatch(singInStart());
  //       const url = "https://realestate-ibux.onrender.com/api/user/signin";
  //       const res = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //         credentials: "include",
  //       });
  //       const data = await res.json();
  //       if (data.success === false) {
  //         dispatch(signInFail(data.message));
  //         return;
  //       }
  //       dispatch(signInSuccess(data));
  //       navigate("/");
  //     } catch (error) {
  //       dispatch(signInFail(error.message));
  //     }
  //   };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative h-[600px] w-[400px] overflow-hidden rounded-3xl">
        <div
          className="h-full w-full bg-[100%] "
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-black bg-opacity-20 shadow ">
          <h2 className="text-center text-white text-2xl mt-[-80px]">
            Login to Your Account
          </h2>
          <form
            // onSubmit={handleSubmit}
            className="mt-10 space-y-8 px-10 py-10 text-center"
          >
            <div className="group relative">
              <input
                type="text"
                id="email"
                autoComplete="email"
                // onChange={handleChange}
                required
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none "
              />

              <label
                htmlFor="email"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Email
              </label>
            </div>
            <div className="group relative">
              <input
                // type={visible ? "text" : "password"}
                // id="password"
                // onChange={handleChange}
                required
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
              />
              <label
                htmlFor="password"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Password
                {/* { {visible ? ( }
                <AiOutlineEye
                  size={20}
                  className=" mx-20 "
                   onClick={() => setVisible(false)}
                />
                ) : (
                <AiOutlineEyeInvisible
                  size={20}
                  className=" mx-20 "
                   onClick={() => setVisible(true)}
                />
                )} */}
              </label>
            </div>
            <button
              type="submit"
              className=" border-white-500 group m-auto  inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-blue-800 focus:outline-none text-white font-bold"
            >
              Login
            </button>
          </form>
          <p className="gap-2 text-center text-white">
            Don't have an account?
            <Link
              to={"/signup"}
              className="font-semibold text-sky-400 hover:text-blue-800"
            >
              Sign up
            </Link>
          </p>
          <Link className="border-white-500 group m-auto my-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-blue-800 focus:outline-none">
            <span className="h-2.6 w-5 fill-current text-white">Google</span>
            <span className="text-sm font-medium text-white"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
