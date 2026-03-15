import solutions from "../data/solutions";

export default function Solutions() {
  return (
    <div className="flex justify-between gap-16 items-center max-w-7xl mx-auto my-20">
      {/* Left */}
      <div className="relative">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 280'%3E%3Crect fill='%23e2e8f0' width='400' height='280'/%3E%3Ctext x='200' y='150' font-size='16' fill='%2394a3b8' text-anchor='middle' font-family='system-ui'%3ECaptain on bridge%3C/text%3E%3C/svg%3E"
          alt="Captain on bridge using tablet"
          className="w-200 h-144 object-cover block flex-[1_1_400px] rounded-3xl overflow-hidden shadow-2xl"
        />
        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl p-4.25 flex items-center gap-4 shadow-lg">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E"
            className="h-10 bg-green-100 rounded-full p-2.5"
          />
          <div>
            <h2 className="font-bold">Crew Change Approved</h2>
            <p className="text-[13px]">
              Document verification complete. E-tickets issued.
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div>
        <p className="text-[#2e5a87] text-sm font-semibold tracking-[0.35px] uppercase mb-3">
          WORKFLOW
        </p>
        <h1 className="text-[36px] mb-8 font-bold leading-[1.15] font-[Montserrat,sans-serif]">
          Streamlined from Shore to Sea
        </h1>
        <div className="flex flex-col gap-8">
          {solutions.map(({ sno, title, para }) => (
            <div key={sno} className="flex gap-3.75">
              <h2 className="w-8 h-8 bg-[#2e5a87] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                {sno}
              </h2>
              <div>
                <h2 className="mb-2 text-lg font-bold">{title}</h2>
                <p className="text-base leading-6 text-slate-600">{para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
