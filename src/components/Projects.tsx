import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "CloudSync Dashboard",
      description:
        "A comprehensive cloud management platform with real-time monitoring, analytics, and automated deployment features. Built for scalability and performance.",
      image: project1,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      roles: [
        { member: "Alex", role: "Backend & Architecture" },
        { member: "Sarah", role: "Frontend & Animations" },
        { member: "Michael", role: "UI/UX Design" },
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "ShopFlow Mobile",
      description:
        "Modern e-commerce mobile application with seamless checkout, real-time inventory tracking, and personalized recommendations powered by ML algorithms.",
      image: project2,
      technologies: ["React Native", "Express", "MongoDB", "Stripe", "Firebase"],
      roles: [
        { member: "Sarah", role: "Mobile UI Development" },
        { member: "Priya", role: "ML Recommendations" },
        { member: "Alex", role: "Backend API" },
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "AI Assistant Pro",
      description:
        "Intelligent conversational AI platform that understands context, learns from interactions, and provides personalized assistance across multiple domains.",
      image: project3,
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
      roles: [
        { member: "Priya", role: "AI/ML Models" },
        { member: "Alex", role: "API Integration" },
        { member: "Sarah", role: "Chat Interface" },
        { member: "Michael", role: "UX Research" },
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions built with passion, precision, and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              {...project} 
              delay={index * 0.1}
              glowVariant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
