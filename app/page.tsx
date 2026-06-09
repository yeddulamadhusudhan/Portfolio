import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}




// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//     </>
//   );
// }






// src
// │
// ├── app
// │   ├── page.tsx
// │   ├── layout.tsx
// │   └── globals.css
// │
// ├── components
// │   ├── Navbar.tsx
// │   ├── Hero.tsx
// │   ├── About.tsx
// │   ├── Experience.tsx
// │   ├── Skills.tsx
// │   ├── Projects.tsx
// │   ├── Contact.tsx
// │   └── Footer.tsx
// │
// ├── data
// │   ├── projects.ts
// │   ├── skills.ts
// │   └── experience.ts
// │
// ├── types
// ├── hooks
// ├── utils
// └── assets