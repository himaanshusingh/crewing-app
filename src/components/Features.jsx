import { FEATURES_CARD } from "../data/features";

export default function Features() {
  return (
    <div className="bg-slate-50 pt-10 sm:pt-12 px-6 sm:px-12 lg:px-24 pb-12 sm:pb-14">
      <p className="text-xs font-bold text-[#2e5a87] tracking-[0.35px] uppercase mb-2 text-center">
        Core Capabilities
      </p>
      <h1 className="text-center text-2xl sm:text-[28px] font-bold tracking-[0.02em]">
        Built for the Modern Mariner
      </h1>
      <p className="mx-auto text-center max-w-xl sm:max-w-2xl text-[15px] text-[#505e71] mb-6 sm:mb-7.5">
        Complete control over your fleet's human resources. From recruitment to
        repatriation, iSHIP+ handles the complexity of maritime crewing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 perspective-distant mx-auto max-w-6xl">
        {FEATURES_CARD.map(({ img, imgBg, title, para }) => (
          <div
            key={title}
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm transition-all duration-350 ease-in-out transform-3d text-[#505e71] cursor-text hover:-translate-y-3 hover:translate-z-3 hover:shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18),0_12px_24px_-8px_rgba(15,23,42,0.12)]"
          >
            <img
              src={img}
              className="h-11 w-11 p-2.5 rounded-xl mb-2.5"
              style={{ background: imgBg }}
            />
            <h2 className="text-slate-900 font-bold">{title}</h2>
            <p className="text-[13px]">{para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
