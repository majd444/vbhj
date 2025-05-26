
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Zap, Shield, Users, ArrowRight, Sparkles, Bot, Brain } from "lucide-react";
import AuthModal from "@/components/AuthModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header onOpenAuth={setAuthModal} />
      <Hero onOpenAuth={setAuthModal} />
      <Features />
      <Footer />
      
      <AuthModal 
        type={authModal} 
        onClose={() => setAuthModal(null)} 
        onSwitchType={(type) => setAuthModal(type)}
      />
    </div>
  );
};

export default Index;
