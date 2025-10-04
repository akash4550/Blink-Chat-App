import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
        </div>
        
        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* LOGO */}
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="flex flex-col items-center gap-3 group">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-secondary/20 blur-xl group-hover:blur-2xl transition-all duration-300 -z-10" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Create Account
                </h1>
                <p className="text-base-content/70 text-lg">Get started with your free account</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="form-control group">
              <label className="label">
                <span className="label-text font-semibold text-base-content/80">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-base-content/50 group-focus-within:text-secondary transition-colors" />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-12 h-14 rounded-xl border-2 border-base-300 focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-300 bg-base-100/50 backdrop-blur-sm focus-ring"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control group">
              <label className="label">
                <span className="label-text font-semibold text-base-content/80">Email Address</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/50 group-focus-within:text-secondary transition-colors" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-12 h-14 rounded-xl border-2 border-base-300 focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-300 bg-base-100/50 backdrop-blur-sm focus-ring"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control group">
              <label className="label">
                <span className="label-text font-semibold text-base-content/80">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/50 group-focus-within:text-secondary transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-12 pr-12 h-14 rounded-xl border-2 border-base-300 focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-300 bg-base-100/50 backdrop-blur-sm focus-ring"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-base-200 rounded-r-xl transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/50 hover:text-secondary transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/50 hover:text-secondary transition-colors" />
                  )}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-secondary w-full h-14 rounded-xl text-lg font-semibold hover-lift focus-ring disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 bg-gradient-to-r from-secondary to-primary border-0 shadow-lg hover:shadow-xl" 
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create your account"
              )}
            </button>
          </form>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-base-content/70 text-lg">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="link link-primary font-semibold hover:scale-105 transition-transform duration-200"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="relative">
        <AuthImagePattern
          title="Join our community"
          subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
        />
      </div>
    </div>
  );
};
export default SignUpPage;
