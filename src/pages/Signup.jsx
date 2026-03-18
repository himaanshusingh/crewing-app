import { NavLink, useParams } from "react-router-dom";
import { companyListItems, crewListItems } from "../data/signup";
import SignupForm from "../components/SignupForm";

export default function Login() {
  const { person } = useParams();

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
      <SignupForm />
    </div>
  );
}
