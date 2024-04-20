"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PortfolioDecorator from "../column-decorator/portfolio-decorator";
import { getFadeInFromLeftVariants } from "@/utils/animation/landing-page/about-us-variants";
import blackarrow from "@/images/about-us/arrow.svg";
import whitearrow from "@/images/portfolio/white-arrow.svg";
import FooterDecorator from "../column-decorator/footer-decorator";
import SocialIcons from "./social-icons";

export default function Footer() {
  const [flexHeight, setFlexHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      if (footerRef.current) {
        const rectSection = footerRef.current.getBoundingClientRect();

        const scrollTop = window.scrollY;
        const sectionTop = scrollTop - rectSection.top;

        const sectionScrolled = sectionTop / rectSection.height;
        setFlexHeight(
          sectionScrolled > 1 ? 1 : sectionScrolled < 0 ? 0 : sectionScrolled
        );
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      controls.start("show");
    }, 3000);
  }, [controls]);

  return (
    <div
      className="w-full relative flex flex-col items-center justify-center bg-[#181a1f] h-fit "
      ref={footerRef}
    >
      {/* column grid background decorator */}
      <FooterDecorator />
      {/* main portfolio content */}
      <div className="w-full relative text-[#f0f0f0] h-full z-[9999]">
        <div className="w-full max-w-[min(1600px,calc(0.8*100vw))] h-full relative mx-auto pt-[120px]">
          {/* footer title */}
          <div className="lg:pt-[50px] mb-[30px]">
            <h2 className="lg:text-[4.375rem] sm:text-[2.5rem] text-[1.6rem] leading-[1.2] mb-[15px] -tracking-[1.5px]">
              Staying
            </h2>
            <h2 className="lg:leading-[0.8] lg:text-[7rem] sm:text-[3rem] sm:mb-0 text-[1.875rem] leading-[1.2] font-semibold -tracking-[1.5px]">
              One Block Ahead
            </h2>
          </div>
          {/* footer contact */}
          <div
            className="flex-col lg:flex-row sm:pb-[100px] sm:justify-between
          w-full gap-[25px] flex pb-[70px] items-start
          "
          >
            {/* social icons */}
            <SocialIcons />
            {/* info contact */}
            <div className="flex flex-col gap-[25px] sm:flex-row justify-between items-start lg:gap-[100px]">
              {/* hotline */}
              <div>
                <h2 className="uppercase sm:text-[1.5rem] sm:mb-2.5 text-[20px] mb-[5px] -tracking-[1.5px]">
                  HOTLINE
                </h2>
                <p className="lg:text-[18px] max-w-[300px] sm:text-[12px] text-[0.9rem]">
                  (+84) 90 909 0942
                </p>
              </div>
              {/* email */}
              <div>
                <h2 className="uppercase sm:text-[1.5rem] sm:mb-2.5 text-[20px] mb-[5px] -tracking-[1.5px]">
                  EMAIL
                </h2>
                <p className="lg:text-[18px] max-w-[300px] sm:text-[12px] text-[0.9rem]">
                  business@blockbase.co
                </p>
              </div>
              {/* address */}
              <div>
                <h2 className="uppercase sm:text-[1.5rem] sm:mb-2.5 text-[20px] mb-[5px] -tracking-[1.5px]">
                  ADDRESS
                </h2>
                <p className="lg:text-[18px] max-w-[300px] sm:text-[12px] text-[0.9rem]">
                  18 Dinh Tien Hoang, District 1, Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy right*/}
      <div className="relative z-[999] w-full lg:text-[18px] lg:py-[30px] sm:text-[12px] sm:py-[20px] text-center text-[8px] py-2.5 bg-[#181a1f] text-[#dddddd] border-t border-t-[#b1b1b166]">
        Copyright © 2022 BlockBase Ltd. All rights reserved ®
      </div>
      {/* top right white bars */}
      <div
        style={{ height: flexHeight * 53 }}
        className="bg-[#ddd] absolute top-0 right-0 max-h-[53px]
      w-[calc(calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)+calc(min(1600px,calc(0.8*100vw))/6*2))]
      "
      ></div>
    </div>
  );
}
