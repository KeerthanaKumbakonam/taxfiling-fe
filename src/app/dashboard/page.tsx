"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState<{ firstName: string } | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            router.push("/login");
        }
    }, [router]);

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-blue-600 text-white py-5 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Left-aligned greeting */}
                    <h1 className="text-lg sm:text-xl font-semibold">
                        {user ? `Hey ${user.firstName}, Welcome to our portal!` : "Welcome to our portal!"}
                    </h1>

                    {/* Right-aligned logout button */}
                    <button
                        onClick={() => {
                            localStorage.removeItem("user");
                            router.push("/login");
                        }}
                        className="bg-white text-blue-600 text-sm px-3 py-1.5 rounded-md hover:bg-blue-100 transition"
                    >
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <section className="flex-1 max-w-7xl mx-auto p-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
                    <p className="text-gray-600 mb-6">
                        Manage your tax filings, upload documents, and track your refund easily.
                    </p>

                    <div className="space-y-6">
                        {/* Upload Documents with icon */}
                        <div className="flex items-center justify-between p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                            <div>
                                <h3 className="text-lg font-semibold text-blue-800 mb-1">Secure Upload</h3>
                                <p className="text-sm text-gray-700">Upload your W-2s, 1099s, and more securely.</p>
                            </div>
                            <div className="ml-4">
                                <label
                                    htmlFor="upload"
                                    className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
                                >
                                    📤 Upload
                                </label>
                                <input
                                    type="file"
                                    id="upload"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            alert(`You selected: ${file.name}`);
                                            // TODO: handle actual upload
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Track Refund */}
                        <div className="p-6 bg-green-50 rounded-lg shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-green-800 mb-1">Track Refund</h3>
                            <p className="text-sm text-gray-700">Monitor refund progress in real-time.</p>
                        </div>

                        {/* Tax Summary */}
                        <div className="p-6 bg-yellow-50 rounded-lg shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-yellow-800 mb-1">Tax Summary</h3>
                            <p className="text-sm text-gray-700">View filed tax years and pending actions.</p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
