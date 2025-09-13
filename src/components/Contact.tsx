import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>About Ocean</h2>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Creator of <strong className="text-primary">LionAGI</strong> and former <strong className="text-primary">Autogen</strong> maintainer. 
            I help teams build <span className="text-primary font-medium">robust agent systems</span> that actually work in production.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From debugging <span className="text-primary font-medium">agent loops</span> to architecting <span className="text-primary font-medium">multi-agent orchestration</span>, I bring practical solutions from real deployments. 
            Whether you need <span className="text-primary font-medium">MCP integration</span>, failure handling strategies, or just a second opinion on your architecture—I've been there.
          </p>
        </div>
      </div>
      
      <div className="border-t border-border/30 pt-4">
        <Link to="/projects" className="inline-block">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground group">
            View All Projects
            <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;