// "use client";

// import { useState } from "react";

// export default function SignupPage() {
//   const [done, setDone] = useState(false);
//   return (
//     <main className="max-w-md mx-auto px-4 py-16">
//       <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
//       <p className="text-gray-600 mb-6">
//         Sign up to get email notifications and order updates.
//       </p>

//       {done ? (
//         <div className="bg-brand-light text-brand-dark p-6 rounded-xl">
//           ✅ Account created (demo). A welcome email would be sent to your
//           inbox.
//         </div>
//       ) : (
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             setDone(true);
//           }}
//           className="bg-white border border-gray-100 rounded-xl p-6 space-y-4"
//         >
//           <input
//             type="text"
//             placeholder="Full Name"
//             required
//             className="w-full border border-gray-300 rounded-lg px-4 py-3"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             required
//             className="w-full border border-gray-300 rounded-lg px-4 py-3"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             minLength={6}
//             className="w-full border border-gray-300 rounded-lg px-4 py-3"
//           />
//           <button
//             type="submit"
//             className="w-full bg-brand hover:bg-brand-dark text-white py-3 rounded-lg font-semibold"
//           >
//             Sign Up
//           </button>
//         </form>
//       )}
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "Lagos",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setDone(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between text-gray-800">
      {/* Top Header Bar */}

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          {/* Card Wrapper */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-500" />

            {done ? (
              /* Success State */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>

                <h2 className="text-2xl font-black text-gray-900">
                  Account Created!
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Welcome to <strong>Mummy Seun Prostore</strong>,{" "}
                  <span className="font-semibold text-gray-900">
                    {formData.fullName}
                  </span>
                  ! We sent a confirmation link to{" "}
                  <span className="font-medium text-emerald-700">
                    {formData.email}
                  </span>
                  .
                </p>

                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-left space-y-2 text-xs text-gray-700">
                  <p className="flex items-center gap-2 font-semibold text-emerald-900">
                    <ShieldCheck size={16} className="text-emerald-700" />{" "}
                    What's next?
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-1">
                    <li>
                      Start adding fresh rice, poultry, and oils to your cart
                    </li>
                    <li>
                      Get instant order tracking via SMS and WhatsApp (
                      {formData.phone || "+234..."})
                    </li>
                  </ul>
                </div>

                <div className="pt-4 space-y-2">
                  <Link
                    href="/shop"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-bold text-sm transition shadow-md"
                  >
                    Start Shopping Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ) : (
              /* Registration Form */
              <div>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-black text-gray-900">
                    Create your Account
                  </h1>
                  <p className="text-gray-500 text-sm mt-1">
                    Join Mummy Seun Prostore for fast ordering & delivery
                    updates
                  </p>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="e.g. Chioma Adebayo"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-gray-50/50 border border-gray-300 focus:border-emerald-700 focus:bg-white focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-gray-50/50 border border-gray-300 focus:border-emerald-700 focus:bg-white focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Phone Number (Nigerian Format) */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone Number (WhatsApp Preferred)
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-gray-500 text-xs font-bold border-r border-gray-300 pr-2 flex items-center gap-1">
                        <Phone size={14} className="text-gray-400" />
                        +234
                      </span>
                      <input
                        type="tel"
                        placeholder="801 234 5678"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-gray-50/50 border border-gray-300 focus:border-emerald-700 focus:bg-white focus:outline-none rounded-xl pl-20 pr-4 py-2.5 text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Delivery Location / Region */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Primary Delivery Region
                    </label>
                    <div className="relative">
                      <MapPin
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <select
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full bg-gray-50/50 border border-gray-300 focus:border-emerald-700 focus:bg-white focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-sm transition appearance-none"
                      >
                        <option value="Lagos - Island (Lekki, VI, Ikoyi)">
                          Lagos — Island (Lekki, VI, Ikoyi)
                        </option>
                        <option value="Lagos - Mainland (Ikeja, Surulere, Yaba, etc.)">
                          Lagos — Mainland (Ikeja, Surulere, Yaba, etc.)
                        </option>
                        <option value="Abuja (FCT)">Abuja (FCT)</option>
                        <option value="Port Harcourt">Port Harcourt</option>
                        <option value="Other States">
                          Other States (Interstate Delivery)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        minLength={6}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full bg-gray-50/50 border border-gray-300 focus:border-emerald-700 focus:bg-white focus:outline-none rounded-xl pl-10 pr-10 py-2.5 text-sm transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Must be at least 6 characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white font-bold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-md mt-2"
                  >
                    {isSubmitting ? (
                      <span>Creating Account...</span>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                {/* WhatsApp Quick Assistance Option */}
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-500 mb-2">
                    Prefer ordering directly without an account?
                  </p>
                  <a
                    href="https://wa.me/2340000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg border border-emerald-200 transition"
                  >
                    <MessageCircle size={15} className="text-green-600" />
                    Quick Order via WhatsApp
                  </a>
                </div>

                {/* Login Link */}
                <p className="text-center text-xs text-gray-600 mt-6">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-bold text-emerald-700 hover:underline"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            )}
          </div>

          {/* Security Assurance Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <ShieldCheck size={16} className="text-emerald-700" />
            <span>100% Secure Checkout & Safe Data Protection</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-500 border-t border-gray-200 bg-white">
        © {new Date().getFullYear()} Mummy Seun Prostore. All rights reserved.
      </footer>
    </div>
  );
}