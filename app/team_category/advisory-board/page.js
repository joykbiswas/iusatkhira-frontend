"use client";
import { advisoryBoardGet } from "@/lib/BuilderAPI";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AdvisoryBoard = () => {
  const [advisoryBoard, SetAdvisoryBoard] = useState([]);
  const [dataLength, setDataLength] = useState(16);
  useEffect(() => {
    advisoryBoardGet()
      .then((res) => SetAdvisoryBoard(res))
      .catch((err) => console.log(err));
  }, []);
  // console.log(advisoryBoard);
  return (
    <div className=" ">
      <div className="bg-slate-100">
        <div className="max-w-screen-xl mx-auto flex justify-between py-8 ">
          <h2 className="text-xl">উপদেষ্টা পর্ষদ</h2>
          <div>
            <nav class="flex" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                  <a
                    href="/"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      class="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                      href="#"
                      class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Team Members
                    </a>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                      href="/team_category/advisory-board"
                      class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      উপদেষ্টা পর্ষদ
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* card section */}
      <div className="max-w-screen-xl mx-auto px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 py-5">
        {advisoryBoard.slice(0, dataLength).map((adviser) => (
          <div key={adviser._id}>
            <div className=" px-3 py-2 relative max-w-[350px] text-white shadow bg-gradient-to-r overflow-hidden from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] group">
              <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
              <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
              <div className=" z-20 relative">
                <div className="flex flex-col">
                  <figure className="px-10 h-48">
                    <Image
                      src={adviser.img}
                      className="mx-auto object-cover w-full h-48 rounded"
                      width={100}
                      height={100}
                      alt="adviser Img"
                    ></Image>
                  </figure>
                  <div className="flex-grow pt-4  items-center text-center space-y-4">
                    <h2 className="text-xl font-semibold text-center">
                      {adviser.name}
                    </h2>
                    <p className="text-lg font-semibold text-center">
                      {adviser.title}
                    </p>
                    <h3 className="text-lg font-semibold text-center">
                      {adviser.department}
                    </h3>
                  </div>
                  <div className="card-actions pt-4">
                    <button className=" mx-auto bg-green-700 px-6 py-2 text-base scale-100 cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-red-600 ">
                      সকল তথ্য
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          dataLength === advisoryBoard.length ? "hidden" : "text-center"
        }
      >
        <button
          onClick={() => setDataLength(advisoryBoard.length)}
          className="px-6 py-2 bg-blue-950 text-white rounded mb-4"
        >
          আরো দেখুন
        </button>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
