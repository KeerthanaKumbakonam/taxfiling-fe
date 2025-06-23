"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
        
      {/* Logo clickable to homepage */}
      <Link href="/">
        <span className="text-xl font-bold text-blue-700 cursor-pointer">
          MyTaxPortal
        </span>
      </Link>

    </header>
  );
}
