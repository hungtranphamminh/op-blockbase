import { useEffect, useRef } from "react";
import Image from "next/image";
import toarrow from "@/images/insights/top right.svg";
export default function InsightsCursor({ x, y, hover }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prevPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prevPos.current.x !== x || prevPos.current.y !== y) {
      if (ref.current) {
        ref.current.style.top = `${y}px`;
        ref.current.style.left = `${x}px`;
      }
      prevPos.current = { x, y };
    }
    requestAnimationFrame(() => {
      if (ref.current) {
        const size = hover ? 100 : 0;
        ref.current.style.top = `${y - size / 2}px`;
        ref.current.style.left = `${x - size / 2}px`;
      }
    });
  }, [x, y, hover]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        zIndex: 9999,
      }}
      className={`bg-white rounded-full flex flex-col gap-1 items-center justify-center ${
        hover
          ? "size-[100px]"
          : "size-[0px] transition-all duration-200 opacity-0"
      }`}
    >
      <Image src={toarrow} width={28} height={28} alt="arrow" />
      <p className="text-xs">VIEW</p>
    </div>
  );
}
