import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, Star, Zap } from "lucide-react";

const BookingPage = () => {
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
              Book a Session
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              Expert <span className="text-primary font-medium">technical consultation</span> with Ocean Li. 
              Advisory sessions for <span className="text-primary font-medium">agent systems architecture</span>.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* 15 Minutes */}
            <Card className="gradient-card hover:energy-glow/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-sm text-muted-foreground">15 min</span>
                  <div className="text-2xl font-normal text-foreground mt-1" style={{ fontFamily: 'Georgia, serif' }}>$79</div>
                  <div className="text-sm text-muted-foreground">Triage</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">Quick assessment • Specific question answered</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                    Book
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 30 Minutes - Most Popular */}
            <Card className="gradient-card hover:energy-glow/50 transition-all duration-300 relative before:absolute before:-left-px before:-right-px before:-top-px before:h-1 before:bg-primary before:rounded-t-lg">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-sm text-muted-foreground">30 min</span>
                  <div className="text-2xl font-normal text-foreground mt-1" style={{ fontFamily: 'Georgia, serif' }}>$159</div>
                  <div className="text-sm text-muted-foreground">Architecture Session</div>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded mt-2 inline-block">Most Popular</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">Architecture review • Implementation strategy • Clear next steps</p>
                <Button size="sm" className="w-full energy-glow" asChild>
                  <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                    Book
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 60 Minutes */}
            <Card className="gradient-card hover:energy-glow/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-sm text-muted-foreground">60 min</span>
                  <div className="text-2xl font-normal text-foreground mt-1" style={{ fontFamily: 'Georgia, serif' }}>$249</div>
                  <div className="text-sm text-muted-foreground">Working Session</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">Live problem solving • Build prototype together • Multiple topics covered</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                    Book
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 105 Minutes */}
            <Card className="gradient-card hover:energy-glow/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-sm text-muted-foreground">105 min</span>
                  <div className="text-2xl font-normal text-foreground mt-1" style={{ fontFamily: 'Georgia, serif' }}>$499</div>
                  <div className="text-sm text-muted-foreground">Deep Exploration</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">Deep system exploration • Strategic planning • Comprehensive review</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                    Book
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* How it works */}
          <div className="text-center py-16">
            <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>How it works</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                You bring the problem—I bring the <span className="text-primary font-medium">patterns</span>. We'll work through your specific 
                challenge together, whether it's <span className="text-primary font-medium">agent orchestration</span>, <span className="text-primary font-medium">MCP integration</span>, 
                or figuring out why your system isn't behaving as expected.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>• <span className="text-primary font-medium">Architecture decisions</span> that need a second opinion</div>
                <div>• <span className="text-primary font-medium">Agent systems</span> that aren't behaving as expected</div>
                <div>• <span className="text-primary font-medium">Performance bottlenecks</span> or scaling challenges</div>
                <div>• Ideas you want to <span className="text-primary font-medium">validate</span> before building</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;