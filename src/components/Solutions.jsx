import { SOLUTIONS } from "../data/solutions";

export default function Solutions() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 items-center max-w-7xl mx-auto my-12 sm:my-20 px-6 sm:px-12 lg:px-8">
      <div className="relative w-full lg:flex-1">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 280'%3E%3Crect fill='%23e2e8f0' width='400' height='280'/%3E%3Ctext x='200' y='150' font-size='16' fill='%2394a3b8' text-anchor='middle' font-family='system-ui'%3ECaptain on bridge%3C/text%3E%3C/svg%3E"
          alt="Captain on bridge using tablet"
          className="w-full h-64 sm:h-96 lg:h-144 object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-lg">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E"
            className="h-9 sm:h-10 bg-green-100 rounded-full p-2.5 shrink-0"
          />
          <div>
            <h2 className="font-bold text-sm sm:text-base">
              Crew Change Approved
            </h2>
            <p className="text-xs sm:text-[13px]">
              Document verification complete. E-tickets issued.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:flex-1">
        <p className="text-[#2e5a87] text-sm font-semibold tracking-[0.35px] uppercase mb-3">
          WORKFLOW
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-[36px] mb-6 sm:mb-8 font-bold leading-[1.15] font-[Montserrat,sans-serif]">
          Streamlined from Shore to Sea
        </h1>
        <div className="flex flex-col gap-6 sm:gap-8">
          {SOLUTIONS.map(({ sno, title, para }) => (
            <div key={sno} className="flex gap-3.5">
              <h2 className="w-8 h-8 bg-[#2e5a87] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                {sno}
              </h2>
              <div>
                <h2 className="mb-2 text-base sm:text-lg font-bold">{title}</h2>
                <p className="text-sm sm:text-base leading-6 text-slate-600">
                  {para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
