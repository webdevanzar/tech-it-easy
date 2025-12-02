import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  roles: { member: string; role: string }[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
  glowVariant?: 'primary' | 'secondary' | 'accent';
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  roles,
  liveUrl,
  githubUrl,
  delay = 0,
  glowVariant = 'primary',
}: ProjectCardProps) => {
  const glowClass = glowVariant === 'primary' ? 'card-glow' : glowVariant === 'secondary' ? 'card-glow-secondary' : 'card-glow-accent';
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className={`overflow-hidden hover-lift ${glowClass} border-border group h-full flex flex-col`}>
        <div className="relative overflow-hidden h-64">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
            <div className="flex gap-3">
              {liveUrl && (
                <Button size="sm" className="gradient-primary text-white" asChild>
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-display font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
            {description}
          </p>

          <div className="mb-4">
            <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Team Contributions
            </h4>
            <div className="space-y-1">
              {roles.map((role) => (
                <div key={role.member} className="text-sm">
                  <span className="font-medium text-primary">{role.member}</span>
                  <span className="text-muted-foreground"> — {role.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
