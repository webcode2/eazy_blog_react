import React, { useEffect, useRef } from "react";
import logo from "../../assets/imgs/logo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const nav_ref = useRef();
  const h_auth_ref = useRef();

  function handle_menu() {
    nav_ref.current.classList.toggle("hidden");
    h_auth_ref.current.classList.toggle("hidden");
  }

  return (
    <header className="shadow-md">
      <nav className="bg-green-400 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={"/"} className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="eazycode Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              EasyCode
            </span>
          </Link>
          <button
            onClick={handle_menu}
            data-collapse-toggle="my-navbar"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            ref={nav_ref}
            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 hidden"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <NavLink
                  to={"/marketplace"}
                  className={
                    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  {" "}
                  Flutter/Dart
                </NavLink>
              </li>
              <li>
                <Link
                  to={"/team"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {" "}
                  Javascript
                </Link>
              </li>
              <li>
                <Link
                  to={"/learn-python"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {" "}
                  Python
                </Link>
              </li>
              <li>
                <Link
                  to={"/articles/all"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Free Templates
                </Link>
              </li>
              <li>
                <Link
                  to={"/articles/all"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Article
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            ref={h_auth_ref}
            className=" lg:order-2 hidden lg:flex   flex-md:flex-col font-extrabold"
          >
            <Link
              className="block py-2 px-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:mr-5 dark:border-gray-700"
              to={"/accounts/login"}
            >
              Login
            </Link>
            <Link
              to={"/accounts/register"}
              className="block py-2 px-3 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
