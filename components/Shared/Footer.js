import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-blue-950 border-t-8 border-blue-700">
      <div className=" ">
        <footer className="max-w-screen-xl mx-auto footer p-10  txt-base-content text-slate-400">
          <aside className="text-base">
            <Image
              src="https://i.ibb.co/BBmVCnz/Logo.jpg"
              width={100}
              height={100}
              alt="logo"
            ></Image>
            <p>
              Location : TSCC, Islamic University,
              <br />
              Kushtia-7003.
            </p>
            <h2>Mail : iusatkhira@gmail.com</h2>
            <h2>
              Facebook Group :
              <a
                href="https://www.facebook.com/groups/iusatkhira/"
                className="link link-hover text-white"
              >
                {" "}
                Click here
              </a>{" "}
            </h2>
            <h2>Contact : 01762-381734</h2>
            <div className="flex text-5xl gap-4 ">
              <Link href="www.gmail.com">
                <MdOutlineAttachEmail className="bg-red-600 text-white p-2 rounded" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100064522819685">
                <FaFacebookF className="bg-blue-600 text-white p-2 rounded" />
              </Link>
              <Link href="https://www.youtube.com/@iusatkhira">
                <FaYoutube className="bg-red-600 text-white p-2 rounded" />
              </Link>
            </div>
          </aside>
          <nav className="text-base">
            <h6 className="font-semibold text-white">গুরুত্বপূর্ণ লিংক</h6>
            <a
              href="https://www.facebook.com/groups/iusatkhira/"
              className="link link-hover"
            >
              আমাদের ফেসবুক গ্রুপ
            </a>
            <a href="https://www.iu.ac.bd/" className="link link-hover">
              ইসলামী বিশ্ববিদ্যালয়
            </a>
            <a href="https://www.shed.gov.bd/" className="link link-hover">
              মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ-শিক্ষা মন্ত্রণালয়
            </a>
            <a href="https://moedu.gov.bd/" className="link link-hover">
              শিক্ষা মন্ত্রণালয়-গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
            </a>
            <a href="https://ugc.gov.bd/" className="link link-hover">
              বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন
            </a>
          </nav>
          <nav className="text-base">
            <h6 className="font-semibold text-white">গুরুত্বপূর্ণ পেইজ</h6>
            <a className="link link-hover">লগইন</a>
            <a className="link link-hover">রেজিস্ট্রেশন</a>
            <a className="link link-hover">যোগাযোগ</a>
            <a className="link link-hover"> উপদেষ্টা পর্ষদ</a>
            <a className="link link-hover"> কার্যনির্বাহী কমিটি</a>
            <a className="link link-hover"> প্রাক্তন পরিচালনা পর্ষদ</a>
          </nav>
        </footer>
        <div className="border-t">
          <footer className="max-w-screen-xl mx-auto px-10 footer items-center p-4  text-slate-300 ">
            <aside className="items-center grid-flow-col">
              <p>© All rights reserved iusatkhira.com</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <a href="https://www.facebook.com/joy.kumarbiswas.33">
                Developed ❤️ by JOY BISWAS
              </a>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
