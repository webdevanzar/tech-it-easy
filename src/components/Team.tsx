import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TeamMember from "./TeamMember";
import teamMember1 from "@/assets/team-member-1.png";
import teamMember2 from "@/assets/team-member-2.jpeg";
import teamMember3 from "@/assets/team-member-3.jpeg";
import teamMember4 from "@/assets/team-member-4.jpg";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Muhammed Anzarshah",
      role: "Full-Stack Developer & Team Lead",
      bio: "Passionate about building scalable web applications. Specializes in React, Node.js, and cloud architecture. Loves solving complex problems and mentoring teammates.",
      image: teamMember1,
      skills: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
      github: "https://github.com/webdevanzar",
      linkedin: "https://www.linkedin.com/in/muhammed-anzarshah-005356279/",
      email: "anzarsha3240@gmail.com",
    },
    {
      name: "Rizwan Hamza k",
      role: "Frontend Developer & UI Specialist",
      bio: "Creates pixel-perfect user interfaces with a keen eye for design. Expert in React, animations, and responsive design. Believes great UX is the key to successful products.",
      image: teamMember2,
      skills: ["React", "Tailwind CSS", "Framer Motion", "Figma","Next.js",],
      github: "https://github.com/riizzwaan",
      linkedin: "https://www.linkedin.com/in/rizwan-hamza-75844a284/",
      email: "rizwanhamzak04@gmail.com",
    },
    {
      name: "Shameem Shah",
      role: "UI/UX Designer & Product Strategist",
      bio: "Transforms ideas into beautiful, intuitive interfaces. Skilled in user research, wireframing, and visual design. Focuses on creating experiences that delight users.",
      image: teamMember3,
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping", "User Research"],
      github: "https://github.com/mohammedshameemshah",
      linkedin: "https://www.linkedin.com/in/mohammed-shameem-shah-005356279/",
      email: "shameemshah005356279@gmail.com",
    },
    {
      name: "Krishna Prasad Pr",
      role: "AI/ML Engineer & Backend Developer",
      bio: "Builds intelligent systems and robust APIs. Specializes in machine learning, NLP, and backend development. Passionate about leveraging AI to solve real-world challenges.",
      image: teamMember4,
      skills: ["Python", "TensorFlow", "Node.js", "MongoDB", "AI/ML","Next.js"],
      github: "https://github.com/krrrshhh",
      linkedin: "https://www.linkedin.com/in/krishna-prasad-pr-9b5224393/",
      email: "krishna.prasad.pr@gmail.com",
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-32 bg-muted/30 border-b-2" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            Meet <span className="text-gradient">The Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Four unique talents, one shared vision: building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name} 
              {...member} 
              delay={index * 0.1}
              glowVariant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
