import React from "react";
import Image from "next/image";

export default function ForumCard({ data }) {
  return (
    <div>
      <h1 className="text-3xl text-red-500  inline-block p-2 text-center m-2 bg-gray-200">
        Discussion Forum
      </h1>
      {data.map((item) => {
        return (
          <div key={item.id} className="border-2 py-8 px-2 mx-3 my-6 rounded-lg shadow-lg">
            <div className="flex gap-10">
              <Image
                className="mr-[-24px]"
                src={"/profile.png"}
                width={30}
                height={30}
                alt={item.id}
              />
              <h1 className="font-bold">{item.title}</h1>
              <h1 className=" px-4 py-1 bg-blue-600 rounded-2xl text-white">
                Sector {item.sector}
              </h1>
              <p className="text-blue-600 font-semibold">{item.time} min ago</p>
            </div>
            <div>
              <p className="font-medium ml-[45px] mt-1">{item.desc}</p>
            </div>
            <div className="flex gap-10 mt-2 ml-[45px]">
              <div className="flex gap-2">``
                <Image src={"/heart.png"} width={20} height={20} alt="heart" />
                <p>{item.likes}K</p>
              </div>
              <div className="flex gap-2">
                <Image src={"/view.png"} width={20} height={20} alt="view" />
                <p>{item.view}K</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/comment.png"}
                  width={20}
                  height={20}
                  alt="comment"
                />
                <p>{item.comment}K</p>
              </div>
              <div className="flex gap-2">
                <Image src={"/share.png"} width={20} height={20} alt="heart" />
                <p>Share</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
