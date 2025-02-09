import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/css/login.css";
import main_text from "../assets/bg_mqain_text.svg";
import login from "../assets/login.svg";
import Logo from "../assets/Vector.svg";

export default function Widget() {
  const [autoPaste, setAutoPaste] = useState(false);

  const handleCheckboxChange = () => {
    setAutoPaste(!autoPaste);
  };
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/mainpage");
  };

  return (
    <div className="min-h-screen  text-white flex flex-col items-center justify-center p-4 bg_main">
      <div
        className="absolute top-4 left-4 flex"
        style={{ padding: "20px", gap: "20px" }}
      >
        <img alt="lightning" src={Logo} />
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded-full flex items-center space-x-2"
          style={{ borderRadius: "10px" }}
        >
          <span>web Finder</span>
        </button>
      </div>
      <div className="absolute top-4 right-4" style={{ padding: "20px" }}>
        <button className="text-white flex items-center space-x-2">
          <span>Login</span>
          <img alt="login icon" src={login} />
        </button>
      </div>
      <div className="text-center">
        {/* <div className="flex justify-center items-center space-x-2 mb-2">
          <span className="bg-blue-500 text-white py-1 px-2 rounded-full text-xs">
            NEW
          </span>
          <span className="text-zinc-400">
            Next-generation of Site Building.
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          AI-Powered Chatbot Builder
        </h1>
        <p className="text-zinc-400 mb-8">
          Take your website building experience to the next level and boost your
          productivity.
        </p> */}
        <div>
          <img src={main_text}></img>
        </div>
        <div className="flex items-center bg-zinc-800 rounded-full p-2 w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Enter Prompts"
            className="bg-transparent text-white flex-grow px-4 py-2 outline-none"
          />
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-full"
            style={{ background: "rgba(20, 78, 227, 1)" }}
            onClick={() => {
              handleclick();
            }}
          >
            Search now
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <input
            type="checkbox"
            id="auto-paste"
            className="hidden"
            checked={autoPaste}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="auto-paste"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="relative">
              <div className="block bg-zinc-600 w-10 h-6 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  autoPaste ? "translate-x-full bg-blue-500" : ""
                }`}
              ></div>
            </div>
            <span className="text-zinc-400">Auto Paste from Clipboard</span>
          </label>
        </div>
      </div>
      <style jsx>{`
        .dot {
          transition: transform 0.2s ease-in-out;
        }
        .translate-x-full {
          transform: translateX(100%);
          background: rgba(20, 78, 227, 1);
        }
      `}</style>
    </div>
  );
}
