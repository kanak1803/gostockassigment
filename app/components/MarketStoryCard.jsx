import Image from "next/image";
import React from "react";

export default function MarketStoryCard({ MarketData }) {
  console.log(MarketData);
  return (
    <div>
      <h1 className="text-3xl text-red-500  inline-block p-2 text-center m-2 ml-[20px] bg-gray-200">
        Market Stories
      </h1>
      {MarketData.map((story) => {
        return (
          <div key={story.id} className="p-5">
            <div className="border-2 w-[350px]">
              <Image
                alt="sunset.jpg"
                src={"/sunset.jpg"}
                sizes="100vw"
                width={100}
                height={100}
                style={{
                  width: "350px",
                  height: "180px",
                }}
              />
              <h1 className="py-1 px-3 font-semibold">{story.title}</h1>
              <p className="px-3">{story.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
