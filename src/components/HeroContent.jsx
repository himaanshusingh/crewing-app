import { BUTTONS } from "../data/hero";
import HeroBadge from "./HeroBadge";

export default function HeroContent() {
  return (
    <div className="absolute top-15 left-6 sm:left-16 lg:left-37.5 w-[90vw] sm:w-120 lg:w-140">
      <p className="text-xs font-semibold text-[#6fa1c5] uppercase tracking-[0.06em] py-1.25 px-3.25 rounded-full bg-[#6fa1c5]/20 border border-[#6fa1c5]/30 backdrop-blur-sm inline-block mb-3">
        ● NEXT GEN MCOS
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white tracking-[0.05em] leading-[1.1em] mb-3">
        Seamless Crew Management
      </h1>
      <p className="text-base sm:text-lg mb-5 text-slate-300">
        iSHIP+ revolutionizes maritime HR with AI-driven recruitment, compliance
        tracking, and crew scheduling. Trusted by top manning agencies
        worldwide.
      </p>
      <div className="flex flex-wrap gap-3 mb-5">
        {BUTTONS.map(({ label, style }) => (
          <button
            key={label}
            className={`py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-bold text-white rounded-full cursor-pointer ${style}`}
          >
            {label}
          </button>
        ))}
      </div>
      <HeroBadge />
    </div>
  );
}
