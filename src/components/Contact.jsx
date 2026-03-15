export default function Contact() {
  return (
    <div className="bg-[#2e5a87] py-17.5 px-30">
      <div className="grid grid-cols-3 gap-8 justify-items-center mb-16">
        {[
          { number: "150k+", title: "Seafarers Managed" },
          { number: "2,400+", title: "Vessels Supported" },
          { number: "99.9%", title: "Compliance Rate" },
        ].map(({ number, title }) => (
          <div key={title}>
            <h2 className="text-[50px] font-bold text-white mb-2">{number}</h2>
            <p className="text-blue-500 text-base text-center">{title}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12.25 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-[30px] mb-3.75 font-bold">
          Ready to modernize your crewing operations?
        </h2>
        <p className="text-blue-100 text-lg mb-6.25">
          Join the leading shipping companies using iSHIP+ to reduce costs and
          improve crew welfare.
        </p>
        <div className="flex gap-4 justify-center flex-wrap max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Enter your work email"
            className="min-w-50 py-5 px-6.25 rounded-full text-base bg-white text-gray-500 h-13.75 w-87.5 border-none outline-none"
          />
          <button className="bg-blue-500 text-white font-bold text-base py-4 px-8 border-none rounded-full cursor-pointer">
            Get Demo
          </button>
        </div>
      </div>
    </div>
  );
}
