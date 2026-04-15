import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FAQ_RESPONSES: Record<string, string> = {
  price: "The **ClawVault Pro X1** is currently available at our launch price of **$4,999** (regularly $6,499). This includes free shipping within the continental US and a 2-year full warranty.",
  shipping: "We offer **free shipping** within the continental US. International shipping is available — contact us for a custom quote. Typical delivery is **5-10 business days**.",
  warranty: "Every ClawVault comes with a **2-year full coverage warranty** including parts, labor, and software updates. Extended warranties up to 5 years are available.",
  specs: "The ClawVault Pro X1 features:\n- **36\" W × 32\" D × 72\" H**\n- **350 lbs** weight\n- **110V/220V** compatible\n- **150+ prize capacity**\n- **7\" LCD touchscreen**\n- **Wi-Fi + Bluetooth** connectivity\n- **Coin, Bill, Card, NFC** payment options",
  payment: "We accept all major credit cards, PayPal, wire transfer, and offer **financing options** for qualified businesses. Leasing is also available.",
  custom: "Yes! We offer **custom branding** including custom wraps, LED color schemes, branded UI screens, and custom prize configurations. Minimum order of 3 units for full customization.",
  roi: "Most operators see **ROI within 3-6 months**. With average play rates of $1-2 per game and 50-100+ plays per day in high-traffic locations, the ClawVault Pro X1 is a proven revenue generator.",
};

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) return FAQ_RESPONSES.price;
  if (lower.includes("ship") || lower.includes("deliver")) return FAQ_RESPONSES.shipping;
  if (lower.includes("warranty") || lower.includes("guarantee")) return FAQ_RESPONSES.warranty;
  if (lower.includes("spec") || lower.includes("dimension") || lower.includes("size") || lower.includes("weight")) return FAQ_RESPONSES.specs;
  if (lower.includes("pay") || lower.includes("financ") || lower.includes("lease")) return FAQ_RESPONSES.payment;
  if (lower.includes("custom") || lower.includes("brand")) return FAQ_RESPONSES.custom;
  if (lower.includes("roi") || lower.includes("profit") || lower.includes("revenue") || lower.includes("earn")) return FAQ_RESPONSES.roi;
  return "Thanks for your question! I can help with information about **pricing**, **specifications**, **shipping**, **warranty**, **customization**, **payment options**, and **ROI projections**. What would you like to know?";
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "👋 Hi! I'm the ClawVault assistant. Ask me about our claw machines — pricing, specs, shipping, or anything else!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setTyping(false);
    }, 800 + Math.random() * 700);
  };

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center glow-cyan hover:scale-110 transition-transform"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-4rem)] bg-card border border-border rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-heading font-semibold">ClawVault AI</p>
                  <p className="text-xs text-muted-foreground">Always online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground" aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-3 w-3 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <div className="prose prose-sm prose-invert max-w-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-3 w-3 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="h-3 w-3 text-primary" />
                  </div>
                  <div className="bg-muted rounded-xl px-3 py-2 text-sm text-muted-foreground animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about ClawVault..."
                  className="bg-muted border-border text-sm"
                />
                <Button type="submit" size="icon" className="flex-shrink-0" disabled={!input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
