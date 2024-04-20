"use client";
import Image from "next/image";
import logo from "@/images/logo-white.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  NAVIGATION_VARIANTS,
  getVerticalVariants,
} from "@/utils/animation/header/header-animation";

export default function Header() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed z-[9999] top-0 left-0 flex items-center justify-between
      w-full xl:h-20 xl:text-xl h-[50px] lg:text-[1.2rem] text-[10px] 
      border-b border-b-white xl:pr-[65px] pr-[30px] text-white
      ${scroll ? "bg-[#cccccc] text-black border-b-black" : ""}
      `}
      variants={getVerticalVariants("-100%", 0.5)}
      initial="initial"
      animate="animate"
    >
      {/* name */}
      <div
        className={`relative w-fit overflow-hidden px-[50px] py-[3px] h-full flex items-center justify-center border-r border-r-white
      ${scroll ? " border-r-black" : ""}
      
      `}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div
          className={`absolute top-0   h-full transform transition-all ${
            hover ? " w-full left-0 " : " w-0 right-0"
          } bg-white transition-all duration-200 ease-in-out`}
        ></div>
        <svg
          className="blockbase-logo relative z-[9999]"
          width="152"
          height="33"
          viewBox="0 0 152 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_302_1229)">
            <path
              d="M151.318 17.979C151.392 13.6189 148.435 10.977 143.533 10.977C138 10.977 135.516 14.1362 135.516 19.4755C135.516 24.8148 137.818 27.8632 144.013 27.8632C147.342 27.8632 149.934 26.7454 151.061 26.1635L149.918 22.9765C147.748 23.5123 145.794 23.7802 144.377 23.7802C141.545 23.7802 140.236 23.1705 140.154 21.0274H151.111C151.243 20.0205 151.293 18.9859 151.318 17.979ZM146.812 17.8127H140.178C140.361 15.7435 141.222 14.9122 143.45 14.9122C145.363 14.9122 146.804 15.6604 146.804 17.4709V17.8127H146.812Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M111.249 10.9769V12.3441C111.034 12.1039 110.678 11.7621 110.165 11.4757C110.165 11.4757 109.461 11.0785 108.525 10.9769C104.16 10.4873 101.858 13.1939 101.858 13.1939C100.442 14.8475 100.077 17.2215 100.077 19.4108C100.077 24.6392 102.172 27.8539 107.44 27.8539C109.303 27.8539 110.819 27.2812 112.003 26.5329L112.641 27.4475H115.838V10.9769H111.241H111.249ZM111.249 23.4384C110.463 23.5769 109.626 23.6416 108.682 23.6416C108.583 23.6416 108.492 23.6416 108.392 23.6416C107.506 23.6231 106.728 23.4938 106.115 23.2351C106.065 23.2167 106.015 23.1889 105.966 23.1612C105.361 22.8749 104.939 22.4315 104.79 21.831C104.781 21.7848 104.765 21.7479 104.756 21.7017C104.732 21.5724 104.715 21.4338 104.715 21.2953V17.5356C104.715 17.3323 104.74 17.1384 104.79 16.9628C104.939 16.3532 105.353 15.919 105.966 15.6234C106.007 15.5957 106.065 15.5772 106.115 15.5495C106.719 15.2909 107.506 15.1615 108.392 15.1431C108.492 15.1431 108.583 15.1431 108.682 15.1431C109.626 15.1431 110.463 15.2077 111.258 15.3463V23.4476L111.249 23.4384Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M24.198 5.69308H19.6016V27.4567H24.198V5.69308Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M66.6595 5.69308H62.063V27.4567H66.6595V5.69308Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M75.8523 12.0855H71.2559V17.1199H75.8523V12.0855Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M77.1275 27.4567H72.5311L66.6592 17.1107H71.2557L77.1275 27.4567Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M43.9585 19.3831C43.9585 14.0993 46.0787 10.9677 51.818 10.9677C57.5574 10.9677 59.3132 13.4342 59.4457 16.1315C59.4705 16.6765 59.4457 17.7758 59.396 18.3208H55.0977V17.083C55.0977 15.7066 53.9713 15.1062 51.9009 15.1062C50.1699 15.1062 48.5964 15.9375 48.5964 17.434V21.1106C48.5964 22.8934 50.3024 23.6047 52.7125 23.6047C54.8078 23.6047 56.6464 23.1705 58.427 22.5424L59.4209 26.2743C58.3194 26.8471 55.4869 27.854 52.0002 27.854C46.3105 27.854 43.9502 24.6393 43.9502 19.3831H43.9585Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M129.561 17.9513L124.128 17.4063C123.233 17.2955 122.869 16.889 122.869 16.0853C122.869 15.0507 123.258 14.6166 125.594 14.6166C128.319 14.6166 128.584 15.1062 128.584 16.0484C128.584 16.1592 128.584 16.307 128.567 16.4826H132.948C132.99 16.0392 132.99 15.7713 132.99 15.6512C132.99 12.3718 130.919 10.9677 125.544 10.9677C120.484 10.9677 118.314 12.4642 118.314 16.2516C118.314 19.494 120.02 20.5563 122.662 20.7872L127.639 21.2768C128.509 21.36 128.923 21.8773 128.923 22.5978C128.923 23.771 128.368 24.122 125.536 24.122C122.703 24.122 122.679 23.4661 122.679 22.7456V22.1729H117.908C117.892 22.3669 117.875 22.607 117.875 22.8287C117.875 26.9025 121.204 27.854 125.453 27.854C131.375 27.854 133.602 26.2189 133.602 22.256C133.602 19.2446 132.137 18.2377 129.544 17.9513H129.561Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M14.6325 16.2885C15.527 15.5126 16.2061 14.3671 16.2061 12.5011C16.2061 7.93777 12.8768 7.3558 10.0443 7.3558H0.130859V27.4475H10.7814C12.5869 27.4475 16.9929 27.078 16.9929 21.1382C16.9929 18.1822 15.9162 16.9721 14.6325 16.2793V16.2885ZM4.72733 11.5496H9.67993C10.5744 11.5496 11.4688 11.6605 11.4688 12.7505V14.0438C11.4688 15.1338 10.5992 15.337 9.67993 15.337H4.72733V11.5496ZM11.9906 21.8587C11.9906 22.9765 11.2038 23.2351 10.2348 23.2351H4.73561V19.2722H10.2348C11.1541 19.2722 11.9906 19.4477 11.9906 20.741V21.8587Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M95.6628 16.2885C96.5573 15.5126 97.2364 14.3671 97.2364 12.5011C97.2364 7.93777 93.907 7.3558 91.0746 7.3558H81.1611V27.4475H91.8117C93.6172 27.4475 98.0232 27.078 98.0232 21.1382C98.0232 18.1822 96.9465 16.9721 95.6628 16.2793V16.2885ZM85.7576 11.5496H90.7102C91.6047 11.5496 92.4991 11.6605 92.4991 12.7505V14.0438C92.4991 15.1338 91.6295 15.337 90.7102 15.337H85.7576V11.5496ZM93.0209 21.8587C93.0209 22.9765 92.2341 23.2351 91.2651 23.2351H85.7659V19.2722H91.2651C92.1844 19.2722 93.0209 19.4477 93.0209 20.741V21.8587Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
            <path
              d="M34.0948 10.977C29.8379 10.977 26.3926 14.7551 26.3926 19.4108C26.3926 24.0666 29.8379 27.8539 34.0948 27.8539C38.3517 27.8539 41.8053 24.0758 41.8053 19.4108C41.8053 14.7459 38.3517 10.977 34.0948 10.977ZM34.0948 23.1336C32.2231 23.1336 30.6992 21.4708 30.6992 19.4201C30.6992 17.3693 32.2148 15.7066 34.0948 15.7066C35.9748 15.7066 37.4904 17.3693 37.4904 19.4201C37.4904 21.4708 35.9748 23.1336 34.0948 23.1336Z"
              fill={`${hover || scroll ? "#000" : "#fff"}`}
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_302_1229">
              <rect
                width="151"
                height="32"
                fill="white"
                transform="translate(0.317383 0.570282)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* navigation */}
      <div className="flex items-center xl:gap-[100px] gap-[35px] uppercase">
        <Link
          href="/#about"
          className="w-fit h-[28.8px] relative overflow-hidden"
        >
          <motion.div
            className={`relative bottom-0 w-fit h-fit flex flex-col items-center justify-center
            ${scroll ? " text-black " : ""}
            `}
            variants={NAVIGATION_VARIANTS}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <p>ABOUT</p>
            <p className="mt-2">ABOUT</p>
          </motion.div>
        </Link>

        <Link
          href="/#about"
          className="w-fit h-[28.8px] relative overflow-hidden"
        >
          <motion.div
            className={`relative bottom-0 w-fit h-fit flex flex-col items-center justify-center
${scroll ? " text-black " : ""}
`}
            variants={NAVIGATION_VARIANTS}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <p>PORTFOLIO</p>
            <p className="mt-2">PORTFOLIO</p>
          </motion.div>
        </Link>

        <Link
          href="/#about"
          className="w-fit h-[28.8px] relative overflow-hidden"
        >
          <motion.div
            className={`relative bottom-0 w-fit h-fit flex flex-col items-center justify-center
${scroll ? " text-black " : ""}
`}
            variants={NAVIGATION_VARIANTS}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <p>TEAM</p>
            <p className="mt-2">TEAM</p>
          </motion.div>
        </Link>

        <Link
          href="/#about"
          className="w-fit h-[28.8px] relative overflow-hidden"
        >
          <motion.div
            className={`relative bottom-0 w-fit h-fit flex flex-col items-center justify-center
${scroll ? " text-black " : ""}
`}
            variants={NAVIGATION_VARIANTS}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <p>RESOURCES</p>
            <p className="mt-2">RESOURCES</p>
          </motion.div>
        </Link>
        <Link
          href="/#about"
          className="w-fit h-[28.8px] relative overflow-hidden"
        >
          <motion.div
            className={`relative bottom-0 w-fit h-fit flex flex-col items-center justify-center
${scroll ? " text-black " : ""}
`}
            variants={NAVIGATION_VARIANTS}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <p>CAREER</p>
            <p className="mt-2">CAREER</p>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
