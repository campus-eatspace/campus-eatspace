import type { ReactNode } from "react";
import bgImage from "../../assets/bg.jpg";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-transparent backdrop-blur-md rounded-2xl shadow-lg p-8 z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
