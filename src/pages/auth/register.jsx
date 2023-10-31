import React, { useState } from "react";
import Header from "../../components/shared/header";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import Error from "../../components/error_text";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
  };

 


  return (
    <div className="lg:">
      <Header />

      <section className="w-full   xl:px-8 lg:px-24 lg:py-28 md:py-20 md:px-44 px-4 py-16 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16  h-full">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Join the Developer Community Today{" "}
              </h2>
              <p className="text-xl text-gray-600 md:pr-16">
                Join us today, and together, we'll build a brighter and more
                connected digital future.
              </p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5 ">
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white rounded-lg border-2 border-slate-200 shadow-2xl px-7">
                <form name="regForm" onSubmit={handleSubmit(onSubmit)}>
                  <h3 className="mb-6 text-2xl font-medium text-center">
                    Sign up for an Account
                  </h3>
                  <input
                    placeholder="First_name"
                    {...register("first_name", {
                      maxLength: 60,
                      minLength: 3,
                      required: true,
                      pattern: /^[a-zA-Z]+$/i,
                    })}
                    type={"text"}
                    aria-invalid={errors.first_name ? "true" : "false"}
                    name="first_name"
                    className="block focus:outline-none w-full py-3 px-4 rounded-md mb-4 focus:ring border-2 focus:border-none border-slate-300 focus:ring-green-300"
                  />
                  {(errors.first_name?.type === "required" && (
                    <Error message={" First name is required"} />
                  )) ||
                    (errors.first_name?.type == "minLength" && (
                      <Error message={"First Name too short"} />
                    )) ||
                    (errors.first_name?.type == "pattern" && (
                      <Error message={"Name cannot contain numbers"} />
                    ))}

                  <input
                    {...register("last_name", {
                      maxLength: 50,
                      required: true,
                      minLength: 3,
                      pattern: /^[a-zA-Z]+$/i,
                    })}
                    className="block focus:outline-none w-full py-3 px-4 rounded-md mb-4 focus:ring border-2 focus:border-none border-slate-300 focus:ring-green-300"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                  />
                  {(errors.last_name?.type === "required" && (
                    <Error message={" Last name is required"} />
                  )) ||
                    (errors.last_name?.type == "minLength" && (
                      <Error message={"Name too short"} />
                    )) ||
                    (errors.last_name?.type == "pattern" && (
                      <Error message={"Name cannot contain numbers"} />
                    ))}

                  <input
                    {...register("email", {
                      maxLength: 70,
                      required: true,
                      pattern:
                        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                    })}
                    className="block focus:outline-none w-full py-3 px-4 rounded-md mb-4 focus:ring border-2 focus:border-none border-slate-300 focus:ring-green-300"
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  {(errors.email?.type === "required" && (
                    <Error message={"Email is required"} />
                  )) ||
                    (errors.email?.type == "pattern" && (
                      <Error message={"Invalid Email"} />
                    ))}

                  <input
                    {...register("password", {
                      maxLength: 50,
                      minLength: 6,
                      required: true,

                    })}
                    type="password"
                    name="password"
                    aria-invalid={errors.password ? "true" : "false"}
                    className="block w-full px-4 py-3 mb-4  focus:ring border-2 focus:border-none border-slate-300 focus:ring-green-400 focus:outline-none rounded-md"
                    placeholder="Password"
                  />
                  {(errors.password?.type === "minLength" && (
                    <p role="alert" className="text-sm text-error">
                      Password too short
                    </p>
                  )) ||
                    (errors.password?.type === "maxLength" && (
                      <Error message={"password too long"} />
                    
                  )) ||
                    (errors.password?.type === "pattern" && (
                      <Error message={"password too weak"} />
                    ))}

                  <div className="block">
                    <button
                      type="submit"
                      className="w-full px-3 py-4  text-white font-sans font-bold rounded-md bg-green-500 "
                    >
                      Join
                    </button>
                  </div>
                  <p className="w-full mt-4 text-sm text-center text-gray-500">
                    Already have an account?
                    <Link
                      to="/accounts/login"
                      className="text-blue-500 underline"
                    >
                      Sign in
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

export default Register;
