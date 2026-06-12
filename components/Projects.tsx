"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";

const projects = [
  {
    title: "Kreat",
    description: "Project management platform with real-time chat, role-based dashboards (Super Admin, Admin, PM). Integrated WebSockets, JWT auth, Redux state management and REST APIs.",
    tech: ["React", "Next.js", "MUI", "Redux", "WebSockets", "MongoDB"],
    features: ["Real-time Chat", "Role-based Access", "JWT Auth", "Dashboard Analytics"],
    github: "https://github.com/madhusudhanreddyy/kreat",
    // demo: "https://kreat-demo.vercel.app",
    demo: "https://kreat.ai/kraft/",
    gradient: "from-blue-500/20 to-cyan-500/20",
    stars: 12,
    category: "Enterprise"
  },
  {
    title: "Artfulte",
    description: "Art marketplace platform with SEO optimization (Meta tags, sitemap, Schema.org). Dynamic product listings, orders, user management with role-based admin panel.",
    tech: ["React", "Next.js", "Redux", "REST APIs", "SEO"],
    features: ["SEO Optimized", "Product Listings", "Order Management", "Admin Panel"],
    github: "https://github.com/madhusudhanreddyy/artfulte",
    demo: "https://www.artflute.com/",
    gradient: "from-purple-500/20 to-pink-500/20",
    stars: 8,
    category: "E-commerce"
  },
  {
    title: "HiKi",
    description: "Microservices-based enterprise application. Built UI components in microfrontend architecture using React & Material UI with JWT authentication.",
    tech: ["React.js", "MUI", "Redux", "Microservices", "JWT"],
    features: ["Microfrontend", "JWT Auth", "Dynamic Forms", "Error Handling"],
    github: "https://github.com/madhusudhanreddyy/hiki",
    // demo: "https://hiki-demo.vercel.app",
    gradient: "from-green-500/20 to-emerald-500/20",
    stars: 15,
    category: "Microservices"
  },
  {
    title: "AI Chatbot",
    description: "Full-stack AI-powered conversational assistant similar to ChatGPT/DeepSeek. Integrated OpenAI/Gemini APIs, conversation memory, and streaming responses.",
    tech: ["Next.js", "Node.js", "AI APIs", "MongoDB", "Tailwind"],
    features: ["AI Integration", "Conversation Memory", "Streaming", "Auth System"],
    github: "https://github.com/madhusudhanreddyy/ai-chatbot",
    // demo: "https://ai-chatbot-demo.vercel.app",
    gradient: "from-orange-500/20 to-red-500/20",
    stars: 25,
    category: "AI/ML"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#0A0A15] to-[#05050A]">
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
              My Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-world impact — from AI dashboards to enterprise solutions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Main Card */}
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4 pr-20">
                    <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub className="text-gray-300 hover:text-white text-lg" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-gray-300 hover:text-purple-400 text-lg" />
                      </a>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <FaStar className="text-yellow-500" />
                      <span>{project.stars} stars</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <FaCodeBranch className="text-blue-400" />
                      <span>Active</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-gray-200 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/25 text-gray-200 font-medium hover:bg-blue-500/25 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <button
                      onClick={() => window.open(project.demo, "_blank")}
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-purple-400 text-sm font-medium hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                    >
                      View Live Project →
                    </button>
                  </div>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => window.open("https://github.com/madhusudhanreddyy", "_blank")}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              View All on GitHub 🚀
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


