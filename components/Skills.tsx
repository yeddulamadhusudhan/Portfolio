"use client";

import { useEffect, useRef } from "react";

const SKILL_CATS = [
  {
    icon: "🎨",
    name: "Frontend Core",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: "⚛️",
    name: "Frameworks & UI",
    skills: ["React.js", "Next.js", "React Native", "Material UI", "Ant Design"],
  },
  {
    icon: "🧩",
    name: "State & APIs",
    skills: ["Redux", "Context API", "Zustand", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    icon: "🤖",
    name: "AI & Backend",
    skills: ["OpenAI API", "Gemini API", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
  {
    icon: "🛠️",
    name: "DevOps & Tools",
    skills: ["Git & GitHub", "GitHub Actions", "Vercel", "Render", "Postman", "Figma"],
  },
  {
    icon: "🏗️",
    name: "Architecture",
    skills: ["Micro Frontends", "Module Federation", "Single-SPA", "JWT Auth", "RBAC", "CI/CD"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-28 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="font-mono text-[11px] text-[var(--cyan)] tracking-[0.12em] uppercase mb-4 flex items-center justify-center gap-2 before:content-['//'] before:opacity-50">
            Technical Skills
          </p>
          <h2 className="font-syne font-extrabold" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            My <span className="grad-text">Tech Arsenal</span>
          </h2>
          <p className="text-[var(--muted)] mt-2 text-sm">Technologies I work with every day</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATS.map((cat, i) => (
            <div
              key={cat.name}
              className="reveal group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6
                hover:border-[var(--indigo)]/40 hover:-translate-y-1
                hover:shadow-[0_12px_40px_var(--glow-i)] transition-all duration-300"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <div className="font-syne font-bold text-sm text-[var(--text)] mb-4">{cat.name}</div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] text-[var(--muted)]
                      bg-white/[0.04] border border-[var(--border)]
                      group-hover:text-[var(--text)] group-hover:border-[var(--indigo)]/25
                      transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// "use client";
// import { motion } from "framer-motion";
// import { skills } from "@/data/skills";

// export default function Skills() {
//   return (
//     <section id="skills" className="py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
//             ⚙️ Technical <span className="gradient-text">Arsenal</span>
//           </h2>
//           <p className="text-gray-400 text-center mb-12">Technologies I work with daily</p>
//           <div className="flex flex-wrap justify-center gap-3">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={skill}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.02 }}
//                 viewport={{ once: true }}
//                 className="skill-chip px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
//               >
//                 {skill}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





