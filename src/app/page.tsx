"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-sky-200 py-16 text-center">
        <p className="text-sm text-gray-700 mb-2">🔒 Trusted by 100,000+ taxpayers</p>
        <h2 className="text-4xl font-bold mb-4">
          File Your Taxes with <span className="text-blue-700">Confidence</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Upload documents securely and maximize your refund with our smart platform.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => router.push("/signup")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md"
          >
            Get Started →
          </button>
          <button
            onClick={() => router.push("/login")}
            className="bg-white border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50"
          >
            Login
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h3 className="text-2xl font-bold mb-4">Why Choose MyTaxPortal?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience the future of tax filing with our advanced features designed for maximum convenience and security.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-2xl">🔐</div>
            <div>
              <h4 className="font-semibold text-lg">Bank-Level Security</h4>
              <p className="text-gray-600">
                Your sensitive tax documents are protected with 256-bit encryption and multi-factor authentication.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-green-600 text-2xl">📤</div>
            <div>
              <h4 className="font-semibold text-lg">Smart Document Upload</h4>
              <p className="text-gray-600">
                Drag and drop your W-2s, 1099s, and receipts. Our AI automatically categorizes everything.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
