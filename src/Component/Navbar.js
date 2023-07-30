import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  let links = [
    { name: "Home", link: "Home.js" },
    { name: "Project", link: "/Project.js" },
    { name: "Blog", link: "/Blogs.js" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex py-4 md:pl-11 text-2xl font-semibold bg-zinc-700 text-slate-200">
        <h2>Ashutosh Jain</h2>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden flex justify-end mr-14 relative mt-[-30px] cursor-pointer"
        > 
          {open ? <HiX /> : <HiMenu />}
        </div>
        <ul className={`md:flex md:item-center md:ml-auto md:text-xl mr-11 md:pt-0 pt-10  transition-all duration-75  ease-in ${open ? '':'hidden'}`}>
          {links.map((links) => (
            <li className="ml-11 hover:text-orange-300 duration-700 md:p-0 p-10 mr-10">
              <a href={links.link}>{links.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
