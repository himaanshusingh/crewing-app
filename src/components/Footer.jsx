import { Link } from "react-router-dom";
import { FOOTER_LIST, SOCIAL_ICONS } from "../data/footer";

export default function Footer() {
  return (
    <div className="bg-slate-950 border-t border-slate-800 pt-12 sm:pt-16 px-6 sm:px-12 lg:px-24 pb-8 mx-auto">
      <div className="flex flex-wrap gap-8 justify-between mb-10 sm:mb-12">
        <div className="w-full sm:w-64 lg:w-80">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 36'%3E%3Ctext x='0' y='26' font-size='24' font-weight='bold' fill='%23fff' font-family='system-ui,sans-serif'%3EiSHIP+%3C/text%3E%3C/svg%3E"
            className="h-10 w-auto mb-6 block"
          />
          <p className="text-sm leading-relaxed text-slate-400 mb-4">
            iSHIP+ is the premier Crew Management System designed for the
            complexities of the modern maritime industry.
          </p>
          <div className="flex gap-4">
            {SOCIAL_ICONS.map((src, i) => (
              <img key={i} src={src} className="w-5 h-5 block" />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-8 w-2xl justify-between sm:gap-12">
          {FOOTER_LIST.map(({ title, options }) => (
            <div key={title}>
              <h3 className="text-base font-bold text-white mb-4">{title}</h3>
              <ul>
                {options.map((option) => (
                  <li key={option} className="text-slate-400 text-sm mb-2">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6 sm:pt-7">
        <p className="text-sm text-slate-500">
          © 2023 iSHIP+ Systems. All rights reserved.
        </p>
        <div className="text-slate-500 flex gap-6 text-sm">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
