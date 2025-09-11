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
        <ProjectHighlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
