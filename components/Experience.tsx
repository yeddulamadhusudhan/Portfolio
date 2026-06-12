"use client";

import { useEffect, useRef } from "react";

const EXPERIENCES = [
  {
    period: "Oct 2024 — Apr 2026",
    title: "Software Engineer — Frontend Developer",
    company: "Zyptr (SSQUARE INNOVATIONS SOFTLABS PVT. LTD)",
    location: "Bangalore, India",
    achievements: [
      "Built dynamic UIs with React.js, Next.js, Material UI and Redux; developed real-time chatbot using WebSockets",
      "Integrated 95% backend data via RESTful APIs with robust error handling and frontend validations",
      "Implemented JWT authentication with auto token expiry, protected routes, and role-based dashboards for Super Admin, Admin, PM, and Users",
    ],
    tech: ["React.js", "Next.js", "Material UI", "Redux", "WebSockets", "JWT", "TypeScript"],
  },
  {
    period: "Sep 2022 — Sep 2024",
    title: "Software Engineer",
    company: "KRAFTBEES TECHNOLOGIES PVT. LTD",
    location: "Kurnool, Andhra Pradesh, India",
    achievements: [
      "Built and maintained responsive web applications using React.js and Next.js for multiple client products",
      "Implemented SEO best practices — Meta Tags, robots.txt, sitemap.xml, Open Graph, Schema.org — improving Google indexing",
      "Integrated REST APIs for product listings, order management, and admin dashboards with Redux state management",
    ],
    tech: ["React.js", "Next.js", "MUI", "Redux", "REST APIs", "SEO", "Node.js"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-28 bg-[var(--bg2)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="font-mono text-[11px] text-[var(--cyan)] tracking-[0.12em] uppercase mb-4 flex items-center justify-center gap-2 before:content-['//'] before:opacity-50">
            Work History
          </p>
          <h2 className="font-syne font-extrabold" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            Work <span className="grad-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--indigo)] to-transparent" />

          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.company}
              className="reveal pl-10 relative mb-12 last:mb-0"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Dot */}
              <div className="absolute left-[-7px] top-1.5 w-[15px] h-[15px] rounded-full
                bg-[var(--bg2)] border-2 border-[var(--indigo)]
                shadow-[0_0_12px_var(--glow-i)]" />

              {/* Card */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6
                hover:border-[var(--indigo)]/35 hover:translate-x-1 transition-all duration-300">

                <div className="font-mono text-[11px] text-[var(--cyan)] mb-2">{exp.period}</div>
                <h3 className="font-syne font-bold text-lg text-[var(--text)] mb-1">{exp.title}</h3>
                <p className="text-sm text-[var(--indigo-lt)] font-medium mb-0.5">{exp.company}</p>
                <p className="text-xs text-[var(--muted)] mb-5">📍 {exp.location}</p>

                <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent mb-4" />

                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex gap-2.5 items-start text-sm text-[var(--muted)]">
                      <span className="text-[var(--cyan)] mt-px flex-shrink-0">→</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium
                        bg-[var(--indigo)]/8 border border-[var(--indigo)]/18 text-[var(--indigo-lt)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mt-16" style={{ transitionDelay: "0.24s" }}>
          {[
            { num: "4+", label: "Years Experience" },
            { num: "2", label: "Companies" },
            { num: "10+", label: "Projects Shipped" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-5 rounded-2xl
                bg-gradient-to-br from-[var(--indigo)]/6 to-[var(--cyan)]/4
                border border-[var(--border)]"
            >
              <div className="font-syne font-extrabold text-3xl text-[var(--text)]">{s.num}</div>
              <div className="text-xs text-[var(--muted)] mt-1">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// "use client";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

// export default function Experience() {
//   const experiences = [
//     {
//       title: "Software Engineer (Frontend)",
//       company: "Zyptr (SSQUARE INNOVATIONS)",
//       period: "Oct 2024 - April 2026",
//       location: "Bangalore, India",
//       achievements: [
//         "Developing dynamic UIs using React.js, Next.js, Material UI, and Redux",
//         "Integrated 95% backend data via REST APIs; real-time chatbot with WebSockets",
//         "Implemented JWT authentication, auto token expiry, role-based dashboards"
//       ],
//       tech: ["React.js", "Next.js", "Material UI", "Redux", "WebSockets", "JWT"]
//     },
//     {
//       title: "Software Engineer",
//       company: "KRAFTBEES TECHNOLOGIES PVT. LTD",
//       period: "Sep 2022 - Sep 2024",
//       location: "Kurnool, India",
//       achievements: [
//         "Built responsive web applications with React.js, Next.js and MUI",
//         "Optimized frontend performance, SEO (Meta tags, sitemap, schema.org)",
//         "Integrated REST APIs, secure auth flows, and dynamic dashboards"
//       ],
//       tech: ["React.js", "Next.js", "MUI", "Redux", "REST APIs", "SEO"]
//     }
//   ];

//   return (
//     <section id="experience" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <span className="text-purple-600 text-sm font-semibold tracking-wider uppercase bg-purple-100 px-4 py-1.5 rounded-full inline-block mb-4">
//               Career Journey
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//               Work <span className="text-purple-600">Experience</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               4+ years of professional journey building scalable web applications
//             </p>
//             <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mt-4 rounded-full"></div>
//           </div>

//           {/* Timeline Container */}
//           <div className="relative">
//             {/* Vertical Timeline Line */}
//             <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-300 via-purple-500 to-purple-300"></div>

//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={exp.title}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.2, duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className={`relative flex flex-col md:flex-row gap-6 ${
//                     index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                   }`}
//                 >
//                   {/* Timeline Dot */}
//                   <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-purple-200 z-10"></div>
                  
//                   {/* Content */}
//                   <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
//                     <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 shadow-md">
                      
//                       {/* Period Badge */}
//                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium mb-4">
//                         <FaCalendarAlt className="text-xs" />
//                         <span>{exp.period}</span>
//                       </div>

//                       {/* Title */}
//                       <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                         {exp.title}
//                       </h3>

//                       {/* Company with Icon */}
//                       <div className="flex items-center gap-2 text-gray-600 mb-2">
//                         <FaBriefcase className="text-purple-600 text-sm" />
//                         <span className="font-medium">{exp.company}</span>
//                       </div>

//                       {/* Location with Icon */}
//                       <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
//                         <FaMapMarkerAlt className="text-purple-500 text-xs" />
//                         <span>{exp.location}</span>
//                       </div>

//                       {/* Divider */}
//                       <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-4"></div>

//                       {/* Achievements */}
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-purple-700 mb-3 uppercase tracking-wider">
//                           Key Achievements
//                         </h4>
//                         <ul className="space-y-2">
//                           {exp.achievements.map((achievement, i) => (
//                             <motion.li
//                               key={i}
//                               initial={{ opacity: 0, x: -10 }}
//                               whileInView={{ opacity: 1, x: 0 }}
//                               transition={{ delay: i * 0.1 }}
//                               viewport={{ once: true }}
//                               className="flex items-start gap-2 text-gray-700 text-sm"
//                             >
//                               <FaCheckCircle className="text-green-500 text-xs mt-0.5 flex-shrink-0" />
//                               <span>{achievement}</span>
//                             </motion.li>
//                           ))}
//                         </ul>
//                       </div>

//                       {/* Tech Stack Used */}
//                       <div className="mt-4 pt-4 border-t border-gray-200">
//                         <h4 className="text-xs font-semibold text-purple-600 mb-2 uppercase tracking-wider">
//                           Technologies Used
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {exp.tech.map((tech) => (
//                             <span
//                               key={tech}
//                               className="text-xs px-2 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-medium hover:bg-purple-100 transition-all duration-300"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Stats Summary */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             viewport={{ once: true }}
//             className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
//           >
//             <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
//               <div className="text-3xl font-bold text-purple-700">4+</div>
//               <div className="text-xs text-gray-600 mt-1">Years Experience</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
//               <div className="text-3xl font-bold text-purple-700">2</div>
//               <div className="text-xs text-gray-600 mt-1">Companies</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
//               <div className="text-3xl font-bold text-purple-700">10+</div>
//               <div className="text-xs text-gray-600 mt-1">Projects Shipped</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
//               <div className="text-3xl font-bold text-purple-700">100%</div>
//               <div className="text-xs text-gray-600 mt-1">Client Satisfaction</div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


