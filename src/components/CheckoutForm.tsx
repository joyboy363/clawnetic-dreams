import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Truck, CheckCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import productImage from "@/assets/claw-machine-product.jpg";

const CheckoutForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<"cart" | "shipping" | "payment" | "confirmed">("cart");
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("confirmed");
      toast({ title: "Order Placed!", description: "You'll receive a confirmation email shortly." });
    }, 2000);
  };

  if (step === "confirmed") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 space-y-4">
        <CheckCircle className="h-20 w-20 text-primary mx-auto" />
        <h2 className="text-3xl font-heading font-bold">Order Confirmed!</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Thank you for your purchase. A confirmation email has been sent. Our team will reach out within 1 business day to arrange delivery.</p>
        <p className="text-sm text-muted-foreground">Order #CVX1-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
      </motion.div>
    );
  }

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Order Summary */}
      <div className="lg:col-span-2 order-2 lg:order-1">
        <div className="rounded-xl border border-border bg-card p-6 space-y-6 sticky top-24">
          <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" /> Order Summary
          </h3>
          <div className="flex gap-4">
            <img src={productImage} alt="ClawVault Pro X1" className="w-20 h-20 rounded-lg object-cover border border-border" loading="lazy" />
            <div className="flex-1">
              <p className="font-heading font-semibold">ClawVault Pro X1</p>
              <p className="text-sm text-muted-foreground">Qty: 1</p>
            </div>
            <p className="font-heading font-bold">$4,999</p>
          </div>
          <div className="neon-line" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>$4,999.00</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-primary">Free</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Tax (est.)</span><span>$412.42</span></div>
          </div>
          <div className="neon-line" />
          <div className="flex justify-between font-heading font-bold text-lg">
            <span>Total</span>
            <span className="text-gradient-neon">$5,411.42</span>
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <div className="lg:col-span-3 order-1 lg:order-2">
        {/* Step indicators */}
        <div className="flex items-center gap-4 mb-8">
          {[
            { id: "cart", label: "Cart", icon: ShoppingCart },
            { id: "shipping", label: "Shipping", icon: Truck },
            { id: "payment", label: "Payment", icon: CreditCard },
          ].map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                step === s.id || (step === "shipping" && i === 0) || (step === "payment" && i <= 1)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                <s.icon className="h-4 w-4" />
              </div>
              <span className="text-sm hidden sm:inline">{s.label}</span>
              {i < 2 && <div className="w-8 h-px bg-border" />}
            </div>
          ))}
        </div>

        {step === "cart" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex gap-4 items-center">
                <img src={productImage} alt="ClawVault Pro X1" className="w-24 h-24 rounded-lg object-cover border border-border" loading="lazy" />
                <div className="flex-1">
                  <h3 className="font-heading font-semibold">ClawVault Pro X1</h3>
                  <p className="text-sm text-muted-foreground">Premium Arcade Claw Machine</p>
                  <p className="text-primary font-bold mt-1">$4,999.00</p>
                </div>
              </div>
            </div>
            <Button onClick={() => setStep("shipping")} size="lg" className="w-full glow-cyan font-heading">
              Proceed to Shipping <Truck className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {step === "shipping" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep("payment");
              }}
              className="space-y-4"
            >
              <h3 className="font-heading font-semibold text-lg mb-4">Shipping Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input required className="bg-muted border-border" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input required className="bg-muted border-border" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Input required className="bg-muted border-border" placeholder="123 Main St" />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input required className="bg-muted border-border" placeholder="Austin" />
                </div>
                <div className="space-y-2">
                  <Label>State</Label>
                  <Input required className="bg-muted border-border" placeholder="TX" />
                </div>
                <div className="space-y-2">
                  <Label>ZIP</Label>
                  <Input required className="bg-muted border-border" placeholder="73301" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" required className="bg-muted border-border" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input type="tel" required className="bg-muted border-border" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep("cart")} className="border-primary/30 hover:bg-primary/10 font-heading">Back</Button>
                <Button type="submit" size="lg" className="flex-1 glow-cyan font-heading">
                  Continue to Payment <CreditCard className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {step === "payment" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <h3 className="font-heading font-semibold text-lg mb-4">Payment Details</h3>
              <div className="space-y-2">
                <Label>Card Number</Label>
                <Input required className="bg-muted border-border" placeholder="4242 4242 4242 4242" maxLength={19} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Expiry</Label>
                  <Input required className="bg-muted border-border" placeholder="MM / YY" maxLength={7} />
                </div>
                <div className="space-y-2">
                  <Label>CVC</Label>
                  <Input required className="bg-muted border-border" placeholder="123" maxLength={4} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Cardholder Name</Label>
                <Input required className="bg-muted border-border" placeholder="John Doe" />
              </div>
              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep("shipping")} className="border-primary/30 hover:bg-primary/10 font-heading">Back</Button>
                <Button type="submit" size="lg" disabled={loading} className="flex-1 glow-cyan font-heading">
                  {loading ? <span className="animate-pulse">Processing...</span> : <>Place Order — $5,411.42</>}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
