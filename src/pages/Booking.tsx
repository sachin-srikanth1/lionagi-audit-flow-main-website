import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, Star, Zap } from "lucide-react";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Agentic Development Consulting
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert technical consultation with Ocean Li. 
            Advisory sessions for agent systems architecture.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* 15 Minutes */}
          <Card className="gradient-card hover:energy-glow transition-all duration-300 flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">15 minutes</span>
              </div>
              <CardTitle className="text-3xl font-bold">$79</CardTitle>
              <CardDescription>Triage</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="space-y-4 flex-grow">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Perfect for:</p>
                  <ul className="space-y-1">
                    <li>• Quick assessment</li>
                    <li>• Specific question answered</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4" />
                  <span>Discord support included</span>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline" asChild>
                <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                  Book 15 min
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* 30 Minutes - Most Popular */}
          <Card className="gradient-card energy-glow border-2 border-primary/30 relative flex flex-col h-full">
            <div className="absolute top-2 right-2">
              <Star className="h-4 w-4 text-accent" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">30 minutes</span>
              </div>
              <CardTitle className="text-3xl font-bold">$159</CardTitle>
              <CardDescription>Architecture Session</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="space-y-4 flex-grow">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Perfect for:</p>
                  <ul className="space-y-1">
                    <li>• Architecture review</li>
                    <li>• Implementation strategy</li>
                    <li>• Clear next steps</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4" />
                  <span>Discord support included</span>
                </div>
              </div>
              <Button className="w-full mt-4" asChild>
                <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                  Book 30 min
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* 60 Minutes */}
          <Card className="gradient-card hover:energy-glow transition-all duration-300 flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">60 minutes</span>
              </div>
              <CardTitle className="text-3xl font-bold">$249</CardTitle>
              <CardDescription>Working Session</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="space-y-4 flex-grow">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Perfect for:</p>
                  <ul className="space-y-1">
                    <li>• Live problem solving</li>
                    <li>• Build prototype together</li>
                    <li>• Multiple topics covered</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4" />
                  <span>Discord support included</span>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline" asChild>
                <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                  Book 60 min
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* 105 Minutes */}
          <Card className="gradient-card hover:energy-glow transition-all duration-300 flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">105 minutes</span>
              </div>
              <CardTitle className="text-3xl font-bold">$499</CardTitle>
              <CardDescription>Deep Exploration</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="space-y-4 flex-grow">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Perfect for:</p>
                  <ul className="space-y-1">
                    <li>• Deep system exploration</li>
                    <li>• Strategic planning</li>
                    <li>• Comprehensive review</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4" />
                    <span>Discord support included</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4" />
                    <span>Ad-hoc booking access</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline" asChild>
                <a href="https://calendly.com/ocean-lionagi" target="_blank" rel="noopener noreferrer">
                  Book 105 min
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Session Prep */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">How it works</h2>
          
          <div className="gradient-card p-8 border border-border/50">
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              You bring the problem—I bring the patterns. We'll work through your specific 
              challenge together, whether it's agent orchestration, MCP integration, 
              or figuring out why your system isn't behaving as expected.
            </p>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Bring whatever you're working on</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Architecture decisions that need a second opinion</li>
                <li>• Agent systems that aren't behaving as expected</li>
                <li>• Performance bottlenecks or scaling challenges</li>
                <li>• Ideas you want to validate before building</li>
                <li>• Or just questions about how this stuff actually works</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;