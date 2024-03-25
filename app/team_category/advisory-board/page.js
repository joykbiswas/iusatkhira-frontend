"use client";
import { advisoryBoardGet } from "@/lib/BuilderAPI";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AdvisoryBoard = () => {
  const [advisoryBoard, SetAdvisoryBoard] = useState([]);
  useEffect(() => {
    advisoryBoardGet()
      .then((res) => SetAdvisoryBoard(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(advisoryBoard);
  return (
    <div className="max-w-screen-xl mx-auto px-10">
      <h2>উপদেষ্টা পর্ষদ</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
        {advisoryBoard.map((adviser) => (
          <div key={adviser._id}>
            <div className=" px-3 py-2 relative max-w-[350px] text-white shadow bg-gradient-to-r overflow-hidden from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] group">
              <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
              <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
              <div className=" z-20 relative">
                <div className="">
                  <figure className="px-10 h-40">
                    <Image
                      src={adviser.img}
                      className="mx-auto object-cover w-full h-40"
                      width={150}
                      height={120}
                      alt="adviser Img"
                    ></Image>
                  </figure>
                  <div className="pt-4  items-center text-center space-y-4">
                    <h2 className="text-xl font-semibold text-center">
                      {adviser.name}
                    </h2>
                    <p className="text-lg font-semibold text-center">
                      {adviser.title}
                    </p>
                    <h3 className="text-lg font-semibold text-center">
                      {adviser.department}
                    </h3>
                    <div className="card-actions">
                      <button className="btn btn-primary mx-auto">Buy Now</button>
                    </div>
                  </div>
                </div>
                {/* <button className="bg-[#1b8efa] py-2 px-6 ">সকল তথ্য</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryBoard;
/*
<Image
src={adviser.img}
className="mx-auto"
width={150}
height={150}
alt="adviser Img"></Image>
<p className="text-xl font-semibold text-center">{adviser.name}</p>
<h2 className="text-xl font-semibold text-center">{adviser.title}</h2>
<h3 className="text-xl font-semibold text-center border">{adviser.department}</h3>
*/
