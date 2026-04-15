import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Get in <span className="text-gradient-neon">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions? Need a custom quote? Our team is ready to help you find the perfect claw machine solution.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <InquiryForm />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
