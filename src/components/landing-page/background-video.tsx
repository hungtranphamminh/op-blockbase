export default function BackgroundVideo() {
  return (
    <div className="w-full absolute top-0 left-0 h-screen overflow-hidden">
      <video
        className="w-[100%] h-[100%]"
        style={{ objectFit: "cover" }}
        muted
        autoPlay
        loop
      >
        <source src="/videos/landing-page/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
