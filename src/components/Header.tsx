
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface HeaderProps {
  onOpenAuth: (type: "login" | "signup") => void;
}

const Header = ({ onOpenAuth }: HeaderProps) => {
  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ProAI Chats
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => onOpenAuth("login")}
            className="text-gray-600 hover:text-blue-600"
          >
            Log In
          </Button>
          <Button
            onClick={() => onOpenAuth("signup")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
