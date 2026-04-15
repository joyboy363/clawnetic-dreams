import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const ProductPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ProductShowcase />
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
