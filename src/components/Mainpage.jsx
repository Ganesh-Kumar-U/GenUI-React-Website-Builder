import React from "react";
import Logo from "../assets/Vector.svg";
import icon1 from "../assets/icon_1.svg";
import icon2 from "../assets/icon_2.svg";
import icon3 from "../assets/icon_3.svg";
import icon4 from "../assets/icon_search.svg";
import icon5 from "../assets/icon_folder.svg";
import mobile from "../assets/mobile_icon.svg";
import tab from "../assets/tab_icon.svg";
import desktop from "../assets/desktop_icon.svg";
import adicon1 from "../assets/icon_main_1.svg";
import adicon2 from "../assets/icon_main_2.svg";
import adicon3 from "../assets/icon_main_3.svg";
import adicon4 from "../assets/icon_main_4.svg";
import addfolder from "../assets/icon_folder_add.svg";
import play from "../assets/play.svg";
import bell from "../assets/bell.svg";
import { useNavigate } from "react-router-dom";

export default function Widget() {
  const navigate = useNavigate();
  const handleclickmain = () => {
    navigate("/mainpage2");
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-blue-600 text-white w-full md:w-16 flex flex-row md:flex-col items-center py-4">
        <img
          src={Logo}
          alt="Logo"
          className="mb-6"
          style={{ marginbottom: "3.5rem" }}
        />
        <div className="flex flex-row md:flex-col space-y-0 md:space-y-6 space-x-6 md:space-x-0">
          <img src={icon1} alt="Icon 1" />
          <img src={icon3} alt="Icon 2" />
          <img src={icon2} alt="Icon 3" />
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">New Project</h1>
          <div className="flex items-center space-x-4">
            <div>
              {" "}
              <div className="border rounded-full px-4 py-2 flex">
                {" "}
                <input
                  type="text"
                  placeholder="Search project"
                  className="rounded-full px-4 py-2"
                />
                <img
                  src={icon4}
                  alt="Notification"
                  className="cursor-pointer"
                />
              </div>
            </div>

            <img
              src={bell}
              alt="User"
              className="rounded-full cursor-pointer"
            />
            <div class="w-8 h-8 rounded-full bg-gray-300"></div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Account
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div
            className="flex items-center space-x-4 mb-4 md:mb-0"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              {" "}
              <p>All projects you have (0)</p>
            </div>

            <div className="main_cont flex" style={{ gap: "20px" }}>
              <select className="border rounded px-2 py-1">
                <option>All Projects</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
              <img src={addfolder} alt="Icon 3" />
              <button
                className="bg-blue-500 text-white px-4 py-2"
                style={{ background: "rgba(20, 78, 227, 1)" }}
                onClick={() => {
                  handleclickmain();
                }}
              >
                Create New App
              </button>
            </div>
          </div>
        </div>

        <div
          className="mb-6"
          style={{ fontSize: "18px", textAlign: "left", width: "50%" }}
        >
          <p className="text-zinc-600 flex">
            Welcome to Ranoar. Create a new app to get started.
          </p>
          <p>
            You can create from scratch or save your time by choose our
            pre-designed template
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6"
          style={{ width: "75%" }}
        >
          <button className="flex-1 border rounded-lg p-4 flex items-center justify-center bg-blue-100">
            <img src={mobile} alt="Mobile Icon" className="mr-2" />
            Create Mobile App
          </button>
          <button className="flex-1 border rounded-lg p-4 flex items-center justify-center">
            <img src={tab} alt="Tablet Icon" className="mr-2" />
            Create Tablet App
          </button>
          <button className="flex-1 border rounded-lg p-4 flex items-center justify-center">
            <img src={desktop} alt="Desktop Icon" className="mr-2" />
            Create Web/Desktop App
          </button>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(189, 189, 189, 1)",
          }}
        ></div>

        <div>
          <p
            className="mb-4 mt-6 flex"
            style={{ fontSize: "18px", textAlign: "left" }}
          >
            To make your onboarding process more appealing, discover this
            helpful resources before you begin.
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ width: "90%", marginTop: "30px" }}
          >
            <div className="border rounded-lg p-4 flex items-center">
              <img src={adicon1} alt="Product Overview" className="mr-4" />
              <div>
                <p className="text-left">Product Overview</p>
                <p className="text-left font-bold">How Ranoar works</p>
                <div className="flex" style={{ gap: "5px" }}>
                  <img src={play} alt="FAQ" />
                  <p className="text-zinc-400 text-sm">4:12</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 flex items-center flex text-center">
              <img src={adicon2} alt="Features Overview" className="mr-4" />
              <div>
                <p className="text-left">Features Overview</p>
                <p className="text-left font-bold">Our Features</p>
                <div className="flex" style={{ gap: "5px" }}>
                  <img src={play} alt="FAQ" />
                  <p className="text-zinc-400 text-sm">2:53</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 flex items-center">
              <img src={adicon3} alt="Product Walkthrough" className="mr-4" />
              <div>
                <p className="text-left">Product Walkthrough</p>
                <p className="text-left font-bold">Onboarding</p>
                <div className="flex" style={{ gap: "5px" }}>
                  <img src={play} alt="FAQ" />
                  <p className="text-zinc-400 text-sm">3:53</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 flex items-center">
              <img src={adicon4} alt="FAQ" className="mr-4" />
              <div>
                <p className="text-left">Frequently Asked Question</p>
                <p className="text-left font-bold">Get Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
