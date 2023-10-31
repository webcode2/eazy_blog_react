import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/shared/header";
import Pagination from "../../components/pagination";
import Recent from "../../components/recent_art";
import Category from "../../components/category";
import Input from "../../components/input";
import BackToTop from "../../components/scroll_top";

function Layout({}) {
  return (
    <div className="w-full bg-slate-50 ">
      <Header />
      <div className="container  mx-auto mb-8  bg-slate-300"></div>

      <div className="container   block lg:flex lg:gap-16 mx-auto">
        <div className=" lg:w-8/12 w-full">
          <Outlet />
        </div>
        <div className="lg:w-4/12 w-full bg-slate-50 border-2 rounded flex flex-col gap-y-4 px-4 py-4">
          <form className="flex">
            <Input placeholder="Search" style_class={"rounded-r-none"} />
            <input
              type="submit"
              value="Search"
              className="text-white bg-slate-600 py-2 px-4 rounded-l-none rounded-md"
            />
          </form>
          <Recent />
          <Category />
        </div>
      </div>
      <div className="w-full  flex justify-center pt-16">
        <Pagination />
      </div>
    <BackToTop visible={''}/>
    </div>
  );
}

export default Layout;
