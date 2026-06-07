"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Role = "student" | "brand" | "college";

export default function Home() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("student");

  // SVG Icons
  const StudentIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );

  const BrandIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );

  const CollegeIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );

  const handleContinue = () => {
    router.push(`/student?role=${role}`);
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full animate-fade-in">
      {/* Header Logo & Navigation */}
      <div className="flex items-center justify-between mb-4 relative shrink-0">
        <div className="w-5 h-5" /> {/* Spacer */}
        <span className="text-lg font-black tracking-widest text-[#0c0d12]">PRODJET</span>
        <div className="w-5 h-5" /> {/* Spacer */}
      </div>

      {/* Selector Section */}
      <div className="flex-1 flex flex-col overflow-y-auto pr-0.5 scrollbar-thin">
        <h1 className="text-[27px] font-extrabold text-[#0c0d12] leading-tight tracking-tight mb-2">
          Join the PRODJET Waitlist
        </h1>
        <p className="text-slate-500 text-[14px] leading-relaxed mb-6 font-medium">
          Be the first to access exclusive updates and early access.
        </p>

        <h2 className="text-sm font-bold text-slate-700 mb-4">
          I am a...
        </h2>

        {/* Cards List */}
        <div className="space-y-3.5">
          {/* Student Card */}
          <button
            onClick={() => setRole("student")}
            className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border bg-white cursor-pointer ${
              role === "student"
                ? "border-[#5e3dd3] ring-1 ring-[#5e3dd3] shadow-md shadow-indigo-100"
                : "border-slate-100 shadow-sm hover:border-slate-200"
            }`}
          >
            <div className={`p-3 rounded-xl transition-all duration-300 ${
              role === "student" ? "bg-[#eeebfc] text-[#5e3dd3]" : "bg-slate-50 text-slate-600"
            }`}>
              <StudentIcon />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-800 text-[15px]">Student</h3>
              <p className="text-xs text-slate-400 mt-0.5">Join as a student</p>
            </div>
          </button>

          {/* Brand Card */}
          <button
            onClick={() => setRole("brand")}
            className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border bg-white cursor-pointer ${
              role === "brand"
                ? "border-[#5e3dd3] ring-1 ring-[#5e3dd3] shadow-md shadow-indigo-100"
                : "border-slate-100 shadow-sm hover:border-slate-200"
            }`}
          >
            <div className={`p-3 rounded-xl transition-all duration-300 ${
              role === "brand" ? "bg-[#eeebfc] text-[#5e3dd3]" : "bg-slate-50 text-slate-600"
            }`}>
              <BrandIcon />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-800 text-[15px]">Brand</h3>
              <p className="text-xs text-slate-400 mt-0.5">Join as a brand</p>
            </div>
          </button>

          {/* College Card */}
          <button
            onClick={() => setRole("college")}
            className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border bg-white cursor-pointer ${
              role === "college"
                ? "border-[#5e3dd3] ring-1 ring-[#5e3dd3] shadow-md shadow-indigo-100"
                : "border-slate-100 shadow-sm hover:border-slate-200"
            }`}
          >
            <div className={`p-3 rounded-xl transition-all duration-300 ${
              role === "college" ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-600"
            }`}>
              <CollegeIcon />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-800 text-[15px]">College</h3>
              <p className="text-xs text-slate-400 mt-0.5">Join as a college</p>
            </div>
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-6 shrink-0">
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-[#5e3dd3] text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:bg-[#4d30b5] active:scale-[0.98] transition-all duration-200 text-sm cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
