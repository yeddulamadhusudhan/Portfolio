"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaUsers, FaAward } from "react-icons/fa";

export default function About() {
  const stats = [
    { icon: <FaCode />, value: "4+", label: "Years Experience" },
    { icon: <FaRocket />, value: "12+", label: "Projects Delivered" },
    { icon: <FaUsers />, value: "8+", label: "Happy Clients" },
    { icon: <FaAward />, value: "100%", label: "Commitment" },
  ];

  const expertiseTags = [
    { icon: "🚀", name: "Performance Optimization" },
    { icon: "🔐", name: "Authentication & RBAC" },
    { icon: "🧠", name: "AI Integration" },
    { icon: "📱", name: "Responsive Design" },
    { icon: "⚡", name: "Micro Frontends" },
    { icon: "🎨", name: "UI/UX Excellence" },
    { icon: "📊", name: "State Management" },
    { icon: "🔧", name: "API Integration" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#05050A] to-[#0A0A15]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase bg-purple-500/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Who Am I?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  Passionate Frontend Engineer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm <span className="text-blue-400 font-semibold">Madhusudhan Reddy</span>, a dedicated Frontend Developer with{" "}
                  <span className="text-purple-400 font-semibold">4+ years</span> of hands-on experience building modern,
                  responsive web applications using <span className="text-blue-400">React.js and Next.js</span>.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I have strong expertise integrating RESTful and AI APIs (OpenAI, Gemini).
                  Familiar with Node.js, Express, and MongoDB enabling full-stack contributions.
                  Currently architecting AI-powered chatbots similar to ChatGPT and DeepSeek.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My goal is to build scalable, performant, and user-friendly applications that solve real-world problems.
                  I'm seeking challenging opportunities to drive impact and grow within an innovative team.
                </p>
              </div>
            </div>

            {/* Stats Cards - 2 columns */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-purple-500/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="text-4xl text-purple-400 mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise Tags - FIXED with better visibility */}
          {/* <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Core Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {expertiseTags.map((tag) => (
                <motion.span
                  key={tag.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/30 text-gray-200 text-sm font-medium hover:border-purple-500/60 hover:bg-gradient-to-r hover:from-blue-500/25 hover:to-purple-500/25 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-base">{tag.icon}</span>
                  <span>{tag.name}</span>
                </motion.span>
              ))}
            </div>
          </div> */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-purple-400">
              Core Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {expertiseTags.map((tag) => (
                <motion.span
                  key={tag.name}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-base">{tag.icon}</span>
                  <span>{tag.name}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


