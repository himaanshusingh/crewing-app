export default function PreNav({ access }) {
  return (
    <div className="bg-[#172031] text-slate-200 flex justify-between h-9 sm:h-10 items-center px-6 sm:px-16 lg:px-32 text-xs">
      <div className="flex flex-row gap-2 sm:gap-0 justify-between sm:w-75">
        <p className="border border-slate-400/30 rounded-full px-2.5 py-1 hidden sm:block">
          iSHIP — Crew Management System
        </p>
        <p className="px-2.5 py-1">{access}</p>
      </div>
      <a href="#" className="hover:underline">
        support@iship.com
      </a>
    </div>
  );
}
