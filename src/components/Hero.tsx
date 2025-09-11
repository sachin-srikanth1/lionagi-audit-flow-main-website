import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden gradient-flow">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0">
        {/* Flowing Energy Ribbon */}
        <div className="absolute top-1/3 left-0 w-full h-0.5 flow-ribbon" />
        <div className="absolute top-2/3 right-0 w-3/4 h-0.5 flow-ribbon" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[70vh]">
        <div className="max-w-4xl">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Agentic Systems Architecture
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your AI Vision, Built and Running in
            <span className="block text-primary">Weeks Not Years</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
            Turn ambitious AI ideas into production-ready autonomous systems that actually ship.
            <strong className="text-foreground"> No PhD required.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="text-lg px-8 py-6 energy-glow" asChild>
              <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                Book a session
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
              asChild
            >
              <a href="https://khive-ai.github.io/lionagi/" target="_blank" rel="noopener noreferrer">
                Framework Docs
              </a>
            </Button>
          </div>

          {/* How a Session Works */}
          <div className="mt-16 mb-8 max-w-3xl">
            <h3 className="text-lg font-semibold text-foreground mb-4">What happens in a session</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="text-primary font-medium">Review</div>
                <div className="text-muted-foreground">Your current agent setup</div>
              </div>
              <div>
                <div className="text-primary font-medium">Identify</div>
                <div className="text-muted-foreground">Bottlenecks, failure modes</div>
              </div>
              <div>
                <div className="text-primary font-medium">Recommend</div>
                <div className="text-muted-foreground">Specific patterns to try</div>
              </div>
              <div>
                <div className="text-primary font-medium">Document</div>
                <div className="text-muted-foreground">Action items, resources</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>360+ GitHub stars</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Framework-agnostic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Production-ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;