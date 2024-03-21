"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "@/assets/banner-1.jpg";
import img2 from "@/assets/banner-2.jpg";
import img3 from "@/assets/banner-3.jpg";
import img4 from "@/assets/banner-4.jpg";
import img5 from "@/assets/banner-5.jpg";
import img6 from "@/assets/banner-6.jpg";
import img7 from "@/assets/banner-7.jpg";
import img8 from "@/assets/banner-8.jpg";
import img9 from "@/assets/banner-9.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="flex max-w-screen-xl mx-auto gap-5 px-10 mb-12">
        {/* left side */}
        <div className="h-96 w-2/3">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src={img1}
                width={500}
                height={400}
                alt="banner img"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img2}
                width={500}
                height={400}
                alt="banner img"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img3}
                width={500}
                height={400}
                alt="banner img"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img4}
                width={500}
                height={400}
                alt="banner imh"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img5}
                width={500}
                height={400}
                alt="banner imh"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img6}
                width={500}
                height={400}
                alt="banner imh"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img7}
                width={500}
                height={400}
                alt="banner imh"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img8}
                width={500}
                height={400}
                alt="banner imh"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img9}
                width={500}
                height={400}
                alt="banner imh"
              ></Image>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
          
        </div>
        {/* Right side */}
        <div className="w-1/3 shadow-lg">
          {/* Search field */}

          <form class="max-w-lg mx-auto mt-2 pb-4">
            <div class="flex">
              <div class="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="সার্চ করুন"
                  required
                />
                <button
                  type="submit"
                  class="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-zinc-600  hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-slate-800 "
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
              {/* Button section */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <button className="w-full border py-4 mx-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold scale-100 cursor-pointer  transition-all duration-200 hover:scale-110">
                লগইন
              </button>
              <button className="w-full border py-4 mx-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold scale-100 cursor-pointer px-3  transition-all duration-200 hover:scale-110">
                রেজিস্ট্রেশান
              </button>
            </div>
           <div className="mx-3">
           <button className="w-full border py-4 bg-green-500 text-white font-semibold scale-100 cursor-pointer px-3  transition-all duration-200 hover:scale-110">
                অ্যাডমিশন/ভর্তি তথ্য
              </button>
           </div>
           <div className="mx-3">
           <button className="w-full border py-4 bg-green-500 text-white font-semibold scale-100 cursor-pointer px-3  transition-all duration-200 hover:scale-110">
                ফটো/গ্যালারি
              </button>
           </div>
           {/* নোটিশ বোর্ড section */}
           <div className="mx-3">
            <h2 className=" font-semibold">নোটিশ বোর্ড:</h2>
            <div></div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
