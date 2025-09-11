import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientProof from "@/components/ClientProof";
import ProjectHighlights from "@/components/ProjectHighlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ClientProof
          clients={[
            { name: "Google Cloud", permitted: false },
            { name: "NVIDIA", permitted: false },
            { name: "Clay", permitted: false },
          ]}
        />
        {/* Side by side layout for Prior Work and About Ocean */}
        <div className="max-w-7xl mx-auto px-6 py-20 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Prior Work - Left Side */}
            <div>
              <ProjectHighlights />
            </div>
            
            {/* About Ocean - Right Side */}
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
