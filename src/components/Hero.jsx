import fleets from "../data/fleets";

export default function Hero() {
  return (
    <>
      <div className="top-section">
        <div className="min-w-[99vw] h-125 bg-[#30486A] absolute opacity-80"></div>
        {/* prettier-ignore */}
        <video src="https://crewing.ishipplus.cloud/bgvideo.mp4" autoPlay muted loop className="h-125 min-w-[99vw] w-auto object-cover"></video>

        <div className="absolute top-45 left-37.5 w-140 h-87.5">
          <p className="text-xs font-semibold text-[#6fa1c5] uppercase tracking-[0.06em] py-1.25 px-3.25 rounded-full bg-[#6fa1c5]/20 border border-[#6fa1c5]/30 backdrop-blur-sm w-37.5">
            ● NEXT GEN MCOS
          </p>
          <h1 className="text-[60px] font-bold text-white tracking-[0.05em] leading-[1.1em] mb-3.75">
            Seamless Crew Management
          </h1>
          <p className="text-lg mb-6.25 text-slate-300">
            iSHIP+ revolutionizes maritime HR with AI-driven recruitment,
            compliance tracking, and crew scheduling. Trusted by top manning
            agencies worldwide.
          </p>
          <button className="py-4 px-8 mr-5 mb-6.25 text-lg font-bold text-white rounded-full bg-[#2e5a87] border border-[#6fa1c5]/30 cursor-pointer">
            Start Free Trial
          </button>
          <button className="py-4 px-8 mr-5 mb-6.25 text-lg font-bold text-white rounded-full bg-[#6fa1c5]/20 border border-[#6fa1c5]/30 cursor-pointer">
            Watch Video
          </button>
          <div className="text-slate-300 flex gap-5">
            <div className="flex gap-1.5">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E"
                width="22"
                height="21"
              />
              <p> ISO 27001 Certified</p>
            </div>
            <div className="flex gap-1.5">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E"
                width="22"
                height="21"
              />
              <p> MLC 2006 Compliant</p>
            </div>
          </div>
        </div>

        <div className="absolute top-45 right-37.5 min-w-137.5 h-91.25 text-white bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6.25 shadow-2xl">
          {/* First */}
          <div className="border-b border-white mb-3.75 pb-3.75 flex justify-between items-center">
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

          {/* Second */}
          <div className="flex justify-between gap-3.75">
            <div className="h-21.25 w-65 bg-slate-950/50 border border-white/5 rounded-2xl p-4.25">
              <p className="text-xs tracking-[0.06em]">Total Crew</p>
              <div className="flex gap-1.25 items-center">
                <h1 className="text-2xl">24</h1>
                <p className="text-xs mt-2.25 text-[#45c679]">Full</p>
              </div>
            </div>
            <div className="h-21.25 w-65 bg-slate-950/50 border border-white/5 rounded-2xl p-4.25">
              <p className="text-xs tracking-[0.06em]">Document Expiring</p>
              <div className="flex gap-1.25 items-center">
                <h1 className="text-2xl">3</h1>
                <p className="text-xs mt-2.25 text-amber-400">Action Req</p>
              </div>
            </div>
          </div>

          {/* Third */}
          <div className="flex flex-col gap-3.75 mt-6.25">
            {[
              { name: "Alexei Ivanov", role: "Chief Engineer" },
              { name: "Maria Santos", role: "2nd Officer" },
            ].map(({ name, role }) => (
              <div
                key={name}
                className="flex items-center justify-between bg-slate-950/30 rounded-lg p-3"
              >
                <div className="flex gap-2.5">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%232e5a87' cx='20' cy='20' r='20'/%3E%3Ccircle fill='%23fff' opacity='.95' cx='20' cy='15' r='5'/%3E%3Cellipse fill='%23fff' opacity='.95' cx='20' cy='32' rx='9' ry='7'/%3E%3C/svg%3E"
                    className="h-7.5 w-8"
                  />
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
      </div>
      <div className="h-32.5 flex flex-col justify-center items-center gap-4.5 text-base text-[#7e8896] tracking-[0.06em] [word-spacing:0.06em]">
        <h1>POWERING GLOBAL FLEETS</h1>
        <ul className="flex justify-center gap-15 font-bold text-lg">
          {fleets.map((fleet) => (
            <li key={fleet}>{fleet}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
