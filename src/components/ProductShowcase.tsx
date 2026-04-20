import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import clawDetail from "@/assets/claw-detail.jpg";

const specs = [
  "Dimensions: 36\" W × 32\" D × 72\" H",
  "Weight: 350 lbs (159 kg)",
  "Power: 110V/220V Compatible",
  "Capacity: 150+ plush prizes",
  "Display: 7\" LCD touchscreen",
  "Connectivity: Wi-Fi + Bluetooth",
  "Payment: Coin, Bill, Card, NFC",
  "Warranty: 2 Years Full Coverage",
];

const ProductShowcase = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            The <span className="text-gradient-neon">ClawVault Pro X1</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our flagship claw machine — the most advanced, profitable, and visually stunning unit on the market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden border border-border glow-cyan">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              >
                <source src="/construction.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-bold font-heading text-gradient-neon">$4,999</span>
                <span className="text-muted-foreground line-through text-lg">$6,499</span>
              </div>
              <p className="text-sm text-primary font-medium">Launch Price — Save $1,500</p>
            </div>

            <div className="neon-line" />

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Specifications</h3>
              <ul className="space-y-3">
                {specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="neon-line" />

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="glow-cyan font-heading">
                <Link to="/checkout">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 font-heading">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
