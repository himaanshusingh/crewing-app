export default function PreNav({ access }) {
  return (
    <div className="bg-[#172031] text-slate-200 flex justify-between h-10 items-center px-40 text-xs">
      <div className="flex flex-row justify-between w-75">
        <p className="border border-slate-400/30 rounded-full px-2.5 py-1">
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
