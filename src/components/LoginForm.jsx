import axios from "axios";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const initialDetails = { email: "", password: "" };

export default function LoginForm() {
  const navigate = useNavigate();

  const [detail, setDetail] = useState(initialDetails);
  const { email, password } = detail;

  function handleChange(e) {
    const { type, value } = e.target;
    setDetail((prev) => ({ ...prev, [type]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/company/login", { email, password })
      .then((res) =>
        navigate("/login-company", { state: { company: res.data } }),
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex items-center justify-center flex-col px-8 py-2.5 w-[50vw]">
      <form
        className="w-full max-w-100 bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)] px-10 py-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[22px] font-bold text-slate-900 mt-0 mb-1">
          Welcome back
        </h2>
        <p className="text-sm text-slate-500 mt-0 mb-7">
          Sign in to access your dashboard
        </p>

        {/* Demo Quick Access */}
        <div className="mb-1">
          <label
            htmlFor="demo"
            className="text-[11px] uppercase tracking-[0.05em] text-slate-500 mb-1.5 block"
          >
            Demo Quick Access
          </label>
          <select
            name="account"
            id="demo"
            className="w-full px-2.5 py-2 rounded-md border border-slate-200 text-[13px] mt-1 mb-5"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "superAdmin") navigate("/login-company");
              else if (value === "demoCrew") navigate("/login-crew");
            }}
          >
            <option value="">--- Select a demo account ---</option>
            <option value="superAdmin">Super Admin</option>
            <option value="demoCrew">Demo Crew</option>
          </select>
        </div>

        {/* Email */}
        <div className="mb-1">
          <label
            htmlFor="email"
            className="block text-[13px] font-semibold text-slate-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            id="email"
            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-[15px] transition-[border-color,box-shadow] duration-200 box-border mb-4"
            onChange={handleChange}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="mb-1">
          <label
            htmlFor="pswd"
            className="block text-[13px] font-semibold text-slate-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="pswd"
            placeholder="••••••••"
            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-[15px] transition-[border-color,box-shadow] duration-200 box-border mb-4"
            onChange={handleChange}
            value={password}
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between gap-3 text-sm text-slate-900 mb-6">
          <div className="flex gap-2.5">
            <input type="checkbox" id="remember" className="cursor-pointer" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link to="#">Forgot Password?</Link>
        </div>

        {/* Login Button */}
        <button className="w-full py-3.5 bg-blue-600 text-white border-none rounded-lg text-[15px] font-semibold cursor-pointer">
          Log in
        </button>

        {/* Bottom Links */}
        <div className="pt-5 border-t border-slate-100 text-[13px] text-slate-500 text-center mt-5 mb-0">
          <span>Don't have an account?</span> &nbsp;
          <NavLink className="text-slate-600 font-medium" to="/signup/company">
            Register company
          </NavLink>
          &nbsp;
          <p className="mt-1 mb-0">
            <NavLink className="text-slate-600 font-medium" to="/signup/crew">
              Register as a crew
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
