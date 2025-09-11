import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Offers = () => {
  return (
    <section id="pilot" className="max-w-7xl mx-auto px-6 py-20 border-t border-border" aria-label="Service Offerings">
      <h2 className="sr-only">Service Offerings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Production Debugging */}
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Agentic System Implementation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-base font-medium text-foreground mb-3">What We Build</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Multi-agent coordination, orchestration patterns, and system architectures that handle complex workflows.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-medium text-foreground mb-3">Observable Workflows</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Make black-box AI reasoning transparent with decision trees, conversation analysis, and workflow pattern fixes.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-medium text-foreground mb-3">Technical Analysis</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                System architecture review, performance bottleneck identification, and intelligent workflow optimization.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-medium text-foreground mb-3">What You Get</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Working implementations, scalable architectures, and observable systems with clear decision paths.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Agent Debugging Sessions */}
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Consulting Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Expert Review</h4>
                <p className="text-base text-muted-foreground">15 min • $79</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Working Session</h4>
                <p className="text-base text-muted-foreground">30 min • $159 ⭐</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Deep Dive</h4>
                <p className="text-base text-muted-foreground">60 min • $249</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Full Exploration</h4>
                <p className="text-base text-muted-foreground">105 min • $499</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-base font-medium text-foreground mb-3">What You Get</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Practical guidance, implementation strategies, and concrete next steps for your agentic engineering initiatives.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Offers;