import React from "react";
import img1 from "../Assets/Rock_paper_sizzer.jpg";
import img2 from "../Assets/Dice.jpg";
import img3 from "../Assets/portfolio.jpg";
const Project = () => {
  return (
    <div id="Project" className="scroll-smooth">
      <h1 className="mt-4 text-5xl italic font-medium">Project's</h1>
      <div className="md: grid md:grid-cols-3 ">
        <div className="my-[auto] md:mx-[30px] mt-[30px] mb-10 mx-10 rounded-md shadow-lg shadow-indigo-500/40  border-orange-300 bg-slate-200">
          <div className="w-[auto] h-[auto] mx-[30px]">
            <img
              className=" h-[200px] mx-[auto] my-[30px] border-2 border-solid"
              src={img1}
              alt="Page1"
            />
            <h2 className="text-2xl font-medium cursor-pointer hover:text-orange-300 duration-700 mb-3">
              Rock-Paper-Scizzer
            </h2>
            <p className="text-xl text-center w-[auto]">
              In the rock paper scizzer game there is 1 player that play with
              computer.From rock,paper,scizzer player need to select any one and
              if player won player will get point and if computer win then
              computer will get the points.Whoever will get 10 points first they
              will win the match.
            </p>
            <div className="flex justify-evenly my-5">
              <a
                href="https://github.com/AshutoshJain31/Rock-Paper-Sessior"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Source Code
                </button>
              </a>
              <a
                href="https://rock-paper-sessior.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Live link
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Second Cart */}
        <div className="my-[auto] md:mx-[30px] mt-[30px] mb-10 mx-10 rounded-md shadow-lg shadow-indigo-500/40  border-orange-300 bg-slate-200">
          <div className="w-[auto] h-[auto] mx-[30px]">
            <img
              className=" h-[200px] mx-[auto] my-[30px] border-2 border-solid"
              src={img2}
              alt="Page1"
            />
            <h2 className="text-2xl font-medium cursor-pointer hover:text-orange-300 duration-700 mb-3">
              Dice Roll Game
            </h2>
            <p className="text-xl text-center w-[auto]">
              In this there are 2 player and every time when player roll a dice
              the dice value will be add in the player score.If any player score
              is more that 100 that player has won the match and if dice value
              will 1 then next player will get chnace.
            </p>
            <div className="flex justify-evenly my-5">
              <a
                href="https://github.com/AshutoshJain31/Dice-game_Javascript"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Source Code
                </button>
              </a>
              <a
                href="https://dice-roll-game2.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Live link
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Third Cart */}
        <div className="my-[auto] md:mx-[30px] mt-[30px] mb-10 mx-10 rounded-md shadow-lg shadow-indigo-500/40  border-orange-300 bg-slate-200">
          <div className="w-[auto] h-[auto] mx-[30px]">
            <img
              className=" h-[200px] mx-[auto] my-[30px] border-2 border-solid"
              src={img3}
              alt="Page1"
            />
            <h2 className="text-2xl font-medium cursor-pointer hover:text-orange-300 duration-700 mb-3">
              Personal portfolio
            </h2>
            <p className="text-xl text-center w-[auto]">
              This project develop in the react JS with tailwind CSS and this
              project is responsive.This project define the description about
              project with there live links.
            </p>
            <div className="flex justify-evenly my-5">
              <a
                href="https://github.com/AshutoshJain31/Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Source Code
                </button>
              </a>
              <a
                href="https://ashutosh-jain.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-md p-2 bg-orange-500">
                  Live link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
