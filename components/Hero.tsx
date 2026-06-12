"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TERMINAL_LINES = [
  { type: "cmd", content: "cat developer.json" },
  { type: "out", content: "{" },
  { type: "kv", key: "name", val: '"Madhusudhan Reddy"', valColor: "#A8FF78" },
  { type: "kv", key: "role", val: '"Frontend Engineer"', valColor: "#A8FF78" },
  { type: "kv", key: "experience", val: '"4.1+ years"', valColor: "#00F5FF" },
  { type: "kv", key: "location", val: '"Kurnool, India"', valColor: "#A8FF78" },
  { type: "raw", content: '  "stack": ["React", "Next.js", "TypeScript"],' },
  { type: "raw", content: '  "ai": ["OpenAI", "Gemini"],' },
  { type: "kv", key: "open_to_work", val: "true", valColor: "#00F5FF" },
  { type: "out", content: "}" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Orbs */}
      <div className="absolute top-[-80px] left-[-100px] w-[480px] h-[480px] rounded-full bg-[var(--indigo)]/15 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[60px] right-[40px] w-[300px] h-[300px] rounded-full bg-[var(--cyan)]/8 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-center">

          {/* LEFT */}
          <div>
            {/* Available badge */}
            <div className="reveal inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full
              bg-[var(--cyan-dim)] border border-[var(--cyan)]/20
              font-mono text-[11px] text-[var(--cyan)] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] dot-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="reveal font-syne font-extrabold leading-[1.04] tracking-tight mb-3"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.6rem)", transitionDelay: "0.08s" }}>
              Madhusudhan<br />
              <span className="grad-text">Reddy Yeddula</span>
            </h1>

            {/* Role */}
            <p className="reveal font-syne font-semibold text-[var(--muted)] mb-5"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", transitionDelay: "0.16s" }}>
              Frontend Engineer · React &amp; Next.js
            </p>

            {/* Desc */}
            <p className="reveal text-[var(--muted)] text-[0.95rem] leading-[1.8] max-w-[500px] mb-8"
              style={{ transitionDelay: "0.22s" }}>
              4+ years crafting high-performance web applications with React.js, Next.js, TypeScript,
              and AI APIs. I turn complex problems into clean, scalable interfaces.
            </p>

            {/* Buttons */}
            <div className="reveal flex gap-3 flex-wrap mb-10" style={{ transitionDelay: "0.28s" }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg font-semibold text-sm text-white
                  bg-[var(--indigo)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--glow-i)]
                  transition-all duration-200"
              >
                View Projects ↗
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg font-medium text-sm
                  border border-[var(--border)] text-[var(--text)]
                  hover:border-[var(--indigo)] hover:bg-[var(--indigo)]/8 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Socials */}
            <div className="reveal flex gap-3 mb-10" style={{ transitionDelay: "0.32s" }}>
              <a href="https://github.com/madhusudhanreddyy" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-lg
                  border border-[var(--border)] text-[var(--muted)]
                  hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:-translate-y-0.5 transition-all duration-200">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yeddula-msreddy" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-lg
                  border border-[var(--border)] text-[var(--muted)]
                  hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:-translate-y-0.5 transition-all duration-200">
                <FaLinkedin />
              </a>
            </div>

            {/* Stats */}
            <div className="reveal flex gap-8 pt-6 border-t border-[var(--border)]" style={{ transitionDelay: "0.36s" }}>
              {[
                { num: "4+", label: "Years Exp." },
                { num: "12+", label: "Projects" },
                { num: "2", label: "Companies" },
                { num: "100%", label: "Commitment" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-syne font-extrabold text-2xl text-[var(--text)]">
                    {s.num.replace(/\+|%/, "")}
                    <span className="text-[var(--cyan)]">{s.num.includes("+") ? "+" : s.num.includes("%") ? "%" : ""}</span>
                  </div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Terminal */}
          <div className="reveal-right hidden lg:block" style={{ transitionDelay: "0.18s" }}>
            <div className="rounded-2xl overflow-hidden border border-[var(--border)]
              shadow-[0_24px_64px_rgba(0,0,0,0.4),0_0_0_1px_rgba(91,79,255,0.1)]">
              {/* Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg3)] border-b border-[var(--border)]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-auto font-mono text-[11px] text-[var(--muted)]">madhusudhan.dev</span>
              </div>
              {/* Body */}
              <div className="bg-[var(--bg2)] p-5 font-mono text-[12.5px] leading-[1.9]">
                {TERMINAL_LINES.map((line, i) => {
                  if (line.type === "cmd")
                    return (
                      <div key={i} className="flex gap-1.5">
                        <span className="text-[var(--cyan)]">$</span>
                        <span className="text-[var(--text)]"> {line.content}</span>
                      </div>
                    );
                  if (line.type === "out")
                    return <div key={i} className="text-[var(--muted)] pl-4">{line.content}</div>;
                  if (line.type === "kv")
                    return (
                      <div key={i} className="pl-4">
                        <span className="text-[var(--indigo-lt)]">&quot;{line.key}&quot;</span>
                        <span className="text-[var(--muted)]">: </span>
                        <span style={{ color: line.valColor }}>{line.val}</span>
                        <span className="text-[var(--muted)]">,</span>
                      </div>
                    );
                  if (line.type === "raw")
                    return <div key={i} className="text-[var(--muted)] pl-4">{line.content}</div>;
                  return null;
                })}
                <div className="flex gap-1.5 mt-1">
                  <span className="text-[var(--cyan)]">$</span>
                  <span
                    className="inline-block w-2 h-[14px] bg-[var(--cyan)] rounded-sm cursor-blink ml-0.5"
                    style={{ verticalAlign: "middle" }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


// "use client";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiReact, SiNextdotjs, SiTypescript, SiRedux, SiMongodb } from "react-icons/si";

// const techStack = [
//   { name: "React", icon: <SiReact />, color: "#61DAFB" },
//   { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
//   { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
//   { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
//   { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
// ];

// export default function Hero() {
//   const downloadResume = () => {
//     const resumeContent = `Madhusudhan Reddy Yeddula
// Email: madhusudhan0092@gmail.com | Phone: +91 9398674851

// CAREER OBJECTIVE:
// Frontend Developer with 4+ years in React.js/Next.js, integrating REST/AI APIs.

// EXPERIENCE:
// • Software Engineer @ Zyptr (2024-Present): Built real-time chatbots, role dashboards
// • Software Engineer @ KRAFTBEES (2022-2024): SEO optimization, performance tuning

// SKILLS:
// React, Next.js, TypeScript, Redux, Node.js, MongoDB, AI APIs (OpenAI, Gemini)

// PROJECTS:
// • Kreat - Project management with WebSockets
// • Artfulte - Art marketplace with SEO optimization
// • AI Chatbot - ChatGPT-like assistant`;
    
//     const blob = new Blob([resumeContent], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "Madhusudhan_Resume.txt";
//     link.click();
//     URL.revokeObjectURL(link.href);
//   };

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#05050A] text-white flex items-center pt-16">
//       {/* Animated Background Blobs */}
//       <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
//       <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      
//       <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-block mb-4">
//               <span className="bg-blue-500/20 px-4 py-1.5 rounded-full text-sm font-medium border-l-2 border-blue-400">
//                 ✨ Frontend Engineer
//               </span>
//             </div>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 80 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-6xl md:text-8xl font-black leading-none"
//             >
//               Frontend
//               <br />
//               <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
//                 Architect
//               </span>
//             </motion.h1>
            
//             <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
//               Building{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                 scalable web
//               </span>
//               <br />
//               experiences.
//             </h2>
            
//             <p className="text-gray-400 mt-6 text-lg max-w-xl">
//               Frontend Developer with 4.1+ years of experience building modern applications
//               using React.js, Next.js, TypeScript and AI APIs.
//             </p>
            
//             <div className="flex gap-4 mt-8">
//               <button
//                 onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
//                 className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
//               >
//                 ✨ View Projects
//               </button>
//               <button
//                 onClick={downloadResume}
//                 className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
//               >
//                 📄 Download Resume
//               </button>
//             </div>
            
//             <div className="flex gap-5 mt-10 text-2xl">
//               <a
//                 href="https://github.com/madhusudhanreddyy"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 <FaGithub />
//               </a>
//               <a
//                 href="https://linkedin.com/in/yeddula-msreddy"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT CONTENT - Tech Stack Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
//               <h3 className="text-2xl font-semibold mb-6">⚡ Tech Stack</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {techStack.map((tech, index) => (
//                   <motion.div
//                     key={tech.name}
//                     animate={{ y: [0, -8, 0] }}
//                     transition={{ repeat: Infinity, duration: 3 + index * 0.5 }}
//                     className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3"
//                   >
//                     <span className="text-2xl" style={{ color: tech.color }}>
//                       {tech.icon}
//                     </span>
//                     <span className="font-medium">{tech.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <div className="bg-white/5 rounded-xl p-4 text-center">
//                   <h4 className="text-3xl font-bold text-blue-400">4.1+</h4>
//                   <p className="text-gray-400 text-sm">Years Experience</p>
//                 </div>
//                 <div className="bg-white/5 rounded-xl p-4 text-center">
//                   <h4 className="text-3xl font-bold text-purple-400">12+</h4>
//                   <p className="text-gray-400 text-sm">Projects Shipped</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

