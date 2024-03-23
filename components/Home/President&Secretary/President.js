"use client";
import { speechGet } from "@/lib/BuilderAPI";
import Image from "next/image";
import img1 from "@/assets/presedent.jpg";
import { MdOutlineMenuBook } from "react-icons/md";
import React, { useEffect, useState } from "react";

const President = () => {
  const [speech, setSpeech] = useState([]);
  useEffect(() => {
    speechGet()
      .then((res) => setSpeech(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(speech);
  return (
    <div>
      <div className="bg-blue-950  ">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center py-12 text-white">
          সভাপতি ও সেক্রেটারির বক্তব্য
        </h2>
      </div>
      <div className="bg-cyan-700 text-white pb-12">
        <div className="max-w-screen-xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-14 ">
          {speech.length > 0 &&
            speech.map((item) => (
              <div key={item._id || item.title} className="space-y-2">
                <Image
                  className="mx-auto pt-8 rounded-full "
                  src={item.img}
                  width={200}
                  height={200}
                  alt="banner img"
                ></Image>
                <h2 className="text-2xl text-center font-semibold">
                  {item.name}
                </h2>
                <p className="text-2xl text-center font-semibold">
                  {item.position}
                </p>
                <h2 className="text-2xl text-center font-semibold pb-5">
                  {item.title}
                </h2>
                <h3 className="text-xl text-center">{item.description}</h3>
                <button className=" flex justify-center items-center gap-2  scale-100 cursor-pointer rounded  px-5 py-2  font-semibold text-white transition-all duration-200 hover:scale-110   bg-cyan-500 hover:bg-blue-900" ><MdOutlineMenuBook className="text-xl"/>সম্পূর্ণ পড়ুন </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default President;
