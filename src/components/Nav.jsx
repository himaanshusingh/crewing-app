import { NavLink } from "react-router-dom";
import navLinks from "../data/navLinks";

export default function Nav() {
  return (
    <nav className="h-14 sm:h-17.5 bg-[#F4F6F7] px-6 sm:px-16 lg:px-32 py-3 text-base flex justify-between items-center sticky top-0 z-10">
      <img
        src="https://crewing.ishipplus.cloud/logo.png"
        className="h-9 sm:h-10 w-auto p-1 rounded-[10px] border border-slate-400/25 bg-white"
      />
      <div className="flex flex-row gap-1 sm:gap-2.5">
        {navLinks.map(({ to, text }) => (
          <NavLink
            key={to}
            to={to}
            className="py-2 px-2 sm:px-2.75 text-xs sm:text-sm text-slate-600 font-bold hover:text-[#1e3a5f] hover:border-[rgba(13,148,136,0.24)] hover:bg-[rgba(46,90,135,0.12)] hover:no-underline hover:-translate-y-px hover:rounded-lg flex items-center"
          >
            {text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
