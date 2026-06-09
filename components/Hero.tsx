

"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiRedux, SiMongodb } from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
];

export default function Hero() {
  const downloadResume = () => {
    const resumeContent = `Madhusudhan Reddy Yeddula
Email: madhusudhan0092@gmail.com | Phone: +91 9398674851

CAREER OBJECTIVE:
Frontend Developer with 4+ years in React.js/Next.js, integrating REST/AI APIs.

EXPERIENCE:
• Software Engineer @ Zyptr (2024-Present): Built real-time chatbots, role dashboards
• Software Engineer @ KRAFTBEES (2022-2024): SEO optimization, performance tuning

SKILLS:
React, Next.js, TypeScript, Redux, Node.js, MongoDB, AI APIs (OpenAI, Gemini)

PROJECTS:
• Kreat - Project management with WebSockets
• Artfulte - Art marketplace with SEO optimization
• AI Chatbot - ChatGPT-like assistant`;
    
    const blob = new Blob([resumeContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Madhusudhan_Resume.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05050A] text-white flex items-center pt-16">
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-blue-500/20 px-4 py-1.5 rounded-full text-sm font-medium border-l-2 border-blue-400">
                ✨ Frontend Engineer
              </span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-black leading-none"
            >
              Frontend
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Architect
              </span>
            </motion.h1>
            
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Building{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                scalable web
              </span>
              <br />
              experiences.
            </h2>
            
            <p className="text-gray-400 mt-6 text-lg max-w-xl">
              Frontend Developer with 4.1+ years of experience building modern applications
              using React.js, Next.js, TypeScript and AI APIs.
            </p>
            
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                ✨ View Projects
              </button>
              <button
                onClick={downloadResume}
                className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                📄 Download Resume
              </button>
            </div>
            
            <div className="flex gap-5 mt-10 text-2xl">
              <a
                href="https://github.com/madhusudhanreddyy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yeddula-msreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT - Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">⚡ Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + index * 0.5 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3"
                  >
                    <span className="text-2xl" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="text-3xl font-bold text-blue-400">4.1+</h4>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="text-3xl font-bold text-purple-400">12+</h4>
                  <p className="text-gray-400 text-sm">Projects Shipped</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

