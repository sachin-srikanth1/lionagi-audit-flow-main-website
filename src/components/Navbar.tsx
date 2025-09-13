import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
            LionAGI
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/projects" 
              className={`text-sm hover:text-foreground transition-colors ${
                location.pathname === "/projects" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/mcp-tools" 
              className={`text-sm hover:text-foreground transition-colors ${
                location.pathname === "/mcp-tools" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              MCP Tools
            </Link>
            <Link 
              to="/booking" 
              className={`text-sm hover:text-foreground transition-colors ${
                location.pathname === "/booking" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Booking
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;