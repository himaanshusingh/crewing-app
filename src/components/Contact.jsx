import { STATS } from "../data/contact";

export default function Contact() {
  return (
    <section className="bg-[#2e5a87] py-14 sm:py-16 px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center mb-12 sm:mb-16">
        {STATS.map(({ number, title }) => (
          <div key={title} className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {number}
            </h2>
            <p className="text-blue-400 text-sm sm:text-base text-center">
              {title}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to modernize your crewing operations?
        </h2>
        <p className="text-blue-100 text-base sm:text-lg mb-6">
          Join the leading shipping companies using iSHIP+ to reduce costs and
          improve crew welfare.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full sm:flex-1 py-4 px-6 rounded-full text-base bg-white text-gray-500 outline-none"
          />
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold text-base py-4 px-8 rounded-full">
            Get Demo
          </button>
        </div>
      </div>
    </section>
  );
}
