import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Globe, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/src/assets/yatra-logo.png" alt="Yatra Sentinal" className="h-8 w-8" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Yatra Sentinal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/features" 
              className="text-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              Features
            </Link>
            <Link 
              to="/safety" 
              className="text-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Shield className="h-4 w-4" />
              Safety Zones
            </Link>
            <Link 
              to="/emergency" 
              className="text-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Emergency
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/login">Tourist Login</Link>
            </Button>
            <Button className="bg-gradient-hero hover:shadow-glow transition-all" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border shadow-medium md:hidden animate-slide-in">
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                to="/features" 
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Globe className="h-4 w-4" />
                Features
              </Link>
              <Link 
                to="/safety" 
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="h-4 w-4" />
                Safety Zones
              </Link>
              <Link 
                to="/emergency" 
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Emergency
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" asChild onClick={() => setIsMenuOpen(false)}>
                  <Link to="/login">Tourist Login</Link>
                </Button>
                <Button className="bg-gradient-hero" asChild onClick={() => setIsMenuOpen(false)}>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;