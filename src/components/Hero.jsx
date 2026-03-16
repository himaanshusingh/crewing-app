import { FLEETS } from "../data/hero";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <>
      <div className="relative top-section">
        <div className="min-w-full h-125 sm:h-137.5 lg:h-125 bg-[#30486A] absolute opacity-80" />
        <video
          src="https://crewing.ishipplus.cloud/bgvideo.mp4"
          autoPlay
          muted
          loop
          className="h-125 sm:h-137.5 lg:h-125 min-w-full w-auto object-cover"
        />
        <HeroContent />
        <HeroDashboard />
      </div>

      <div className="h-24 sm:h-32 flex flex-col justify-center items-center gap-3 sm:gap-4 text-sm sm:text-base text-[#7e8896] tracking-[0.06em] [word-spacing:0.06em] px-6">
        <h1>POWERING GLOBAL FLEETS</h1>
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-15 font-bold text-base sm:text-lg">
          {FLEETS.map((fleet) => (
            <li key={fleet}>{fleet}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
