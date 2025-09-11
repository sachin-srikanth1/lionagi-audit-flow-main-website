import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-2xl font-semibold text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          This page doesn't exist. Let's get you back on track.
        </p>
        <Button asChild>
          <a href="/">
            Back home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
