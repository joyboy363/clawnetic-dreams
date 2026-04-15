import { motion } from "framer-motion";
import { Zap, Shield, Eye, Wrench, Wifi, BarChart3 } from "lucide-react";
import featureImage from "@/assets/claw-machine-feature.jpg";

const features = [
  { icon: Zap, title: "Precision Claw Mechanics", desc: "Servo-driven claw with adjustable grip strength and programmable win ratios." },
  { icon: Shield, title: "Reinforced Cabinet", desc: "Tempered glass panels, anti-tamper locks, and weatherproof steel construction." },
  { icon: Eye, title: "LED Light System", desc: "Programmable RGB neon strips with 16M+ colors and dynamic attraction modes." },
  { icon: Wrench, title: "Easy Maintenance", desc: "Tool-free access panels, modular components, and self-diagnostic systems." },
  { icon: Wifi, title: "IoT Connected", desc: "Remote monitoring, real-time analytics, and over-the-air firmware updates." },
  { icon: BarChart3, title: "Revenue Dashboard", desc: "Track earnings, play counts, and win rates from any device." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 neon-line" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Engineered to <span className="text-gradient-neon">Dominate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every ClawVault machine is built with cutting-edge technology and premium materials for maximum ROI.
          </p>
        </motion.div>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl overflow-hidden border border-border glow-cyan"
        >
          <img
            src={featureImage}
            alt="ClawVault claw machine in arcade environment"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-cyan transition-shadow">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
