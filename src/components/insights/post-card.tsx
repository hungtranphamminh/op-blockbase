"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import InsightsCursor from "../cursor/insights-cursor";

export default function PostCard({ post }: any) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCursorPos = (event: any) => {
      const { clientX, clientY } = event;
      if (ref.current) {
        const { left, top, width, height } =
          ref.current.getBoundingClientRect();
        const isInside =
          clientX > left &&
          clientX < left + width &&
          clientY > top &&
          clientY < top + height;

        if (isInside && hover) {
          setCursorPos({
            x: clientX - left,
            y: clientY - top,
          });
        }
      }
    };

    window.addEventListener("mousemove", updateCursorPos);

    return () => {
      window.removeEventListener("mousemove", updateCursorPos);
    };
  }, [hover]);

  return (
    <div className="w-full lg:pr-[15px] mb-[30px] lg:mb-[20px] relative">
      {/* img  */}
      <div
        className={`w-full relative ${
          hover ? "cursor-none" : "cursor-pointer"
        } aspect-w-7 aspect-h-5`}
        ref={ref}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <InsightsCursor x={cursorPos.x} y={cursorPos.y} hover={hover} />
        <Image src={post.imgUrl} layout="fill" objectFit="cover" alt="post" />
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
