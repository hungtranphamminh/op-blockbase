export default function BackgroundDecorator() {
  return (
    <div
      className="w-full max-w-[min(1600px,calc(0.8*100vw))] 
    xl:h-[calc(100vh-80px)]
    h-[calc(100vh-50px)] 
    flex relative"
    >
      {/* 1st col */}
      <div className="w-1/6 h-full border-x border-gray-400"></div>
      {/* 1st col */}
      <div className="w-1/6 h-full border-x border-gray-400"></div>
      {/* 1st col */}
      <div className="w-1/6 h-full border-x border-gray-400"></div>
      {/* 1st col */}
      <div className="w-1/6 h-full border-x border-gray-400"></div>
      {/* 1st col */}
      <div className="w-1/6 h-full border-x border-gray-400"></div>
      {/* 1st col */}
      <div className="w-1/6 h-full border-x border-gray-400"></div>
    </div>
  );
}
