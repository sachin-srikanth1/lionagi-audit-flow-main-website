import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-flow">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0">
        {/* Flowing Energy Ribbon */}
        <div className="absolute top-1/3 left-0 w-full h-0.5 flow-ribbon" />
        <div className="absolute top-2/3 right-0 w-3/4 h-0.5 flow-ribbon" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
        
        {/* Smooth Blue to Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col justify-center min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8 leading-tight text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Your <span className="text-primary">AI Vision</span>, Built and Running in
            <span className="block text-primary">Weeks Not Years</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
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

          {/* Process Flow */}
          <div className="mb-12">
            <div className="relative">
              {/* Subtle connecting line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
              
              {/* Horizontal flow */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Review */}
                <div className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-sm font-medium text-primary">01</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Review</h4>
                  <p className="text-muted-foreground text-sm">Your current <span className="text-primary font-medium">agent setup</span></p>
                </div>

                {/* Identify */}
                <div className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-sm font-medium text-primary">02</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Identify</h4>
                  <p className="text-muted-foreground text-sm"><span className="text-primary font-medium">Bottlenecks</span>, failure modes</p>
                </div>

                {/* Recommend */}
                <div className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-sm font-medium text-primary">03</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Recommend</h4>
                  <p className="text-muted-foreground text-sm">Specific <span className="text-primary font-medium">patterns</span> to try</p>
                </div>

                {/* Document */}
                <div className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-sm font-medium text-primary">04</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Document</h4>
                  <p className="text-muted-foreground text-sm"><span className="text-primary font-medium">Action items</span>, resources</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">Trusted by teams at</p>
            </div>
            <div className="flex items-center justify-center gap-8">
              <div className="group">
                <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  Google Cloud
                </div>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="group">
                <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  NVIDIA
                </div>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="group">
                <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  Clay
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;