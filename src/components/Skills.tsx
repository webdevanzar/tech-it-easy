import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Palette,
  Cloud,
  Smartphone,
  Brain,
  GitBranch,
  Package,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js", "Vue.js"],
    },
    {
      category: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Design",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Design Systems"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-violet-500",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Firebase"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-orange-500 to-amber-500",
      skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI"],
    },
    {
      category: "AI & ML",
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
      skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "ML Ops"],
    },
    {
      category: "Version Control",
      icon: GitBranch,
      color: "from-red-500 to-orange-500",
      skills: ["Git", "GitHub", "GitLab", "Code Review", "Branching Strategies"],
    },
    {
      category: "Tools & Others",
      icon: Package,
      color: "from-teal-500 to-cyan-500",
      skills: ["VS Code", "Postman", "Prisma", "GraphQL", "REST APIs", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-muted/30 border-b-2" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning the entire development lifecycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-card rounded-xl p-6 shadow-md border border-border hover-lift ${
                index % 3 === 0 ? 'card-glow' : index % 3 === 1 ? 'card-glow-secondary' : 'card-glow-accent'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
