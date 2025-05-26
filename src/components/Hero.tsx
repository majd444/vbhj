
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

interface HeroProps {
  onOpenAuth: (type: "login" | "signup") => void;
}

const Hero = ({ onOpenAuth }: HeroProps) => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
          <Sparkles className="w-4 h-4 mr-2" />
          Next-Generation AI Chat Platform
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
          Transform Your
          <br />
          <span className="relative">
            Conversations
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience the future of AI-powered conversations. ProAI Chats delivers intelligent, 
          personalized interactions that understand context, emotion, and intent.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            onClick={() => onOpenAuth("signup")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group"
          >
            Start Chatting Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg"
          >
            <Zap className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8 md:p-12">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center"
              alt="AI Chatbot Interface"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
