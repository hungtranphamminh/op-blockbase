"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import InsightsCursor from "../cursor/insights-cursor";

export default function PostCard({ post }: any) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const updateCursorPos = useCallback(
    (event: any) => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect();
        setCursorPos({
          x: event.clientX - boundingRect.left,
          y: event.clientY - boundingRect.top,
        });
      }
    },
    [cursorPos]
  );

  return (
    <div className="w-full lg:pr-[15px] mb-[30px] lg:mb-[20px] relative">
      {/* img  */}
      <div
        ref={ref}
        className="w-full"
        onMouseEnter={() => {
          setHover(true);
          window.addEventListener("mousemove", updateCursorPos);
        }}
        onMouseLeave={() => {
          setHover(false);
          window.removeEventListener("mousemove", updateCursorPos);
        }}
      >
        <Image src={post.imgUrl} width={500} height={500} alt="post" />
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
      {hover && <InsightsCursor x={cursorPos.x} y={cursorPos.y} />}
    </div>
  );
}
