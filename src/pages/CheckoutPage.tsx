import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="text-gradient-neon">Checkout</span>
            </h1>
            <p className="text-muted-foreground text-lg">Complete your order and join the ClawVault family.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CheckoutForm />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
