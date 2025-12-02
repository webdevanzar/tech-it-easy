import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Users, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description: "React, TypeScript, Node.js, MongoDB, and cutting-edge tools",
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Optimized performance and lightning-fast development cycles",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless teamwork with agile methodologies and clear communication",
    },
    {
      icon: Target,
      title: "Problem Solvers",
      description: "We tackle complex challenges with innovative solutions",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-background border-b-2" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            About <span className="text-gradient">Our Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic group of four tech enthusiasts who came together with a shared vision: 
            to create innovative digital solutions that make a real impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Our journey started with a passion for technology and a drive to push boundaries. 
              We specialize in building full-stack web applications, mobile experiences, and AI-powered solutions. 
              With expertise spanning frontend development, backend architecture, UI/UX design, and machine learning, 
              we bring diverse skills to every project.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              What sets us apart is our collaborative approach and commitment to excellence. 
              We don't just write code—we craft experiences, solve problems, and build products that users love. 
              Whether it's a hackathon, client project, or personal endeavor, we approach every challenge with creativity and precision.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md border border-border hover-lift card-glow"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
