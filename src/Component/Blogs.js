import React from "react";
import img1 from "../Assets/blog1.jpg";
import img2 from "../Assets/blog2.jpg";
import img3 from "../Assets/blog3.jpg";
const Blogs = () => {
  return (
    <div className="bg-slate-300">
      <h1 className="my-5 text-5xl italic font-medium ">Blog's</h1>
      <div className="md: grid md:grid-cols-3 ">
        <div className="my-[auto] md:mx-[30px] mt-[auto] mb-10 mx-10 rounded-md shadow-lg shadow-indigo-500/40  border-orange-300 bg-slate-200">
          <div className="w-[auto] h-[auto] mx-[30px]">
            <img
              className=" h-[200px] mx-[auto] my-[30px] border-2 border-solid"
              src={img1}
              alt="Page1"
            />
            <h2 className="text-2xl font-medium cursor-pointer hover:text-orange-300 duration-700 mb-3">
              CSS Type and Selector
            </h2>
            <p className="text-xl text-center w-[auto]">
              
            </p>
            <div className="flex justify-evenly my-5">
              <a
                href="https://hashnode.com/post/clald8psb000808iih072ddlr"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Blog Link
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Second Cart */}
        <div className="my-[auto] md:mx-[30px] mt-[auto] mb-10 mx-10 rounded-md shadow-lg shadow-indigo-500/40  border-orange-300 bg-slate-200">
          <div className="w-[auto] h-[auto] mx-[30px]">
            <img
              className=" h-[200px] mx-[auto] my-[30px] border-2 border-solid"
              src={img2}
              alt="Page1"
            />
            <h2 className="text-2xl font-medium cursor-pointer hover:text-orange-300 duration-700 mb-3">
              CSS Flexbox & Properties
            </h2>
            
            <div className="flex justify-evenly my-5">
              <a
                href="https://hashnode.com/post/clbcn3pij000108lg2itb6cap"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Blog Link
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Third Cart */}
        <div className="my-[auto] md:mx-[30px] mt-[auto] mb-10 mx-10 rounded-md shadow-lg shadow-indigo-500/40  border-orange-300 bg-slate-200">
          <div className="w-[auto] h-[auto] mx-[30px]">
            <img
              className=" h-[200px] mx-[auto] my-[30px] border-2 border-solid"
              src={img3}
              alt="Page1"
            />
            <h2 className="text-2xl font-medium cursor-pointer hover:text-orange-300 duration-700 mb-3">
              Personal portfolio
            </h2>
            
            <div className="flex justify-evenly my-5">
              <a
                href="https://hashnode.com/post/clby36d23000q08lc824a64c2"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Blog Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
