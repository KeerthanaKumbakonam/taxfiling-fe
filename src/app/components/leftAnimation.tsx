"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LeftAnimationProps {
  title: string;
  subtitle: string;
  animationPath: string;
}

export default function LeftAnimation({
  title,
  subtitle,
  animationPath,
}: LeftAnimationProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Failed to load animation", err));
  }, [animationPath]);

  return (
    <div className="w-1/2 hidden lg:flex items-center justify-center bg-white p-10 border-r border-gray-200">
      <div className="max-w-md text-center">
        {animationData && <Lottie animationData={animationData} loop />}
        <h2 className="text-2xl font-bold mt-6 text-blue-700">{title}</h2>
        <p className="mt-2 text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
