import { AVATAR, CREW, HERO_STATS } from "../data/hero";

export default function HeroDashboard() {
  return (
    <div className="hidden lg:block absolute top-15 right-8 xl:right-37.5 w-sm xl:max-w-none xl:min-w-137.5 text-white bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 xl:p-6.25 shadow-2xl">
      {/* Header */}
      <div className="border-b border-white mb-4 pb-4 flex justify-between items-center">
        <div className="flex gap-3.75 items-center">
          <p className="bg-[#2e5a87] rounded-full py-1.25 px-2">CP</p>
          <div>
            <p className="text-base font-bold">Captain's Portal</p>
            <p className="text-xs">Vessel: MV Atlantic Star</p>
          </div>
        </div>
        <p className="bg-green-500/20 border border-green-500/30 text-green-400 py-1.25 px-2.25 rounded-lg text-xs">
          Active Voyage
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-between gap-3.75">
        {HERO_STATS.map(({ label, value, sub, subColor }) => (
          <div
            key={label}
            className="flex-1 bg-slate-950/50 border border-white/5 rounded-2xl p-4"
          >
            <p className="text-xs tracking-[0.06em]">{label}</p>
            <div className="flex gap-1.25 items-center">
              <h1 className="text-2xl">{value}</h1>
              <p className={`text-xs mt-2 ${subColor}`}>{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Crew List */}
      <div className="flex flex-col gap-3 mt-5">
        {CREW.map(({ name, role }) => (
          <div
            key={name}
            className="flex items-center justify-between bg-slate-950/30 rounded-lg p-3"
          >
            <div className="flex gap-2.5">
              <img src={AVATAR} className="h-7.5 w-8" />
              <div className="text-sm leading-[1.2em]">
                <p className="font-bold">{name}</p>
                <p className="text-xs text-slate-400">{role}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">On Board</p>
          </div>
        ))}
      </div>
    </div>
  );
}
