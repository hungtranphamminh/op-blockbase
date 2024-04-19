export default function BackgroundDecorator() {
  return (
    <div className="w-full h-full absolute flex items-center justify-center">
      <div
        className="w-full max-w-[min(1600px,calc(0.8*100vw))] 
      h-[100vh] z-20 flex relative"
      >
        {/* 1st col */}
        <div className="w-1/6 h-full border-x border-[rgba(177,177,177,0.4)]"></div>
        {/* 1st col */}
        <div className="w-1/6 h-full border-r border-[rgba(177,177,177,0.4)]"></div>
        {/* 1st col */}
        <div className="w-1/6 h-full border-r border-[rgba(177,177,177,0.4)]"></div>
        {/* 1st col */}
        <div className="w-1/6 h-full border-r border-[rgba(177,177,177,0.4)]"></div>
        {/* 1st col */}
        <div className="w-1/6 h-full border-r border-[rgba(177,177,177,0.4)]"></div>
        {/* 1st col */}
        <div className="w-1/6 h-full border-r border-[rgba(177,177,177,0.4)]"></div>
      </div>
    </div>
  );
}
