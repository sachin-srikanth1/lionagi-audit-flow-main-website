import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, CheckCircle } from "lucide-react";

const BookingCTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Agentic Development Consulting
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert guidance for agent systems. Build what you envision with practical patterns.
        </p>
      </div>

      {/* Quick tier overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">15 min</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">$79</p>
          <p className="text-sm text-muted-foreground">Quick consultation</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <CheckCircle className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Discord support</span>
          </div>
        </div>

        <div className="text-center relative border-t-4 border-primary/40 pt-4 rounded-lg bg-primary/5">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">30 min</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">$159</p>
          <p className="text-sm text-muted-foreground">Architecture session</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <CheckCircle className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Discord support</span>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">60 min</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">$249</p>
          <p className="text-sm text-muted-foreground">Extended session</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <CheckCircle className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Discord support</span>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">105 min</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">$499</p>
          <p className="text-sm text-muted-foreground">Comprehensive</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <CheckCircle className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Discord + ad-hoc</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/booking">
          <Button size="lg" className="text-lg px-8 energy-glow">
            Book a session
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BookingCTA;