import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Shield,
  MapPin,
  Smartphone,
  Users,
  AlertTriangle,
  Globe,
  Clock,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-banner.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Digital Tourist ID",
      description: "Blockchain-secured digital identity with KYC, itinerary, and emergency contacts.",
      color: "text-success"
    },
    {
      icon: MapPin,
      title: "Real-time Safety Zones",
      description: "Live geo-fencing with safe, caution, and restricted area alerts.",
      color: "text-info"
    },
    {
      icon: Smartphone,
      title: "Smart Mobile App",
      description: "Panic button, live tracking, and multilingual interface in 10+ languages.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Community Guardian Network",
      description: "Verified locals and guides can respond to emergencies before authorities.",
      color: "text-warning"
    },
    {
      icon: AlertTriangle,
      title: "AI Anomaly Detection",
      description: "Advanced pattern analysis to detect distress signals and unusual behavior.",
      color: "text-destructive"
    },
    {
      icon: Globe,
      title: "Tourism Dashboard",
      description: "Real-time heatmaps, tourist tracking, and automated incident reporting.",
      color: "text-brand-emerald"
    }
  ];

  const stats = [
    { label: "Tourist Safety Score", value: "99.8%", icon: Shield },
    { label: "Response Time", value: "<2min", icon: Clock },
    { label: "Languages Supported", value: "12+", icon: Globe },
    { label: "Active Guardians", value: "50K+", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Tourist Safety Monitoring" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-hero text-white shadow-glow">
              🇮🇳 Made in India for Global Tourism
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-secondary bg-clip-text text-transparent leading-tight">
              Your Safety,
              <br />
              Our Priority
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered tourist safety monitoring system with real-time tracking, 
              smart alerts, and instant emergency response across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow transition-all transform hover:scale-105 text-lg px-8 py-6"
                asChild
              >
                <Link to="/register">
                  <Shield className="mr-2 h-5 w-5" />
                  Start Your Safe Journey
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent/10"
                asChild
              >
                <Link to="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Core Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Tourist Safety Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital identity to emergency response, we've built everything you need for safe and secure travel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-none shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-background mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Zones Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-success/10 text-success">Real-time Monitoring</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Smart Safety Zone Detection
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI continuously monitors your location and provides instant alerts when entering different safety zones.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-success"></div>
                  <span className="font-medium">Safe Zones</span>
                  <span className="text-muted-foreground">- Tourist-friendly areas with high security</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-warning"></div>
                  <span className="font-medium">Caution Zones</span>
                  <span className="text-muted-foreground">- Areas requiring extra awareness</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-destructive"></div>
                  <span className="font-medium">Restricted Zones</span>
                  <span className="text-muted-foreground">- Areas to avoid for safety</span>
                </div>
              </div>
              
              <Button className="mt-8 bg-gradient-safety" asChild>
                <Link to="/safety">
                  Explore Safety Map
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-card shadow-large">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-success" />
                      </div>
                      <div>
                        <div className="font-medium">Current Zone: Safe</div>
                        <div className="text-sm text-muted-foreground">India Gate, New Delhi</div>
                      </div>
                    </div>
                    <Badge className="bg-success/10 text-success">Safe</Badge>
                  </div>
                  
                  <div className="border-l-2 border-muted pl-4 space-y-3">
                    <div className="text-sm text-muted-foreground">12:30 PM - Entered safe zone</div>
                    <div className="text-sm text-muted-foreground">12:25 PM - Left hotel (Safe zone)</div>
                    <div className="text-sm text-muted-foreground">12:20 PM - GPS location updated</div>
                  </div>
                  
                  <Button size="sm" className="w-full bg-gradient-hero" asChild>
                    <Link to="/emergency">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Emergency Alert
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Travel Safely?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of tourists who trust Yatra Sentinal for their safety and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 bg-white text-accent hover:bg-white/90"
                asChild
              >
                <Link to="/register">
                  <Heart className="mr-2 h-5 w-5" />
                  Create Tourist ID
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-lg font-bold">Yatra Sentinal</span>
              </div>
              <p className="text-muted-foreground">
                India's most advanced tourist safety monitoring system.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/features" className="block text-muted-foreground hover:text-accent transition-colors">Features</Link>
                <Link to="/safety" className="block text-muted-foreground hover:text-accent transition-colors">Safety Zones</Link>
                <Link to="/emergency" className="block text-muted-foreground hover:text-accent transition-colors">Emergency</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <div className="space-y-2">
                <Link to="/help" className="block text-muted-foreground hover:text-accent transition-colors">Help Center</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-accent transition-colors">Contact Us</Link>
                <Link to="/privacy" className="block text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Emergency</h4>
              <div className="space-y-2">
                <div className="text-muted-foreground">Police: 100</div>
                <div className="text-muted-foreground">Ambulance: 108</div>
                <div className="text-muted-foreground">Tourist Helpline: 1363</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Yatra Sentinal. Made with ❤️ in India for global tourist safety.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;