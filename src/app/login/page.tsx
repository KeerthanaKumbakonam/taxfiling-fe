"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LeftAnimation from "../components/leftAnimation";
import Lottie from "lottie-react";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch("/portal-animation.json")
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Lottie animation load failed:", err));
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
        });

        const result = await res.json();

        if (res.ok) {
            // Optional: Save session locally for demo purpose
            localStorage.setItem("user", JSON.stringify(result.user));
            router.push("/dashboard");
        }
        else {
            alert(result.error || "Login failed");
        }
    };

    return (
        <main className="flex min-h-[80vh] bg-white">

            <LeftAnimation
                title="Smart, Secure & Hassle-Free Tax Filing"
                subtitle="Upload your tax documents securely and let our AI handle the rest."
                animationPath="/portal-animation.json"
            />
            {/* Right: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <form
                    onSubmit={handleLogin}
                    className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
                        Login to MyTaxPortal
                    </h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
                    >
                        Log In
                    </button>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => router.push("/signup")}
                            className="text-blue-600 hover:underline cursor-pointer"
                        >
                            Sign up here
                        </span>
                    </p>
                </form>
            </div>
        </main>
    );
}
