"use client";
import React, { useState } from "react";
import ForumCard from "./ForumCard";
import MarketStoryCard from "./MarketStoryCard";
import data from "../utils/Dummy_data";
import MarketStoriesData from "../utils/Market_stories_data";
import Image from "next/image";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-10"
        } bg-[#0f0d33] relative`}
        z
      >
        {/* Sidebar content */}
        <ul className={`${isSidebarOpen ? "flex-grow" : "hidden"} text-white`}>
          <div className="flex gap-6 p-4 border-b-[1px] border-white">
            <Image src={"/user.png"} width={30} height={30} alt="" />
            <h1>Hello,User</h1>
            <Image
              className="ml-[25px]"
              src={"/bell.png"}
              width={30}
              height={30}
              alt=""
            />
          </div>
          <li className="p-4">Discussion Forum</li>
          <li className="p-4">Market Stories</li>
          <li className="p-4">Sentiment</li>
          <li className="p-4">Market</li>
          <li className="p-4">Sector</li>
          <li className="p-4">Watchlist</li>
          <li className="p-4">Events</li>
          <li className="p-4">News/Interview</li>
        </ul>

        {/* Button to toggle sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-[350px] right-0 transform -translate-y-1/2 bg-blue-800 text-white px-2 py-10 rounded"
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>

      {/* Page Content */}
      <div
        className={`${
          isSidebarOpen ? "ml-0" : "ml-0"
        } p-8 flex-grow transition-all`}
      >
        {/* Main content */}
        <div className="flex">
          <ForumCard data={data} />
          <MarketStoryCard MarketData={MarketStoriesData} />
        </div>
      </div>
    </div>
  );
}
