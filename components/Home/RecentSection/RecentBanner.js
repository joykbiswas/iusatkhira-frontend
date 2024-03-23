"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export const RecentBanner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://iusatkhira.com/wp-content/uploads/2023/07/IMG_20230719_133442.jpg", title: "শুভেচ্ছা", des: "ড. মোঃ আকতার হুসাইন স্যার লালন শাহ হলের প্রভোস্ট হওয়ায় ফুলেল শুভেচ্ছা",}, {img: "https://iusatkhira.com/wp-content/uploads/2023/08/IMG20230808183138-scaled.jpg", title: "কার্যনির্বাহী কমিটি ২০২৩-২৪", des: "",}, {img: "https://iusatkhira.com/wp-content/uploads/2021/09/240769540_2012258948923216_2431348668405601927_n.jpg", title: "এডমিশন", des: "এডমিশন মিটিং পরবর্তী ছবি",}, {img: "https://iusatkhira.com/wp-content/uploads/2021/09/240699079_273901464210605_548552331466057063_n.jpg", title: "শিক্ষা সফর",des: "শিক্ষা সফর - ২০১৯ এর একাংশ",}, {img: "https://iusatkhira.com/wp-content/uploads/2023/08/IMG20200910100437-scaled.jpg", title: "ত্রাণ বিতরণ", des: "আম্ফান পরবর্তী ত্রাণ বিতরণ",},];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  return (
        <>
            <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/20 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-left px-5">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg pt-7">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {/* {sliders.map((slide, inx) => (z
                    <Image onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} width={500} height={400}
                         className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title}/>
                ))} */}
            </div>
        </>
  )};
