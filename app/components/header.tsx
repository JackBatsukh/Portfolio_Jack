"use client";
import Image from "next/image";
import { useState } from "react";
import * as React from "react";
import { useLanguage } from "../context/language-context";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="flex justify-between items-center px-[100px] fixed top-0 left-0 right-0 z-50 bg-white/0 backdrop-blur-[4px] animate-fade-up">
      <div className="relative w-[120px] h-[120px] group">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute"
        />
        <Image
          src="/logo_white.png"
          width={105}
          height={105}
          alt="logo"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="flex items-center gap-4 relative">
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center p-2 text-[#9CDAEB] hover:text-white"
        >
          <svg
            strokeWidth="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.048"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                fill="#9CDAEB"
                className="hover:fill-white shadow-lg shadow-gray-400/50"
              ></path>
            </g>
          </svg>
          <p className="text-[16px]">{language}</p>
        </button>
        <button
          onClick={() => setShowContact(!showContact)}
          className="w-[130px] h-[40px] flex items-center text-black text-[16px] justify-center rounded-full bg-linear-[85deg,#EDE2E2_0%,#6BDDF9_34%,#EDE2E2_64%,#06B8E5_100%] hover:bg-linear-[#1FBCE6] shadow-lg shadow-gray-400/50 hover:text-white"
        >
          {language === "EN" ? "Contact" : "Холбоо барих"}
        </button>

        {showContact && (
          <div className="fixed inset-0 z-50">
            <div className="absolute right-0 top-0  w-full h-screen max-w-md bg-gradient-to-b from-black/90 to-blue-900 backdrop-blur-xl p-6 shadow-xl border-y-[1px] border-s-[1px] rounded-s-xl animate-slide-in-right">
              <Image src="/logo.png" width={100} height={100} alt="logo" />

              <button
                onClick={() => setShowContact(false)}
                className="absolute top-6 right-6 p-2 text-white hover:text-cyan-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mt-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col gap-8 text-white mt-20">
                <h2 className="text-5xl  border-b-2 border-cyan-500 pb-2 hover:text-cyan-200 transition-colors">
                  {language === "EN" ? "Contact Me" : "Холбогдох"}
                </h2>
                <div className="flex items-center gap-4 hover:text-cyan-200 transition-colors  text-[26px]">
                  <Image
                    src={"/github.png"}
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <a href="https://github.com/JackBatsukh">JackBatsukh</a>
                </div>
                <div className="flex items-center gap-4  hover:text-cyan-500 transition-colors  text-[26px] ">
                  <Image src={"/gmail.png"} alt="logo" width={30} height={30} />
                  bayarjavkhlanbatsukh@gmail.com
                </div>

                <div className="flex items-center gap-4 hover:text-cyan-500 transition-colors  text-[26px]">
                  <Image
                    src={"/phone-call.png"}
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  +976 95868758
                </div>

                <div className="flex items-center gap-4 hover:text-cyan-500 transition-colors  text-[26px]">
                  <Image
                    src={"/facebook.png"}
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <a href="https://www.facebook.com/profile.php?id=100013788490360">
                    Batsukh Bayarjavkhlan
                  </a>
                </div>

                <div className="flex items-center gap-4 hover:text-cyan-500 transition-colors  text-[26px]">
                  <Image
                    src={"/instagram.png"}
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <a href="https://instagram.com/javkhaal">Javkhaal</a>
                </div>
              </div>
              <p className="absolute bottom-4 -8 text-gray-400 hover:text-cyan-200 transition-colors text-[16px]">
                {language === "EN"
                  ? "LOOKING FORWARD TO WORK WITH YOU!"
                  : "ТАНТАЙ ХАМТРАН АЖИЛЛАХЫГ ТЭСЭН ЯДАН ХҮЛЭЭЖ БАЙНА!"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
