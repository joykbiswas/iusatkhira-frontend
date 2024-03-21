"use client";
import Image from "next/image";
import img1 from "@/assets/Logo .jpg";
import img2 from "@/assets/logo2.png";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
   
      <div className="bg-blue-950 border-b-8 border-blue-500">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between  py-2 text-white">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2 className="pl-5 pb-2">সঙ্গবদ্ধ সংঘ</h2>
          <Image src={img1} width={150} height={150} alt="logo img"></Image>
        </div>
        <div>
          <div className="hidden md:flex">
            <div className="pb-8 space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-5xl text-center">
                সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতি
              </h2>
              <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
                ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া ।
              </h4>
            </div>
          </div>
          <ul className="hidden items-center justify-center gap-10 md:flex">
            <li className="group flex  cursor-pointer flex-col">
              প্রচ্ছদ
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              {/* dropdown */}
              <div className="dropdown dropdown-hover flex">
                <div>
                  <div tabIndex={0} role="button" className="">
                    কমিটি
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu mt-1 shadow bg-blue-950  w-52 "
                  >
                    <li className="hover:bg-blue-900">
                      <a>উপদেষ্টা পর্ষদ</a>
                    </li>
                    <hr />
                    <li className="hover:bg-blue-900">
                      <a>কার্যনির্বাহী কমিটি</a>
                    </li>
                    <hr />
                    <li className="hover:bg-blue-900">
                      <a>প্রাক্তন পরিচালনা পর্ষদ</a>
                    </li>
                  </ul>
                </div>
                <IoMdArrowDropdown className="pt-1 text-2xl" />
              </div>

              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <div className="dropdown dropdown-hover flex">
                <div>
                  <div tabIndex={0} role="button" className="">
                    শিক্ষার্থীর তথ্য
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu mt-1 shadow bg-blue-950  w-52 "
                  >
                    <li className="hover:bg-blue-900">
                      <a>প্রাক্তন শিক্ষার্থীর</a>
                    </li>
                    <li className="hover:bg-blue-900">
                      <a>অ্যাঁধায়নরত শিক্ষার্থীর</a>
                    </li>
                  </ul>
                </div>
                <IoMdArrowDropdown className="pt-1 text-2xl" />
              </div>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              খোলা জানালা
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              আমাদের সম্পর্কে
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              শপ
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
        {/* small device  */}
        <div>
          <div className="md:hidden space-y-4">
            <h2 className="text-2xl  text-center">
              সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতি
            </h2>
            <h4 className="text-xl md:text-2xl text-center">
              ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া ।
            </h4>
          </div>

          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden justify-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <>
                <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                  <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                    প্রচ্ছদ
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                    <div className="dropdown dropdown-right dropdown-hover flex">
                      <div>
                        <div tabIndex={0} role="button" className="">
                          কমিটি
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu  shadow bg-blue-950  w-48 "
                        >
                          <li className="hover:bg-blue-900">
                            <a>উপদেষ্টা পর্ষদ</a>
                          </li>
                          <hr />
                          <li className="hover:bg-blue-900">
                            <a>কার্যনির্বাহী কমিটি</a>
                          </li>
                          <hr />
                          <li className="hover:bg-blue-900">
                            <a>প্রাক্তন পরিচালনা পর্ষদ</a>
                          </li>
                        </ul>
                      </div>
                      <IoMdArrowDropdown className="pt-1 text-2xl" />
                    </div>
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                    <div className="dropdown dropdown-right dropdown-hover flex">
                      <div>
                        <div tabIndex={0} role="button" className="">
                          শিক্ষার্থীর তথ্য
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu shadow bg-blue-950  w-52 "
                        >
                          <li className="hover:bg-blue-900">
                            <a>প্রাক্তন শিক্ষার্থীর</a>
                          </li>
                          <li className="hover:bg-blue-900">
                            <a>অ্যাঁধায়নরত শিক্ষার্থীর</a>
                          </li>
                        </ul>
                      </div>
                      <IoMdArrowDropdown className="pt-1 text-2xl" />
                    </div>
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                    খোলা জানালা
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                    আমাদের সম্পর্কে
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                    শপ
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2 className="pb-2">সাতক্ষীরার অঙ্গ</h2>
          <Image src={img2} width={150} height={150} alt="logo image"></Image>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
