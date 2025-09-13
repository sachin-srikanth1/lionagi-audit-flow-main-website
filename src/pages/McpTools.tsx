import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  McpBlueprint, 
  MemoryMcpIcon, 
  CognitionMcpIcon, 
  WavesMcpIcon
} from "@/components/icons/Mcp";
import { FanInBusIcon, SlidingWindowIcon, BridgeLinkIcon } from "@/components/icons/WhyMcp";

const McpToolsPage = () => {
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
          
          {/* Smooth Blue to Black Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8 leading-tight text-center" style={{ fontFamily: 'Georgia, serif' }}>
              MCP Tools Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              MCP tools for memory, semantic search, and versioned context. Works with Claude and VS Code. Framework-agnostic integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {/* Memory MCP */}
            <Card className="gradient-card hover:energy-glow/30 transition-all duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="icon-plate icon-plate--lg text-primary flex-shrink-0 mt-1">
                    <MemoryMcpIcon className="h-16 w-16" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-normal text-foreground mb-2" style={{ fontFamily: 'Georgia, serif' }}>Memory MCP</CardTitle>
                    <CardDescription className="text-sm">
                      Persistent memory with semantic search across sessions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Core Features</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Save and retrieve context across sessions</li>
                    <li>• Semantic search with embedding support</li>
                    <li>• Type-based organization (notes, facts, events)</li>
                    <li>• Version tracking and update history</li>
                  </ul>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    Perfect for agents that need to remember user preferences and maintain conversation context.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Persistence</span>
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Semantic Search</span>
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Context</span>
                </div>
              </CardContent>
            </Card>

            {/* Cognition MCP */}
            <Card className="gradient-card hover:energy-glow/30 transition-all duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="icon-plate icon-plate--lg text-primary flex-shrink-0 mt-1">
                    <CognitionMcpIcon className="h-16 w-16" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-normal text-foreground mb-2" style={{ fontFamily: 'Georgia, serif' }}>Cognition MCP</CardTitle>
                    <CardDescription className="text-sm">
                      Advanced cognitive operations with intelligent ranking
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Capabilities</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Rich metadata and importance scoring</li>
                    <li>• Proactive context suggestions</li>
                    <li>• Planning context for orchestration</li>
                    <li>• Agent recommendation patterns</li>
                  </ul>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    Rust/Python hybrid with Candle embeddings for high-performance cognitive operations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Rust/Python</span>
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Embeddings</span>
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Planning</span>
                </div>
              </CardContent>
            </Card>

            {/* Waves MCP */}
            <Card className="gradient-card hover:energy-glow/30 transition-all duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="icon-plate icon-plate--lg text-primary flex-shrink-0 mt-1">
                    <WavesMcpIcon className="h-16 w-16" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-normal text-foreground mb-2" style={{ fontFamily: 'Georgia, serif' }}>Waves MCP</CardTitle>
                    <CardDescription className="text-sm">
                      Life-first accountability and progress tracking
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tracking System</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Gate-based progress (ALIVE/WORK)</li>
                    <li>• Daily accountability summaries</li>
                    <li>• Energy and blocker monitoring</li>
                    <li>• Natural language pattern search</li>
                  </ul>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    Built for sustainable productivity—tracks both personal wellness and work progress.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Life Balance</span>
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Accountability</span>
                  <span className="px-2 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded">Progress</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-normal text-foreground mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>Why MCP?</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <Card className="bg-slate-800/20 border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start">
                    <div className="icon-plate icon-plate--xl text-primary mb-3">
                      <FanInBusIcon className="h-20 w-20" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">One Protocol, Whole Stack</h3>
                    <p className="text-muted-foreground text-sm">
                      Replace dozens of custom integrations with a single standard—like HTTP did for the web.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/20 border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start">
                    <div className="icon-plate icon-plate--xl text-primary mb-3">
                      <SlidingWindowIcon className="h-20 w-20" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Live Context Streaming</h3>
                    <p className="text-muted-foreground text-sm">
                      Your AI sees current state as you see it—live data from tools, not yesterday's export.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/20 border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start">
                    <div className="icon-plate icon-plate--xl text-primary mb-3">
                      <BridgeLinkIcon className="h-20 w-20" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Model–Tool Bridge</h3>
                    <p className="text-muted-foreground text-sm">
                      Finally close the gap between powerful models and your business systems—no rewrites.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16">
            <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Integrate MCP Tools?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert guidance on integrating MCP tools into your agentic workflows. 
              From setup to advanced patterns.
            </p>
            <Link to="/booking">
              <Button size="lg" className="text-lg px-8 py-6 energy-glow">
                Book a session
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default McpToolsPage;
