"use client";

import React, { Suspense } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

type Role = "student" | "brand" | "college";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  collegeName: string;
  course: string;
  graduationYear: string;
  city: string;
}

function StudentForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = (searchParams.get("role") || "student") as Role;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      collegeName: "",
      course: "B.Tech Computer Science",
      graduationYear: "2026",
      city: "",
    },
  });

  const onSubmit = (data: FormInputs) => {
  
    const randomNum = Math.floor(Math.random() * 800) + 150;
    // Create referral code using first three letters of name uppercase + random number
    const baseName = data.name.trim().replace(/[^a-zA-Z]/g, "").substring(0, 3).toUpperCase() || "USR";
    const referralCode = `${baseName}${randomNum}`;

    router.push(
      `/success?role=${role}&name=${encodeURIComponent(
        data.name
      )}&waitlist=${randomNum}&referral=${referralCode}`
    );
  };

  // Capitalize role name for heading display
  const getRoleTitle = () => {
    if (role === "brand") return "Brand Details";
    if (role === "college") return "College Details";
    return "Student Details";
  };

  const getInstitutionLabel = () => {
    if (role === "brand") return "Company Name";
    if (role === "college") return "University Name";
    return "College Name";
  };

  const getInstitutionPlaceholder = () => {
    if (role === "brand") return "PRODJET Inc.";
    if (role === "college") return "Stanford University";
    return "ABC College of Engineering";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between overflow-hidden animate-fade-in h-full">
      {/* Header Logo & Navigation */}
      <div className="flex items-center justify-between mb-2 relative shrink-0">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="p-1 -ml-1 text-slate-800 hover:bg-slate-200/50 rounded-full transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-lg font-black tracking-widest text-[#0c0d12] absolute left-1/2 -translate-x-1/2">PRODJET</span>
        <div className="w-5 h-5" /> {/* Spacer */}
      </div>


      {/* Scrollable Form Body */}
      <div className="flex-1 overflow-y-auto px-0.5 py-2 space-y-4 pr-1.5 scrollbar-thin">
        <div>
          <h1 className="text-[22px] font-extrabold text-[#0c0d12] capitalize leading-tight">
            {getRoleTitle()}
          </h1>
          <p className="text-slate-500 text-xs font-semibold mt-0.5">
            Please fill in your details
          </p>
        </div>

        {/* Input: Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Rahul Sharma"
            {...register("name", { required: "Full name is required" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#5e3dd3] focus:ring-1 focus:ring-[#5e3dd3] transition-all"
          />
          {errors.name && (
            <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Input: Email */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">
            Email
          </label>
          <input
            type="text"
            placeholder="rahul@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#5e3dd3] focus:ring-1 focus:ring-[#5e3dd3] transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Input: Phone Number */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="9876543210"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#5e3dd3] focus:ring-1 focus:ring-[#5e3dd3] transition-all"
          />
          {errors.phone && (
            <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Input: College / Company Name */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">
            {getInstitutionLabel()}
          </label>
          <input
            type="text"
            placeholder={getInstitutionPlaceholder()}
            {...register("collegeName", { required: "This field is required" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#5e3dd3] focus:ring-1 focus:ring-[#5e3dd3] transition-all"
          />
          {errors.collegeName && (
            <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.collegeName.message}</p>
          )}
        </div>

        {/* Input: Course / Degree Dropdown */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">
            Course / Degree
          </label>
          <div className="relative">
            <select
              {...register("course")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-[#5e3dd3] focus:ring-1 focus:ring-[#5e3dd3] transition-all appearance-none cursor-pointer"
            >
              <option value="B.Tech Computer Science">B.Tech Computer Science</option>
              <option value="B.Sc Information Technology">B.Sc Information Technology</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Masters of Science">Masters of Science</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Input: Graduation Year Dropdown */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">
            Graduation Year
          </label>
          <div className="relative">
            <select
              {...register("graduationYear")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-[#5e3dd3] focus:ring-1 focus:ring-[#5e3dd3] transition-all appearance-none cursor-pointer"
            >
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2025">2025</option>
              <option value="2028">2028</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Input: City */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">
            City
          </label>
          <input
            type="text"
            placeholder="Bangalore"
            {...register("city", { required: "City is required" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#5e3dd3] focus:ring-1 focus:ring-[#5e3dd3] transition-all"
          />
          {errors.city && (
            <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-5 shrink-0">
        <button
          type="submit"
          className="w-full py-4 bg-[#5e3dd3] text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:bg-[#4d30b5] active:scale-[0.98] transition-all duration-200 text-sm cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default function StudentPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center text-slate-500">Loading details form...</div>}>
      <StudentForm />
    </Suspense>
  );
}
