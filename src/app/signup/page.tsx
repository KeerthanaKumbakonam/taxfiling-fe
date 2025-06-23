"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import LeftAnimation from "../components/leftAnimation";
import Lottie from "lottie-react";

export default function Signup() {
  const router = useRouter();
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/portal-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up with:", { name, email, password });
    // router.push("/login"); // Optional redirect
  };

  return (
    <main className="flex min-h-[80vh] bg-white">
      
        <LeftAnimation
            title="Join the Smart Tax Revolution"
            subtitle="Create an account to securely upload your tax documents and maximize your refund."
            animationPath="/portal-animation.json"
        />

      {/* Right: Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <form
          onSubmit={handleSignup}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Create Your Account
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Sign Up
          </button>

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
