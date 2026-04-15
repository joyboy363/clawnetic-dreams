import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/claw-machine-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-primary text-sm font-medium">Premium Arcade Equipment</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            The Future of
            <span className="text-gradient-neon block">Claw Machines</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            ClawVault delivers next-generation claw machines engineered for maximum engagement, 
            stunning aesthetics, and unmatched reliability. Built for arcades, malls, and entertainment venues worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
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

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative animate-float">
            <img
              src={heroImage}
              alt="ClawVault Premium Claw Machine with neon lighting"
              width={1024}
              height={1280}
              className="w-full max-w-md rounded-2xl border border-primary/20 glow-cyan"
            />
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
