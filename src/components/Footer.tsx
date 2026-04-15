import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-gradient-neon mb-3">CLAWVAULT</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium arcade claw machines engineered for maximum engagement and profitability.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/product" className="hover:text-primary transition-colors">Product</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/checkout" className="hover:text-primary transition-colors">Checkout</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>sales@clawvault.com</li>
              <li>+1 (800) 555-CLAW</li>
              <li>Austin, TX — United States</li>
            </ul>
          </div>
        </div>
        <div className="neon-line mb-6" />
        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} ClawVault Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
