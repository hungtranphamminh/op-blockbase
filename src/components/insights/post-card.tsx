"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import InsightsCursor from "../cursor/insights-cursor";
import dot from "@/images/insights/dot.svg";

export default function PostCard({ post }: any) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  /* update current mouse cursor and hover status */
  const updateCursorPos = (event: any) => {
    const { clientX, clientY } = event;
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const isInside =
        clientX > left &&
        clientX < left + width &&
        clientY > top &&
        clientY < top + height;

      if (isInside) {
        setHover(true);
      } else setHover(false);

      setCursorPos({
        x: clientX - left,
        y: clientY - top,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPos);

    return () => {
      window.removeEventListener("mousemove", updateCursorPos);
    };
  }, [hover]);

  return (
    <div className="w-full lg:pr-[15px] mb-[30px] lg:mb-[20px] relative">
      {/* img  */}
      <div className="relative w-full">
        <div
          className={`w-full relative ${
            hover ? "cursor-none" : ""
          } aspect-w-7 aspect-h-5`}
          ref={ref}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <InsightsCursor x={cursorPos.x} y={cursorPos.y} hover={hover} />
          <Image
            src={post.imgUrl}
            style={{ objectFit: "cover" }}
            fill
            alt="post img"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black via-40% to-transparent rounded-b-2xl transition-all duration-500 
            ${hover ? "opacity-100" : "opacity-0"}
            `}
          ></div>
        </div>
        <div
          className={`absolute bottom-3 left-3 flex z-40 text-white transition-all duration-500 
          ${hover ? "opacity-100" : "opacity-0"}
          `}
        >
          <p>{post.author}</p>
          <Image src={dot} alt="dot" width={24} height={24} />
          <p>{post.date}</p>
        </div>
      </div>

      {/* post title*/}
      <div
        className="2xl:mt-[30px] xl:mt-[20px] lg:mt-[15px] sm:mt-[15px] mt-[10px] text-left
      xl:p-[10px_15px_50px_15px] lg:p-[10px_15px_30px_15px] sm:pl-[25px] leading-normal font-medium
      xl:text-[1.5rem] xl:mb-[20px] lg:text-[1.2rem] lg:mb-[10px] sm:text-[1.1rem] sm:mb-[30px] -tracking-[1.5px]
      "
      >
        {post.title}
      </div>
    </div>
  );
}
