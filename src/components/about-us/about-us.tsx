"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import BackgroundDecorator from "../column-decorator/decorator";
import Image from "next/image";
import arrow from "@/images/about-us/arrow.svg";
import Link from "next/link";
import { fadeIn } from "@/utils/animation/landing-page/about-us-variants";

const MotionLink = motion(Link);

export default function AboutUs() {
  const [flexHeight, setFlexHeight] = useState(0);
  const [hover, setHover] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rectSection = sectionRef.current.getBoundingClientRect();

        const scrollTop = window.scrollY;

        const sectionTop = scrollTop - rectSection.top;

        const sectionScrolled = sectionTop / rectSection.height;
        setFlexHeight(sectionScrolled);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="w-full relative flex items-center justify-center bg-[#f0f0f0] h-screen"
      ref={sectionRef}
    >
      {/* background column grid */}
      <BackgroundDecorator />

      {/* section title */}
      <div
        className="flex absolute xl:top-[170px] xl:gap-[30px] top-[100px] gap-[15px]
      z-30 -tracking-[1.5px] w-full text-black items-end justify-items-start"
      >
        <div className="sm:h-[3px] h-[2px] w-[calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)] max-w-[8rem] bg-black"></div>
        <h2 className="sm:text-[1.5rem] leading-none text-[1rem]">About Us</h2>
      </div>
      {/* main content */}
      <div className="relative w-full max-w-[min(1600px,calc(0.8*100vw))] m-auto flex items-center justify-center z-30">
        <div className="flex flex-col items-center justify-center w-full max-w-[980px]">
          <p className="text-center text-[1.5rem] leading-normal mb-[50px]">
            We foresee a new internet era in which industries will be
            revolutionized through decentralized systems, smart contracts, and
            digital assets.
          </p>
          <Link
            href=""
            className="relative overflow-hidden flex items-center justify-center border border-black  px-[30px] py-[15px] gap-2.5 text-base font-medium bg-[#f0f0f0] text-black uppercase"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <div
              className={`absolute top-0   h-full transform transition-all ${
                hover ? " w-full left-0" : "w-0 right-0"
              } bg-white transition-transform duration-500 ease-in-out`}
            ></div>
            <p className="relative z-10">MORE</p>
            <Image src={arrow} alt="arrow" className="relative z-10" />
          </Link>
        </div>
      </div>

      {/* bottom right white bars */}
      <div
        style={{ height: flexHeight * 80 }}
        className="bg-[#f0f0f0] absolute bottom-0 right-0 max-h-[80px]
      w-[calc(calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)+calc(min(1600px,calc(0.8*100vw))/6*2))]
      "
      ></div>
    </div>
  );
}
