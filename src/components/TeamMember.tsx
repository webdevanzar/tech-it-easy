import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  email?: string;
  delay?: number;
  glowVariant?: 'primary' | 'secondary' | 'accent';
}

const TeamMember = ({
  name,
  role,
  bio,
  image,
  skills,
  github,
  linkedin,
  email,
  delay = 0,
  glowVariant = 'primary',
}: TeamMemberProps) => {
  const glowClass = glowVariant === 'primary' ? 'card-glow' : glowVariant === 'secondary' ? 'card-glow-secondary' : 'card-glow-accent';
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className={`overflow-hidden hover-lift ${glowClass} border-border group`}>
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-72 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-display font-bold mb-1 border-b-2">{name}</h3>
          <p className="text-primary font-medium mb-3">{role}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{bio}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            {github && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
              </Button>
            )}
            {linkedin && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                asChild
              >
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </a>
              </Button>
            )}
            {email && (
              <Button
                size="sm"
                variant="outline"
                asChild
              >
                <a href={`mailto:${email}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TeamMember;
