import axios from "axios";
import { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { companySignupFields, crewSignupFields } from "../data/signup";

const initialDetails = { name: "", email: "", password: "", cPassword: "" };

export default function SignupForm() {
  const { person } = useParams();
  const navigate = useNavigate();
  const alt = person === "company" ? { label: "crew", to: "/signup/crew" } : { label: "company", to: "/signup/company" }; // prettier-ignore

  const [details, setDetails] = useState(initialDetails);
  const { name, email, password, cPassword } = details;

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    switch (person) {
      case "company":
        return axios
          .post("http://localhost:3000/company/signup", { name, email, password, confirmPassword: cPassword })
          .then((res) => navigate("/login-company", { state: { company: res.data } }))
          .catch((err) => navigate('/login-company'));
      case "crew":
        return axios
          .post("http://localhost:3000/crew/signup", { name, email, password, confirmPassword: cPassword })
          .then((res) => navigate("/login-crew", { state: { crew: res.data } }))
          .catch((err) => navigate('/login-crew'));
      default:
        console.log('Not found')
    } // prettier-ignore
  }

  return (
    <div className="flex items-center justify-center flex-col px-8 py-2.5 w-[50vw]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-100 bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)] px-10 py-5"
      >
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
          ({ forId, type, place, label , value, name}) => (
              <div className="mb-1" key={label}>
                <label htmlFor={forId} className="block text-[13px] font-semibold text-slate-700 mb-1">
                  {label}
                </label>
                <input
                  onChange={handleChange}
                  type={type}
                  placeholder={place}
                  id={forId}
                  name={name}
                  value={details[value]}
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
  );
}
