import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, Star, Zap } from "lucide-react";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Book a Session
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert technical consultation with Ocean Li. 
            Advisory sessions for agent systems architecture.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* 15 Minutes */}
          <div className="p-6 border border-border/30 rounded-lg hover:border-primary/30 transition-colors duration-200">
            <div className="text-center mb-4">
              <span className="text-sm text-muted-foreground">15 min</span>
              <div className="text-2xl font-semibold text-foreground mt-1">$79</div>
              <div className="text-sm text-muted-foreground">Triage</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-center">Quick assessment • Specific question answered</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                Book
              </a>
            </Button>
          </div>

          {/* 30 Minutes - Most Popular */}
          <div className="p-6 border-2 border-primary/30 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-200">
            <div className="text-center mb-4">
              <span className="text-sm text-muted-foreground">30 min</span>
              <div className="text-2xl font-semibold text-foreground mt-1">$159</div>
              <div className="text-sm text-muted-foreground">Architecture Session</div>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded mt-2 inline-block">Most Popular</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-center">Architecture review • Implementation strategy • Clear next steps</p>
            <Button size="sm" className="w-full" asChild>
              <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                Book
              </a>
            </Button>
          </div>

          {/* 60 Minutes */}
          <div className="p-6 border border-border/30 rounded-lg hover:border-primary/30 transition-colors duration-200">
            <div className="text-center mb-4">
              <span className="text-sm text-muted-foreground">60 min</span>
              <div className="text-2xl font-semibold text-foreground mt-1">$249</div>
              <div className="text-sm text-muted-foreground">Working Session</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-center">Live problem solving • Build prototype together • Multiple topics covered</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                Book
              </a>
            </Button>
          </div>

          {/* 105 Minutes */}
          <div className="p-6 border border-border/30 rounded-lg hover:border-primary/30 transition-colors duration-200">
            <div className="text-center mb-4">
              <span className="text-sm text-muted-foreground">105 min</span>
              <div className="text-2xl font-semibold text-foreground mt-1">$499</div>
              <div className="text-sm text-muted-foreground">Deep Exploration</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-center">Deep system exploration • Strategic planning • Comprehensive review</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                Book
              </a>
            </Button>
          </div>
        </div>

        {/* How it works */}
        <div className="text-center">
          <h2 className="text-xl font-medium text-foreground mb-6">How it works</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-8">
              You bring the problem—I bring the patterns. We'll work through your specific 
              challenge together, whether it's agent orchestration, MCP integration, 
              or figuring out why your system isn't behaving as expected.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>• Architecture decisions that need a second opinion</div>
              <div>• Agent systems that aren't behaving as expected</div>
              <div>• Performance bottlenecks or scaling challenges</div>
              <div>• Ideas you want to validate before building</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;