"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            ⚙️ Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Technologies I work with daily</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                viewport={{ once: true }}
                className="skill-chip px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}





