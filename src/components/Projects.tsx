import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LionAGI",
      description: "Agent orchestration framework with observable workflows and formal verification",
      tags: ["Python", "Multi-Agent", "Async", "Orchestration"],
      github: "https://github.com/khive-ai/lionagi",
      docs: "https://khive-ai.github.io/lionagi/",
      features: ["40+ Jupyter notebooks", "Role + domain composition", "Observable decision trees"]
    },
    {
      title: "Pydapter", 
      description: "Universal data connection layer with async-first design and migration utilities",
      tags: ["Python", "Data", "Async", "Migration"],
      github: "https://github.com/lionagi/pydapter",
      docs: "https://pydapter.readthedocs.io/",
      features: ["Database adapters", "Model migrations", "Extensive format support"]
    }
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Open Source Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Production-ready frameworks for multi-agent systems and data orchestration, 
            built with extensive documentation and real-world examples.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-all duration-200 hover:border-accent/30 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2 flex-shrink-0">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors p-1"
                      title="View on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors p-1"
                      title="View Documentation"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-muted/60 text-muted-foreground rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-border/50 pt-3 mt-auto">
                  <ul className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1 text-xs">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;