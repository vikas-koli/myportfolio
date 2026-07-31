import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
     navigate("/dashboard");
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F5F6F4] relative overflow-hidden p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Lattice motif, background texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="lattice" width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M28 0 L56 28 L28 56 L0 28 Z"
              fill="none"
              stroke="#640956"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice)" />
      </svg>

      {/* Corner signature flourish */}
      <svg
        className="absolute -top-24 -right-24 w-96 h-96 opacity-[0.08] pointer-events-none"
        viewBox="0 0 400 400"
      >
        <defs>
          <pattern id="lattice-corner" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="#C9A24B" strokeWidth="1.2" />
          </pattern>
        </defs>
        <circle cx="200" cy="200" r="200" fill="url(#lattice-corner)" />
      </svg>

      <div className="relative w-full max-w-md">
        {/* Brand mark */}
        <div className="flex items-center gap-3 mb-8 justify-center">
          
          <span className="font-display text-2xl font-semibold text-[#d11653] tracking-tight">
            ExpertPlus
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-[0_1px_2px_rgba(28,43,46,0.04),0_16px_40px_rgba(28,43,46,0.08)] border border-[#E8E7E2] overflow-hidden">
          {/* Top accent bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#0E4B4B] via-[#C9A24B] to-[#0E4B4B]" />

          <div className="px-8 pt-9 pb-8">
            <p className="font-mono text-[11px] tracking-[0.18em] text-[#601e72] uppercase mb-2">
              Secure admin access
            </p>
            <h1 className="font-display text-[28px] font-semibold text-[#1C2B2E] mb-1">
              Welcome back
            </h1>
            <p className="font-body text-sm text-[#6B7573] mb-8">
              Sign in to manage your dashboard.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="font-body block text-xs font-medium text-[#3E4A47] mb-1.5">
                  Email address
                </label>
                <div
                  className={`flex items-center gap-2.5 rounded-lg border bg-[#FAFAF8] px-3.5 py-2.5 transition-colors ${
                    focused === "email"
                      ? "border-[#0E4B4B] ring-2 ring-[#0E4B4B]/10"
                      : "border-[#E1E0DA]"
                  }`}
                >
                  <Mail size={16} className="text-[#8B9491] shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="you@expertplus.ae"
                    className="font-body w-full bg-transparent text-sm text-[#1C2B2E] placeholder:text-[#A3ABA8] outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="font-body block text-xs font-medium text-[#3E4A47]">
                    Password
                  </label>
                 
                </div>
                <div
                  className={`flex items-center gap-2.5 rounded-lg border bg-[#FAFAF8] px-3.5 py-2.5 transition-colors ${
                    focused === "password"
                      ? "border-[#0E4B4B] ring-2 ring-[#0E4B4B]/10"
                      : "border-[#E1E0DA]"
                  }`}
                >
                  <Lock size={16} className="text-[#8B9491] shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocused("password")}
                    onBlur={() => setFocused("")}
                    placeholder="••••••••"
                    className="font-body w-full bg-transparent text-sm text-[#1C2B2E] placeholder:text-[#A3ABA8] outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="text-[#8B9491] hover:text-[#3E4A47] transition-colors shrink-0"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="font-body w-full flex items-center justify-center gap-2 rounded-lg bg-[#d11653] text-white text-sm font-medium py-2.5 mt-2 hover:bg-[#601e72] transition-colors disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign in"}
                {!loading && <ArrowRight size={15} />}
              </button>
            </form>
          </div>
        </div>

        <p className="font-body text-center text-xs text-[#8B9491] mt-6">
          Protected admin area · ExpertPlus Business Setup
        </p>
      </div>
    </div>
  );
}