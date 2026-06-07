"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  
  const name = searchParams.get("name") || "";
  const waitlist = searchParams.get("waitlist") || "757";
  const referral = searchParams.get("referral") || "USR757";

  return (
    <div className="flex-1 flex flex-col justify-between animate-scale-up h-full">
      {/* Top Section - Spacers match status bar */}
      <div className="flex items-center justify-between mb-4 relative shrink-0">
        <div className="w-5 h-5" />
        <span className="text-lg font-black tracking-widest text-[#0c0d12]">PRODJET</span>
        <div className="w-5 h-5" />
      </div>

      {/* Main Success Card Info */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
        {/* Green Checkmark Badge */}
        <div className="w-16 h-16 rounded-full bg-[#e8f8f0] text-[#10b981] flex items-center justify-center mb-5 shadow-sm shrink-0">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-[26px] font-extrabold text-[#0c0d12] leading-tight mb-2 shrink-0">
          Registration<br />Complete!
        </h1>
        <p className="text-slate-500 text-xs font-semibold mb-6 shrink-0">
          {name ? `Thank you, ${name}! ` : ""}You are on the PRODJET waitlist.
        </p>

        {/* Waitlist Rank Box */}
        <div className="bg-white border border-[#f1f3f9] rounded-[24px] py-6 px-4 w-full shadow-sm space-y-4 mb-6 select-text">
          <div className="text-center">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              Waitlist Number
            </span>
            <div className="text-3xl font-extrabold text-[#5e3dd3] tracking-wide">
              #{waitlist}
            </div>
          </div>
          
          <div className="w-full h-px bg-slate-100" />

          <div className="text-center">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              Referral Code
            </span>
            <div className="text-2xl font-extrabold text-[#5e3dd3] tracking-wide">
              {referral}
            </div>
          </div>
        </div>

        {/* Referral Message Row */}
        <div className="flex items-center gap-3.5 bg-indigo-50/20 border border-indigo-50/30 rounded-2xl p-3 w-full shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#eeebfc] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-[#5e3dd3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="text-slate-600 font-bold text-xs text-left leading-tight">
            Refer friends and move<br />ahead in the queue!
          </p>
        </div>
      </div>

      {/* Bottom Go to Home Button */}
      <div className="mt-6 shrink-0">
        <button
          onClick={() => router.push("/")}
          className="w-full py-4 bg-[#5e3dd3] text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:bg-[#4d30b5] active:scale-[0.98] transition-all duration-200 text-sm cursor-pointer"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center text-slate-500">Loading confirmation...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
