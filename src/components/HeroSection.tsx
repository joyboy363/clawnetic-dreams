import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const wrapper = wrapperRef.current;
      const video = videoRef.current;
      if (!section || !wrapper || !video || !video.duration) return;

      const scrollZone = wrapper.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, window.scrollY);
      const progress = Math.min(1, Math.max(0, scrolled / scrollZone));
      video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "300vh" }}>
      <section
        ref={sectionRef}
        className="sticky top-0 relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Scroll-scrubbed video background */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            maskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 80%)",
          }}
        >
          <source src="/BMOtransition2.mp4" type="video/mp4" />
        </video>

        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
              <span className="text-primary text-sm font-medium">Premium Arcade Equipment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
              The Future of
              <span className="text-gradient-neon block">Claw Machines</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ClawVault delivers next-generation claw machines engineered for maximum engagement,
              stunning aesthetics, and unmatched reliability. Built for arcades, malls, and entertainment venues worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="glow-cyan font-heading">
                <Link to="/product">
                  Explore Product <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 font-heading">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
