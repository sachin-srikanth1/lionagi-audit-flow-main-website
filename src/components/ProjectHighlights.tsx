import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectHighlights = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Prior work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Frameworks I built—patterns I'll apply in sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-5">
        {/* LionAGI Card - Primary (7/12) */}
        <Card className="gradient-card hover:energy-glow/50 transition-all duration-300 relative lg:col-span-7 border border-border before:absolute before:-left-px before:-right-px before:-top-px before:h-1 before:bg-primary before:rounded-t-lg">
          <CardHeader>
            <CardTitle className="text-lg font-normal text-foreground" style={{ fontFamily: 'Georgia, serif' }}>LionAGI</CardTitle>
            <CardDescription>
              <span className="text-primary font-medium">Orchestration patterns</span> with tracing and failure guardrails.<br />
              <strong className="text-primary">40+</strong> notebooks you can reuse in real flows.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex gap-2 flex-wrap mt-2 mb-3">
                <span className="px-2.5 py-1 bg-muted border border-border text-muted-foreground text-xs rounded font-medium">Patterns: 40+</span>
                <span className="px-2.5 py-1 bg-muted border border-border text-muted-foreground text-xs rounded font-medium">Orchestration</span>
                <span className="px-2.5 py-1 bg-muted border border-border text-muted-foreground text-xs rounded font-medium">Python</span>
              </div>
              <div className="text-muted-foreground text-sm">
                <a
                  href="https://github.com/khive-ai/lionagi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-300 transition-colors"
                  aria-label="LionAGI GitHub repository"
                >
                  GitHub
                </a>
                {' • '}
                <a
                  href="https://khive-ai.github.io/lionagi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-300 transition-colors"
                  aria-label="LionAGI documentation"
                >
                  Docs
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pydapter Card (5/12) */}
        <Card className="gradient-card hover:energy-glow/50 transition-all duration-300 lg:col-span-5 border border-border">
          <CardHeader>
            <CardTitle className="text-lg font-normal text-foreground" style={{ fontFamily: 'Georgia, serif' }}>Pydapter</CardTitle>
            <CardDescription>
              <span className="text-primary font-medium">Async-first</span> data adapters and migration utilities.<br />
              One API across <strong className="text-primary">Postgres/MySQL/SQLite</strong> with safe sync fallbacks.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex gap-2 flex-wrap mt-2 mb-3">
                <span className="px-2.5 py-1 bg-muted border border-border text-muted-foreground text-xs rounded font-medium">DBs: PG/MySQL/SQLite</span>
                <span className="px-2.5 py-1 bg-muted border border-border text-muted-foreground text-xs rounded font-medium">Async-first</span>
                <span className="px-2.5 py-1 bg-muted border border-border text-muted-foreground text-xs rounded font-medium">Migrations</span>
              </div>
              <div className="text-muted-foreground text-sm">
                <a
                  href="https://github.com/lionagi/pydapter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-300 transition-colors"
                  aria-label="Pydapter GitHub repository"
                >
                  GitHub
                </a>
                {' • '}
                <a
                  href="https://pydapter.readthedocs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-300 transition-colors"
                  aria-label="Pydapter documentation"
                >
                  Docs
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-5">
        <p className="text-sm text-muted-foreground max-w-[65ch]">These frameworks encode the patterns I apply in sessions. Adoption optional.</p>
      </div>
    </div>
  );
};

export default ProjectHighlights;