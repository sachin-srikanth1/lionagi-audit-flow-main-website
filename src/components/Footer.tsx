const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-6 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2025 LionAGI</p>
        <div className="flex gap-6">
          <a 
            href="https://calendly.com/ocean-lionagi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            Book a session
          </a>
          <a 
            href="mailto:ocean@lionagi.ai"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/quantoceanli/"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/khive-ai/lionagi"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://khive-ai.github.io/lionagi/"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;