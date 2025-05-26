
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Shield, Users, Zap, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Advanced AI Models",
      description: "Powered by state-of-the-art language models that understand context and nuance."
    },
    {
      icon: Brain,
      title: "Intelligent Responses",
      description: "Get thoughtful, relevant answers that adapt to your conversation style."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience near-instant responses with our optimized infrastructure."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are encrypted and never stored without permission."
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Collaborate with team members and share insights seamlessly."
    },
    {
      icon: MessageSquare,
      title: "Rich Conversations",
      description: "Support for text, images, and files to enhance your interactions."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to have meaningful, productive conversations with AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
