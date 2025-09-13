import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, BookOpen, Code, GitBranch, Package } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative overflow-hidden gradient-flow">
        {/* Cinematic Background Effects */}
        <div className="absolute inset-0">
          {/* Flowing Energy Ribbon */}
          <div className="absolute top-1/4 left-0 w-full h-0.5 flow-ribbon" />
          <div className="absolute top-3/4 right-0 w-3/4 h-0.5 flow-ribbon" style={{ animationDelay: '1s' }} />
          
          {/* Subtle Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
          
          {/* Smooth Blue to Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8 leading-tight text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Open Source Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              Frameworks I've Built - Reusable playbooks for faster outcomes
            </p>
          </div>

        {/* LionAGI Section */}
        <div className="mb-16">
          <Card className="gradient-card hover:energy-glow/50 transition-all duration-300 relative before:absolute before:-left-px before:-right-px before:-top-px before:h-1 before:bg-primary before:rounded-t-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-normal text-foreground mb-2" style={{ fontFamily: 'Georgia, serif' }}>LionAGI</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-primary font-medium">Agent orchestration</span> framework with <span className="text-primary font-medium">observable workflows</span> and formal verification
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/khive-ai/lionagi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-slate-800/60 rounded-md transition-colors"
                    aria-label="LionAGI GitHub repository"
                  >
                    <Github className="h-5 w-5 text-slate-400 hover:text-slate-300" />
                  </a>
                  <a
                    href="https://khive-ai.github.io/lionagi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-slate-800/60 rounded-md transition-colors"
                    aria-label="LionAGI documentation"
                  >
                    <BookOpen className="h-5 w-5 text-slate-400 hover:text-slate-300" />
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Core Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Code className="h-4 w-4 mt-1 flex-shrink-0 text-accent/60" />
                      <span>40+ Jupyter notebooks with production patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GitBranch className="h-4 w-4 mt-1 flex-shrink-0 text-accent/60" />
                      <span>Role + domain composition for specialized agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="h-4 w-4 mt-1 flex-shrink-0 text-accent/60" />
                      <span>Observable decision trees and workflow patterns</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Use Cases</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Multi-agent conversation orchestration</li>
                    <li>• Complex workflow automation</li>
                    <li>• Production agent system deployment</li>
                    <li>• Observable AI reasoning systems</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Python</span>
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Multi-Agent</span>
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Async</span>
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Orchestration</span>
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Observable Workflows</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://github.com/khive-ai/lionagi/tree/main/notebooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                >
                  View Notebooks
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/booking">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Need Implementation Help?
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pydapter Section */}
        <div className="mb-16">
          <Card className="gradient-card hover:energy-glow/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-normal text-foreground mb-2" style={{ fontFamily: 'Georgia, serif' }}>Pydapter</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-primary font-medium">Universal data connection</span> layer with <span className="text-primary font-medium">async-first design</span> and migration utilities
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/lionagi/pydapter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-slate-800/60 rounded-md transition-colors"
                    aria-label="Pydapter GitHub repository"
                  >
                    <Github className="h-5 w-5 text-slate-400 hover:text-slate-300" />
                  </a>
                  <a
                    href="https://pydapter.readthedocs.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-slate-800/60 rounded-md transition-colors"
                    aria-label="Pydapter documentation"
                  >
                    <BookOpen className="h-5 w-5 text-slate-400 hover:text-slate-300" />
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Core Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Code className="h-4 w-4 mt-1 flex-shrink-0 text-accent/60" />
                      <span>Database adapters for PostgreSQL, MySQL, SQLite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GitBranch className="h-4 w-4 mt-1 flex-shrink-0 text-accent/60" />
                      <span>Async-first with sync fallbacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="h-4 w-4 mt-1 flex-shrink-0 text-accent/60" />
                      <span>Model migrations and schema evolution</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Use Cases</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Unified data access layer</li>
                    <li>• Multi-database applications</li>
                    <li>• Data migration pipelines</li>
                    <li>• Format conversion utilities</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Python</span>
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Data</span>
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Async</span>
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Migration</span>
                  <span className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">PostgreSQL</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://pydapter.readthedocs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                >
                  Read Documentation
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/booking">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Need Integration Help?
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

          {/* CTA Section */}
          <div className="text-center py-16">
            <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Build with These Frameworks?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Need help with your agent systems? Let's talk architecture and implementation.
            </p>
            <Link to="/booking">
              <Button size="lg" className="text-lg px-8 py-6 energy-glow">
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;