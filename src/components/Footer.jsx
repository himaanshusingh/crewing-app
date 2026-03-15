import { Link } from "react-router-dom";
import footer from "../data/footer";

export default function Footer() {
  return (
    <div className="bg-slate-950 border-t border-slate-800 pt-16.25 px-32.5 pb-8 mx-auto">
      <div className="flex flex-wrap gap-8 justify-between mb-12.5">
        <div className="h-42.5 w-[320px]">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 36'%3E%3Ctext x='0' y='26' font-size='24' font-weight='bold' fill='%23fff' font-family='system-ui,sans-serif'%3EiSHIP+%3C/text%3E%3C/svg%3E"
            className="h-10.25 w-auto mb-6 block"
          />
          <p className="text-sm leading-[1.6] text-slate-400 mb-4">
            iSHIP+ is the premier Crew Management System designed for the
            complexities of the modern maritime industry.
          </p>
          <div className="flex gap-4">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/%3E%3C/svg%3E"
              className="w-5 h-5 block"
            />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z'/%3E%3C/svg%3E"
              className="w-5 h-5 block"
            />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E"
              className="w-5 h-5 block"
            />
          </div>
        </div>
        {footer.map(({ title, options }) => (
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
      <div className="border-t border-slate-800 flex justify-between pt-7.5">
        <p className="text-sm text-slate-500">
          © 2023 iSHIP+ Systems. All rights reserved.
        </p>
        <div className="text-slate-500 flex gap-6">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
