import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const InquiryForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 space-y-4"
      >
        <CheckCircle className="h-16 w-16 text-primary mx-auto" />
        <h3 className="text-2xl font-heading font-bold">Thank You!</h3>
        <p className="text-muted-foreground">Your inquiry has been received. Our team will contact you shortly.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="border-primary/30 hover:bg-primary/10 font-heading">
          Send Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" required className="bg-muted border-border focus:border-primary" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" required className="bg-muted border-border focus:border-primary" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-muted border-border focus:border-primary" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Acme Arcades" className="bg-muted border-border focus:border-primary" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">Area of Interest</Label>
        <Select required>
          <SelectTrigger className="bg-muted border-border">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="purchase">Purchase Inquiry</SelectItem>
            <SelectItem value="bulk">Bulk Order (5+ units)</SelectItem>
            <SelectItem value="custom">Custom Branding</SelectItem>
            <SelectItem value="lease">Leasing Options</SelectItem>
            <SelectItem value="support">Technical Support</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your needs..."
          rows={5}
          required
          className="bg-muted border-border focus:border-primary resize-none"
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full glow-cyan font-heading">
        {loading ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Inquiry
          </>
        )}
      </Button>
    </form>
  );
};

export default InquiryForm;
