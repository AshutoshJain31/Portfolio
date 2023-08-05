import React from "react";
import download from "../Assets/Ashutosh Wev DEV resume.pdf";
const Home = () => {
  return (
    <div id="Home" className="w-auto h-auto mt-16  md:flex justify-between bg-violet-800 scroll-smooth">
      <div className="p-20 md:w-[50%]">
        <p className="text-6xl font-serif text-center m-[auto]">
          My Name is
          <br />
          <span className="text-slate-50">Ashutosh Jain</span> and
          <br />I am<span className="text-slate-50"> Frontend Developer</span>
        </p>
        <div>
          <a
            href={download}
            download="Ashutosh_Resume"
            target="_blank"
            rel="noreferrer"
          >
            <button
              // href=""
              className="rounded-lg bg-indigo-500 text-slate-50 p-3 mt-10 font-medium text-lg hover:bg-orange-500 duration-700"
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="p-20 md:w-[50%]">
        <img
          className="md:w-[800px] md:h-[400px] ml-1"
          src="https://www.norderbergs.com/storage/2020/09/professional-web-design-social-ink-professional-web-design-png-1000_813.png"
          alt="Banner"
        />
      </div>
    </div>
  );
};
export default Home;
