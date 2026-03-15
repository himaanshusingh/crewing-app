import featuresCard from "../data/featuresCard";

export default function Features() {
  return (
    <div className="bg-slate-50 pt-12 px-16 pb-14">
      <p className="text-xs font-bold text-[#2e5a87] tracking-[0.35px] uppercase mb-2 text-center">
        Core Capabilities
      </p>
      <h1 className="text-center text-[28px] font-bold tracking-[0.02em]">
        Built for the Modern Mariner
      </h1>
      <p className="mx-auto text-center w-175 text-[15px] text-[#505e71] mb-7.5">
        Complete control over your fleet's human resources. From recruitment to
        repatriation, iSHIP+ handles the complexity of maritime crewing.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 perspective-distant mx-25">
        {featuresCard.map(({ img, imgBg, title, para }) => (
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
