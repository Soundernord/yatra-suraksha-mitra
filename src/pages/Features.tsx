import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Smartphone, 
  Brain, 
  Activity, 
  Scale, 
  MessageSquare, 
  Wifi, 
  Eye, 
  Globe, 
  MapPin, 
  Phone, 
  HeartHandshake, 
  FileText, 
  Archive, 
  Navigation 
} from "lucide-react";
import Header from "@/components/Header";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Authentication",
      description: "Uses a secure and verified 'Authentic APP for users.'",
      color: "text-success",
      badge: "Secure"
    },
    {
      icon: Archive,
      title: "Decentralized Identity",
      description: "Blockchain-based IDs for secure identity management.",
      color: "text-info",
      badge: "Blockchain"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Real-time dashboard for authorities (police/hospitals).",
      color: "text-warning",
      badge: "Live"
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Fully compliant with the DPDP Act 2023.",
      color: "text-accent",
      badge: "DPDP Act 2023"
    },
    {
      icon: Brain,
      title: "Predictive AI",
      description: "AI model for tracking and predicting high-risk zones.",
      color: "text-brand-emerald",
      badge: "AI Powered"
    },
    {
      icon: MessageSquare,
      title: "Offline Communication",
      description: "Automated SMS for communication in offline mode.",
      color: "text-destructive",
      badge: "SMS"
    },
    {
      icon: Smartphone,
      title: "Device Hub",
      description: "Smartphones used as a hub for environmental sensing & connectivity.",
      color: "text-info",
      badge: "IoT Hub"
    },
    {
      icon: Eye,
      title: "AR View",
      description: "AR-based view for zones/maps powered by Google ARCore.",
      color: "text-warning",
      badge: "ARCore"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in 10–15 languages using Google Cloud Translation API.",
      color: "text-accent",
      badge: "15 Languages"
    },
    {
      icon: MapPin,
      title: "Offline Maps",
      description: "Full offline access to maps using Google Maps SDK.",
      color: "text-success",
      badge: "Google Maps"
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "Includes emergency contact access, using a specialized dataset.",
      color: "text-destructive",
      badge: "Emergency"
    },
    {
      icon: HeartHandshake,
      title: "Medical Integration",
      description: "Supports medical insurance via ABDM & insurance provider APIs.",
      color: "text-brand-emerald",
      badge: "ABDM"
    },
    {
      icon: FileText,
      title: "Incident Reporting",
      description: "Integrated with Google Forms API for report submission.",
      color: "text-info",
      badge: "Google Forms"
    },
    {
      icon: Archive,
      title: "Digital Locker",
      description: "Linked with DigiLocker API for document storage/access.",
      color: "text-warning",
      badge: "DigiLocker"
    },
    {
      icon: Navigation,
      title: "Geofencing",
      description: "Built using Firebase GeoFire for smart geolocation tracking.",
      color: "text-accent",
      badge: "Firebase"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent">Mobile App Features</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-secondary bg-clip-text text-transparent">
            Comprehensive Safety Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the advanced technologies and features that make Yatra Sentinal 
            the most comprehensive tourist safety platform in India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-none shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex p-3 rounded-xl bg-background ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <section className="py-16 bg-muted/50 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built with Advanced Technologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Powered by industry-leading APIs and frameworks for maximum reliability
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Google ARCore",
                "Firebase",
                "Google Maps SDK",
                "Google Cloud Translation",
                "Google Forms API",
                "DigiLocker API",
                "ABDM API",
                "Blockchain",
                "AI/ML Models",
                "SMS Gateway",
                "DPDP Compliance",
                "Emergency Database"
              ].map((tech, index) => (
                <Card key={index} className="p-4 text-center bg-background">
                  <div className="font-medium text-sm">{tech}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-hero text-white">
            <h2 className="text-3xl font-bold mb-4">
              Experience Next-Generation Safety
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Download the Yatra Sentinal mobile app and enjoy secure, intelligent travel monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                Coming Soon on Android & iOS
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;