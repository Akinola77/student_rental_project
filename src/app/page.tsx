import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Accreditations from "@/components/Accreditations";
import WhatsHappening from "@/components/WhatsHappening";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ocu-bg">
      <HeroSlider />
      <div className="relative z-10 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
        <Services />
      </div>
      <div className="relative z-10 bg-white">
        <Accreditations />
      </div>
      <div className="relative z-10 bg-white" id="ocu-live">
        <WhatsHappening />
      </div>
    </div>
  );
}
