"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = ["About", "Experience", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05050A]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h2 className="font-bold text-2xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Madhu
        </h2>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-white">☰</button>
      </div>
    </header>
  );
}






