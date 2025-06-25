"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LeftAnimation from "../components/leftAnimation";

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      setMessage({ type: "success", text: "User registered successfully. Redirecting to login..." });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      setMessage({ type: "error", text: result.error || "Signup failed. Please try again." });
    }
  };

  return (
    <main className="flex min-h-screen bg-white">
      {/* Left Panel Animation */}
      <LeftAnimation
        title="Join the Smart Tax Revolution"
        subtitle="Create an account to securely upload your tax documents and maximize your refund."
        animationPath="/portal-animation.json"
      />

      {/* Right Panel - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <form
          onSubmit={handleSignup}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Create Your Account
          </h2>

          {/* Form Fields */}
          {[
            { label: "First Name", name: "firstName", type: "text", placeholder: "John" },
            { label: "Last Name", name: "lastName", type: "text", placeholder: "Doe" },
            { label: "Date of Birth", name: "dob", type: "date", placeholder: "" },
            { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
            { label: "Mobile Number", name: "mobile", type: "tel", placeholder: "9876543210" },
            { label: "Password", name: "password", type: "password", placeholder: "••••••••" },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                required
                value={(formData as any)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Sign Up
          </button>

          {/* Inline message */}
          {message && (
            <div
              className={`mt-4 p-3 text-sm rounded-md text-center ${message.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                }`}
            >
              {message.text}
            </div>
          )}

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Log in here
            </span>
          </p>
        </form>
      </div>
    </main>
  );
}
