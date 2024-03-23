import React from "react";
import { FaStar } from "react-icons/fa6";
import "./style.css";

const Goal = () => {
  return (
    <div className="featured-img bg-fixed text-xl text-center ">
      <h3 className="text-3xl pt-6">আমাদের লক্ষ ও উদ্দেশ্য</h3>
      <div className="flex justify-center items-center gap-3 text-4xl ">
        <hr className="w-44  border-black" />
        <FaStar className="text-2xl" />
        <hr className="w-44 border-black" />
      </div>
      <div className="pb-12 space-y-4 ">
      <h3>
        ১। আগত ছাত্রছাত্রী , শিক্ষক কর্মকর্তা সকলের মধ্যে পারস্পারিক সৌহার্দ্য ও
        ভ্রাতৃত্ব স্থাপন ।
      </h3>
      <h3>
        ২। সাতক্ষীরা জেলার শিক্ষার্থীদের সহ অন্যান্য জেলার শিক্ষার্থীদের ভর্তি
        প্রক্রিয়ায় সহযোগীতা প্রদান।
      </h3>
      <h3>৩। সাহিত্য-সংস্কৃতি, ক্রীড়া-বিনোদন ও সৃজনশীল কাজে সহযোগীতা করা।</h3>
      <h3>৪। গরিব ও মেধাবী শিক্ষার্থীদের সহায়তা প্রদান।</h3>
      <h3>৫। শিক্ষার্থীদের মেধা ও মননশীলতায় উৎসাহদান।</h3>
      <h3>
        ৬। অত্র বিশ্ববিদ্যালয়ের শিক্ষার্থীদের সহযোগীতা ছাড়াও অন্যান্য অঞ্চলে
        প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্থদের পাশে দাঁড়ানো।
      </h3>
      </div>
    </div>
  );
};

export default Goal;
