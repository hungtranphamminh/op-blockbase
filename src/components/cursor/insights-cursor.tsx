import { useEffect, useRef } from "react";

export default function InsightsCursor({ x, y }: any) {
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
        ref.current.style.top = `${y}px`;
        ref.current.style.left = `${x}px`;
      }
    });
  }, [x, y]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        zIndex: 9999,
      }}
      className="w-[100px] h-[100px] rounded-full bg-white"
    ></div>
  );
}
