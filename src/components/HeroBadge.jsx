import { BADGES, CHECK_ICON } from "../data/hero";

export default function HeroBadge() {
  return (
    <div className="text-slate-300 flex flex-wrap gap-4 sm:gap-5">
      {BADGES.map((label) => (
        <div key={label} className="flex gap-1.5 items-center">
          <img src={CHECK_ICON} width="22" height="21" />
          <p className="text-sm sm:text-base">{label}</p>
        </div>
      ))}
    </div>
  );
}
