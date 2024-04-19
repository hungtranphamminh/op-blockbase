import AboutUs from "../about-us/about-us";
import Motto from "../motto/motto";
import OurTeam from "../our-team/our-team";
import Portfolio from "../portfolio/portfolio";

export default function LandingPage() {
  return (
    <div className="w-full relative h-[3000px]">
      <Motto />
      <AboutUs />
      <Portfolio />
      <OurTeam />
    </div>
  );
}
