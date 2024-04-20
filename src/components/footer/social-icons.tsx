"use client";
import { useState } from "react";

export default function SocialIcons() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  return (
    <div className="flex gap-[10px] items-start text-white">
      {/* telegram */}
      <div
        className={`size-[46px] flex items-center justify-center rounded-full border border-white relative
                ${hover1 ? "before:scale-100" : "bg-[#181a1f]"}
                before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:z-10 before:transition-all before:duration-300
                before:scale-0 before:bg-[#fff] before:rounded-full
                `}
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
      >
        <svg
          stroke="currentColor"
          fill={`${hover1 ? "#181a1f" : "#fff"}`}
          stroke-width="0"
          version="1.1"
          viewBox="0 0 16 16"
          className="icon relative z-20"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path>
        </svg>
      </div>
      {/* telegram */}
      <div
        className={`size-[46px] flex items-center justify-center rounded-full border border-white relative
                ${hover2 ? "before:scale-100" : "bg-[#181a1f]"}
                before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:z-10 before:transition-all before:duration-300
                before:scale-0 before:bg-[#fff] before:rounded-full
                `}
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        <svg
          stroke="currentColor"
          fill={`${hover2 ? "#181a1f" : "#fff"}`}
          stroke-width="0"
          version="1.1"
          viewBox="0 0 16 16"
          className="icon relative z-20"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path>
        </svg>
      </div>
      {/* telegram */}
      <div
        className={`size-[46px] flex items-center justify-center rounded-full border border-white relative
                ${hover3 ? "before:scale-100" : "bg-[#181a1f]"}
                before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:z-10 before:transition-all before:duration-300
                before:scale-0 before:bg-[#fff] before:rounded-full
                `}
        onMouseEnter={() => setHover3(true)}
        onMouseLeave={() => setHover3(false)}
      >
        <svg
          stroke={`${hover3 ? "#181a1f" : "#fff"}`}
          fill={`${hover3 ? "#181a1f" : "#fff"}`}
          stroke-width="0"
          viewBox="0 0 448 512"
          className="icon relative z-20"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      </div>
      {/* telegram */}
      <div
        className={`size-[46px] flex items-center justify-center rounded-full border border-white relative
                ${hover4 ? "before:scale-100" : "bg-[#181a1f]"}
                before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:z-10 before:transition-all before:duration-300
                before:scale-0 before:bg-[#fff] before:rounded-full
                `}
        onMouseEnter={() => setHover4(true)}
        onMouseLeave={() => setHover4(false)}
      >
        <svg
          stroke="currentColor"
          fill={`${hover4 ? "#181a1f" : "#fff"}`}
          stroke-width="0"
          viewBox="0 0 448 512"
          className="icon relative z-20"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
        </svg>
      </div>
    </div>
  );
}
