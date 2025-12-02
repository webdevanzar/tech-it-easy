import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Briefcase, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Trophy,
      title: "TechHacks 2024 Winner",
      description: "First place in the AI/ML category with our intelligent assistant project",
      date: "March 2024",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Award,
      title: "Best UI/UX Design",
      description: "Recognized for outstanding user experience in StartupWeekend competition",
      date: "January 2024",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Briefcase,
      title: "Successful Client Projects",
      description: "Delivered 15+ production-ready applications for startups and enterprises",
      date: "2023-2024",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Open Source Contributions",
      description: "Active contributors to major projects with 1000+ combined GitHub stars",
      date: "Ongoing",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "20+" },
    { label: "Hackathons Won", value: "5" },
    { label: "Happy Clients", value: "15+" },
    { label: "GitHub Stars", value: "1K+" },
  ];

  return (
    <section id="achievements" className="py-20 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            Achievements & <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our journey of innovation, collaboration, and success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <Card className="p-6 border-border shadow-md">
                <div className="text-4xl sm:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className={`p-6 border-border shadow-md hover-lift ${
                index % 3 === 0 ? 'card-glow' : index % 3 === 1 ? 'card-glow-secondary' : 'card-glow-accent'
              } h-full`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-display font-semibold">{achievement.title}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
