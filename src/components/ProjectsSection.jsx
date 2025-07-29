import { ArrowRight, Code, ExternalLink, Github } from "lucide-react";
import { FaBitbucket } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Art Stop E - Commerce",
    description: "An E - Commerce focus on selling arts",
    image: "/projects/art-stop.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://userandreibodota.github.io/Art-Stop/",
    githubUrl: "https://github.com/userAndreiBodota/Art-Stop",
  },
  {
    id: 2,
    title: "Agile Solution",
    description: "An Outsourcing Website",
    image: "/projects/agile-solution.png",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    demoUrl: "https://userandreibodota.github.io/Agile_Solution/",
    githubUrl: "https://github.com/userAndreiBodota/Agile_Solution",
  },
  {
    id: 3,
    title: "Pet Care Hub",
    description:
      "Website for pet care with profile information and pet management",
    image: "/projects/pet-care.png",
    tags: ["MongoDB", "Express.js", "Node.js", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Ticketing System",
    description:
      "A ticketing system that showcase both admin side and the agent side",
    image: "/projects/ticketing-system.png",
    tags: ["React", "Express.js", "Node.js", "MSSQL", "Tailwind CSS"],
    repoUrl: "https://bitbucket.org/vitreous1/ticket-system/src/main/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {project.repoUrl ? (
                        <FaBitbucket size={20} />
                      ) : (
                        <Github size={20} />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/userAndreiBodota"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
