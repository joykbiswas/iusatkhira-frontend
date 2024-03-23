import React from "react";
import { RecentBanner } from "./RecentBanner";

const RecentSection = () => {
  return (
    <div>
      <div className="bg-blue-950  ">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center py-12 text-white">
          সাম্প্রতিক কার্যক্রম
        </h2>
      </div>
        <div className="max-w-screen-xl mx-auto px-10 py-3">
        <RecentBanner></RecentBanner>
        </div>
    </div>
  );
};

export default RecentSection;
