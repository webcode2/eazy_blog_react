import React, { useState } from "react";
import Header from "../../components/shared/header";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Error from "../../components/error_text";

function Login() {
  const { register, handleSubmit ,formState:{errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  
  return (
    <div className="">
      <Header />
      <section className="w-full   xl:px-8 lg:px-24 lg:py-28 md:py-20 md:px-44 px-4 py-16 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Secure Access to Your Digital World{" "}
              </h2>
              <p className="text-xl text-gray-600 md:pr-16">
                Join us, and unlock the power of technology at your fingertips.{" "}
                <br />
                Log in to explore, learn, and connect with TechConnect today.{" "}
              </p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5   ">
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden border-2 bg-white rounded-lg border-b-2 border-gray-300 shadow-2xl px-7">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <h3 className="mb-6 text-2xl font-medium text-center">
                    Sign in to your Account
                  </h3>

                  <input
                    {...register("email", {
                      maxLength: 150,
                      required: true,
                      pattern:
                        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                    })}
                    autoComplete="off"
                    className="block  rounded-lg w-full px-4 py-3 mb-4 border-2  border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none "
                    placeholder="Email address"
                    aria-invalid={errors.email?"true":"false"}
                  />
                  {errors.email?.type==="required"&&(<Error message={"Email is required"}/>)
                  || errors.email?.type=="pattern"&&(<Error message={"Invalid Email"}/>)
                  || errors.email?.type=="maxLength"&&(<Error message={"Email too long"}/>)
                  }
                  <input
                    {...register("password", {
                      maxLength: 50,
                      minLength: 6,
                      required: true,
                    })}
                    type="password"
                    className="block w-full px-4 py-3 mb-4 border-2 rounded-lg autofill:no  border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none  "
                    placeholder="Password"
                    aria-invalid={errors.password?"true":"false"}
                  />
                  {errors.password?.type==="required"&&(<Error message={"Password is required"}/>)
                  || errors.password?.type==="minLength"&&(<Error message={"Password too short"}/>)
                  || errors.password?.type==="maxLength"&&(<Error message={"Password too long"}/>)
                  
                }

                  <div className="block">
                    <button className="w-full px-3 py-4 font-medium text-black rounded-md bg-green-500 ">
                      Log in{" "}
                    </button>
                  </div>
                  <p className="w-full mt-4 text-sm text-center text-gray-500">
                    Don't have an account?
                    <Link
                      to={"/accounts/register"}
                      className="text-blue-500 underline"
                    >
                      Sign up here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
