"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${scrolled
          ? "bg-[#060B18]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
          }`}
      > */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${scrolled
            ? "bg-[#060B18]/95 backdrop-blur-xl border-b border-white/10"
            : "bg-white border-b border-gray-200"
          }`}
      >
        {/* Logo */}
        {/* <a
          href="#hero"
          className="font-syne font-extrabold text-lg text-[var(--text)] tracking-tight"
        >
       
           Madhusudhan Reddy Yeddula
        </a> */}
        <a
          href="#hero"
          className={`font-syne font-extrabold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-white" : "text-black"
            }`}
        >
          Madhusudhan Reddy Yeddula
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative text-sm font-medium transition-colors duration-300
  ${scrolled
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
                }
  after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-[var(--cyan)]
  after:transition-all after:duration-300 hover:after:w-full
`}
            // className="relative text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200
            //   after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-[var(--cyan)]
            //   after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Hire me CTA */}
        {/* <a
          href="mailto:madhusudhan0092@gmail.com"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium
            border border-[var(--indigo)] text-[var(--indigo-lt)] rounded-md
            hover:bg-[var(--indigo)] hover:text-white transition-all duration-200"
        >
          Hire Me
        </a> */}
        <a
          href="mailto:madhusudhan0092@gmail.com"
          className={`hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${scrolled
            ? "border border-[var(--indigo)] text-white hover:bg-[var(--indigo)]"
            : "border border-black text-black hover:bg-black hover:text-white"
            }`}
        >
          Hire Me
        </a>

        {/* Burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[var(--text)] rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[var(--text)] rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[var(--text)] rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </header>

      {/* Mobile nav */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 flex flex-col gap-0 bg-[#060B18]/97 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMobileOpen(false)}
            className="px-6 py-4 text-sm text-[var(--muted)] hover:text-[var(--text)] border-b border-white/[0.06] transition-colors"
          >
            {link}
          </a>
        ))}
        <a
          href="mailto:madhusudhan0092@gmail.com"
          className="px-6 py-4 text-sm text-[var(--cyan)] font-medium"
        >
          Hire Me →
        </a>
      </div>
    </>
  );
}




// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const links = ["About", "Experience", "Skills", "Projects", "Contact"];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#05050A]/90 backdrop-blur-xl border-b border-white/5"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//         <h2 className="font-bold text-2xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
//           Madhusudhan Reddy Yeddula
//         </h2>
//         <nav className="hidden md:flex gap-8">
//           {links.map((link) => (
//             <Link
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="text-gray-300 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
//             >
//               {link}
//             </Link>
//           ))}
//         </nav>
//         <button className="md:hidden text-white">☰</button>
//       </div>
//     </header>
//   );
// }






