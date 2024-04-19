"use client";
import Image from "next/image";
import logo from "@/images/logo-white.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NAVIGATION_VARIANTS,
  getVerticalVariants,
} from "@/utils/animation/header/header-animation";

export default function Header() {
  return (
    <motion.div
      className={`fixed z-[9999] top-0 left-0 flex items-center justify-between
      w-full xl:h-20 xl:text-xl h-[50px] lg:text-[1.2rem] text-[10px] 
      border-b border-b-white xl:pr-[65px] pr-[30px] text-white`}
      variants={getVerticalVariants("-100%", 0.5)}
      initial="initial"
      animate="animate"
    >
      {/* name */}
      <div className="px-[50px] py-[3px] h-full flex items-center justify-center border-r border-r-white">
        <Image src={logo} alt="logo" />
      </div>
      {/* navigation */}
      <div className="flex items-center xl:gap-[100px] gap-[35px] uppercase">
        <Link
          href="/#about"
          className="w-fit h-[28.8px] relative overflow-hidden"
        >
          <motion.div
            className="relative bottom-0 w-fit h-fit flex flex-col items-center justify-center"
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
            className="relative bottom-0 w-fit h-fit flex flex-col items-center justify-center"
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
            className="relative bottom-0 w-fit h-fit flex flex-col items-center justify-center"
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
            className="relative bottom-0 w-fit h-fit flex flex-col items-center justify-center"
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
            className="relative bottom-0 w-fit h-fit flex flex-col items-center justify-center"
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
