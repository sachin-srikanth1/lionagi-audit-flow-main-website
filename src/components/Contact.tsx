const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16 border-t border-border/30">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">About Ocean</h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            Creator of <strong className="text-foreground">LionAGI</strong> and former <strong className="text-foreground">Autogen</strong> maintainer. 
            I help teams build robust agent systems that actually work in production.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            From debugging agent loops to architecting multi-agent orchestration, I bring practical solutions from real deployments. 
            Whether you need MCP integration, failure handling strategies, or just a second opinion on your architecture—I've been there.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;