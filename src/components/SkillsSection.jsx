import { useState } from "react";
import { cn } from "../lib/utils.js";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiFigma,
  SiBitbucket,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiTrello,
} from "react-icons/si";

const skills = [
  { name: "HTML", category: "frontend", icon: SiHtml5 },
  { name: "CSS", category: "frontend", icon: SiCss3 },
  { name: "JavaScript", category: "frontend", icon: SiJavascript },
  { name: "React", category: "frontend", icon: SiReact },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },

  { name: "Node.js", category: "backend", icon: SiNodedotjs },
  { name: "Express", category: "backend", icon: SiExpress },
  { name: "MongoDB", category: "backend", icon: SiMongodb },
  { name: "Firebase", category: "backend", icon: SiFirebase },
  { name: "SQL", category: "backend", icon: SiMysql },

  { name: "Git/GitHub", category: "tools", icon: SiGithub },
  { name: "BitBucket", category: "tools", icon: SiBitbucket },
  { name: "Trello", category: "tools", icon: SiTrello },
  { name: "Figma", category: "tools", icon: SiFigma },
  { name: "Postman", category: "tools", icon: SiPostman },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
              >
                <Icon className="text-4xl text-primary" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
