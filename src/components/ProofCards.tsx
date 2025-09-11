import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const ProofCards = () => {
  const proofs = [
    {
      title: "LionAGI Framework",
      description: "Open source agent orchestration framework",
      link: "https://github.com/khive-ai/lionagi",
      external: true,
      thumbnail: "/spec-thumb.svg",
      alt: "LionAGI repository"
    },
    {
      title: "Patterns & Examples", 
      description: "Notebooks and tutorials for multi-agent patterns",
      link: "https://github.com/khive-ai/lionagi/tree/main/notebooks",
      external: true,
      thumbnail: "/diff-thumb.svg",
      alt: "Code examples and tutorials"
    },
    {
      title: "Book a Session",
      description: "Get expert help with your agent systems",
      link: "https://calendly.com/ocean-lionagi",
      external: true,
      thumbnail: "/metrics-thumb.svg",
      alt: "Schedule consultation"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16" aria-label="Proof of Concept Artifacts">
      <h2 className="sr-only">Proof Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {proofs.map((proof, index) => (
          <Card key={index} className="gradient-card hover:energy-glow/50 transition-all duration-300 group cursor-pointer">
            <a href={proof.link} target={proof.external ? "_blank" : "_self"} rel={proof.external ? "noopener noreferrer" : ""} className={`block h-full ${proof.external ? "ext" : "link"}`}>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <LazyImage 
                  src={proof.thumbnail} 
                  alt={proof.alt}
                  className="w-full h-full object-cover"
                  width={640}
                  height={360}
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium text-foreground flex items-center justify-between">
                  {proof.title}
                  {proof.external && <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {proof.description}
                </p>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProofCards;