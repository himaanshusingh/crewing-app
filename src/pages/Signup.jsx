import { NavLink, useParams } from "react-router-dom";
import { companySignupFields, crewSignupFields } from "../data/signup";
import { companyListItems, crewListItems } from "../data/signup";

export default function Login() {
  const { person } = useParams();
  const alt = person === "company" ? { label: "crew", to: "/signup/crew" } : { label: "company", to: "/signup/company" }; // prettier-ignore

  return (
    <div className="flex">
      <div className="bg-[#182235] text-white flex flex-col justify-center pl-10 w-[50vw] h-[85vh]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-5 p-3"
        >
          {person === "company" ? (
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          ) : (
            <>
              <circle cx="12" cy="8" r="3.5"></circle>
              <path d="M4.5 20c1.8-3.2 5-5 7.5-5s5.7 1.8 7.5 5"></path>
            </>
          )}
        </svg>

        <h2 className="text-[28px] font-semibold mt-0 mb-4 leading-tight tracking-tight">
          {person == "company" ? "Register your company" : "Crew Registeration"}
        </h2>

        <p className="w-105 text-[#e9eaec] mb-6">
          {person == "company"
            ? "Create your company account and become the first administrator. Start with a 30-day free trial—no credit card required."
            : "Create your crew account to access your profile, documents, vessel assignments, and more. Use your company's join link if you have one."}
        </p>

        <ul className="text-[#e9eaec] mb-5">
          {(person === "company" ? companyListItems : crewListItems).map(
            (item) => (
              <li className="mb-2.5 ml-4 text-sm opacity-90 list-disc" key={item}>{item}</li>
            ), // prettier-ignore
          )}
        </ul>

        <p className="text-sm m-0 opacity-85">
          Already have an account? &nbsp;
          <NavLink to="/login" className="text-[#76D19B]">
            Log in
          </NavLink>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center flex-col px-8 py-2.5 w-[50vw]">
        <form className="w-full max-w-100 bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)] px-10 py-5">
          <h2 className="text-[22px] font-bold text-slate-900 mt-0 mb-1">
            {person == "company"
              ? "Create Company account"
              : "Create your account"}
          </h2>

          <p className="text-sm text-slate-500 mt-0 mb-4">
            {person == "company"
              ? "You'll be the first admin. Add crew later via invite links."
              : "Fill in your details. You can complete your profile after signing in."}
          </p>

          {(person === "company" ? companySignupFields : crewSignupFields).map(
            ({ forId, type, place, label }) => (
              <div className="mb-1" key={label}>
                <label htmlFor={forId} className="block text-[13px] font-semibold text-slate-700 mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={place}
                  id={forId}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-[15px] transition-[border-color,box-shadow] duration-200 box-border mb-2"
                />
              </div>
            ), // prettier-ignore
          )}

          <button className="w-full py-3.5 bg-[#2E5A87] text-white border-none rounded-lg text-[15px] font-semibold cursor-pointer mt-3">
            {person == "company" ? "Create Company" : "Create Account"}
          </button>

          <p className="pt-2 border-t border-slate-100 text-[13px] text-slate-500 text-center mt-5">
            Are you {alt.label}? &nbsp;
            <NavLink to={alt.to} className="text-slate-600 font-medium">
              Register as {alt.label} instead
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
