import AboutUs from "../about-us/about-us";
import Motto from "../motto/motto";

export default function LandingPage() {
  return (
    <div className="w-full relative h-[3000px]">
      <Motto />
      <AboutUs />
    </div>
  );
}
