"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export const WindowBanner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://iusatkhira.com/wp-content/uploads/2023/10/387549288_3588584228074294_3514587856807942684_n.jpg", title: "প্রীতিভোজ ও সাংস্কৃতিক অনুষ্ঠান অনুষ্ঠিত ", des: "সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির উদ্যোগে প্রতিভোজ ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়। বৃহস্পতিবার (৯ মার্চ) বিশ্ববিদ্যালয়ের পেয়ারাতলায় দিনব্যাপী অনুষ্ঠানে আয়োজন গুলোর মধ্যে ছিলো- লক্ষ্যে বল নিক্ষেপ (ছেলেদের), মেয়েদের বালিশ বদল "}, {img: "https://iusatkhira.com/wp-content/uploads/2023/07/received_3533866130194611.jpeg", title: "সাতক্ষীরা জেলা কল্যাণ সমিতির গেট টুগেদার – ২০২৩ অনুষ্ঠিত", des: "মঙ্গলবার (১৭ অক্টোবর) বেলা সাড়ে ১১ টায় বিশ্ববিদ্যালয়ের টিএসসিসি'র ১১৬ নং কক্ষে সাতক্ষীরা জেলা ছাত্র কল্যাণ সমিতির গেট টুগেদার অনুষ্ঠিত হয়েছে। কোরআন তিলাওয়াত ও গীতা পাঠের মাধ্যমে অনুষ্ঠানটি শুরু হয়। অনুষ্ঠানে"}, {img: "https://iusatkhira.com/wp-content/uploads/2023/07/IMG_20230719_133442.jpg", title: "সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির সভাপতি সোহান, সম্পাদক রাকিব", des: "সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির নতুন কমিটি গঠন করা হয়েছে। এতে ব্যবস্থাপনা বিভাগের স্নাতকোত্তর ২০২১-২২ শিক্ষাবর্ষের আবু সোহানকে সভাপতি এবং বাংলা বিভাগের স্নাতক ২০১৮-১৯ শিক্ষাবর্ষের রাকিব হোসেনকে সাধারণ সম্পাদক হিসেবে নির্বাচি"}, {img: "https://iusatkhira.com/wp-content/uploads/2023/06/IMG_20230613_131239-scaled.jpg", title: "আইসিটি সেলের পরিচালক হিসেবে নিয়োগ পাওয়ায় ড. তপন স্যারকে শুভেচ্ছা", des: " সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির সম্মানিত উপদেষ্টা, ইসলামী বিশ্ববিদ্যালয় শিক্ষক সমিতির সাধারণ সম্পাদক ও  ইনফরমেশন অ্যান্ড কমিনিউকেশন টেকনোলজি বিভাগের অধ্যাপক ড. তপন কুমার জোদ্দার স্যার আইসিটি সেলের পরিচালক হিসেবে নিয়োগ পাওয়ায়"}, {img: "https://iusatkhira.com/wp-content/uploads/2023/07/received_786164223242881.jpeg", title: "বাংলাদেশ পুলিশের সার্জেন্ট হিসেবে সুপারিশপ্রাপ্ত সাধারণ সম্পাদক মোস্তাফিজকে শুভেচ্ছা", des: "সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির বিপ্লবী সাধারণ সম্পাদক মোস্তাফিজুর রহমান বাংলাদেশ পুলিশের সার্জেন্ট হিসেবে চুড়ান্তভাবে সুপারিশ প্রাপ্ত হওয়ায় সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির পক্ষ থেকে তাকে আন্তরিক শুভেচ্ছা ও অভিনন্দন জানানো হয়েছে।"},{img: "https://iusatkhira.com/wp-content/uploads/2023/06/IMG_20230613_124753.jpg", title: " সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির বরণ ও বিদায় অনুষ্ঠিত", des: "ইসলামী বিশ্ববিদ্যালয়ে (ইবি) সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির নতুন কমিটি গঠন করা হয়েছে। এতে ম্যানেজমেন্ট বিভাগের ২০১৭-১৮ শিক্ষাবর্ষের শিক্ষার্থী আবু সোহানকে সভাপতি ও বাংলা বিভাগের ২০১৮-১৯ শিক্ষাবর্ষের শিক্ষার্থী রাকিব হোসেনকে সাধারণ"}, {img: "https://iusatkhira.com/wp-content/uploads/2023/03/IMG_20230310_121808.jpg", title: "হল প্রভোস্ট হিসেবে নিয়োগ পাওয়ায় ড. আকতার স্যারকে শুভেচ্ছা", des: "সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির সম্মানিত উপদেষ্টা ও আল-হাদিস অ্যান্ড ইসলামিক স্টাডিজ বিভাগের অধ্যাপক ড. আকতার হোসেন স্যার লালন শাহ হলের প্রভোস্ট হিসেবে নিয়োগ পাওয়ায় সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির পক্ষ থেকে"}];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
  const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
//   const isSmallScreen = window.innerWidth <= 768;
  return (
      <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
            style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})`}}>
            {/* arrow */}
            <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
                {/* arrow left */}
                <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
            </div>
            {/* text container here */}
            <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                <h1 className="lg:text-4xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
            </div>
            {/* slider container */}
            <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                <div className="ease-linear duration-300 flex gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)`}}>
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <Image width={500} height={500} key={inx} src={slide.img}
                            className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                                currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                            } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                            alt={slide.title}/>
                    ))}
                </div>
            </div>
        </div>
  )};
