import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="relative">
        <div className="h-158 w-[50vw] bg-[#0a2a48] absolute z-10 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200"
          className="relative h-158 w-[50vw] object-cover"
        />
        <div className="absolute bottom-12.5 z-20 text-white px-5">
          <h2 className="text-[28px] mb-3 font-bold leading-tight tracking-[-0.02em]">
            Manage your global fleet with precision.
          </h2>
          <p className="text-[15px]">
            Enterprise maritime crew management trusted by leading shipping
            companies worldwide.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <LoginForm />
    </div>
  );
}
