import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Shield, 
  AlertTriangle, 
  Navigation, 
  Eye,
  ZoomIn,
  ZoomOut,
  Layers,
  Filter
} from "lucide-react";
import Header from "@/components/Header";

const SafetyMap = () => {
  const [selectedState, setSelectedState] = useState<string>("delhi");
  const [mapView, setMapView] = useState<string>("safety");

  const states = [
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "kolkata", label: "Kolkata" },
    { value: "chennai", label: "Chennai" },
    { value: "goa", label: "Goa" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "kerala", label: "Kerala" }
  ];

  const safetyZones = [
    { name: "India Gate", zone: "safe", tourists: 150, rating: 9.2 },
    { name: "Red Fort", zone: "safe", tourists: 89, rating: 8.8 },
    { name: "Chandni Chowk", zone: "caution", tourists: 234, rating: 7.5 },
    { name: "Paharganj", zone: "caution", tourists: 67, rating: 6.8 },
    { name: "Old Delhi Station", zone: "restricted", tourists: 12, rating: 4.2 }
  ];

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case "safe": return "text-success bg-success/10";
      case "caution": return "text-warning bg-warning/10";
      case "restricted": return "text-destructive bg-destructive/10";
      default: return "text-muted-foreground bg-muted/10";
    }
  };

  const getZoneIcon = (zone: string) => {
    switch (zone) {
      case "safe": return Shield;
      case "caution": return Eye;
      case "restricted": return AlertTriangle;
      default: return MapPin;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-accent/10 text-accent">
              <MapPin className="w-4 h-4 mr-2" />
              Interactive Safety Map
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tourist Safety Zones
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore real-time safety information for tourist destinations across India. 
            Our AI-powered system continuously monitors and updates zone classifications.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state.value} value={state.value}>
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={mapView} onValueChange={setMapView}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Map view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="safety">Safety Zones</SelectItem>
              <SelectItem value="tourist">Tourist Density</SelectItem>
              <SelectItem value="incidents">Incident Reports</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="relative overflow-hidden">
              {/* Map Container */}
              <div className="h-[600px] bg-gradient-to-br from-muted/50 to-accent/5 relative">
                {/* Map Placeholder - Interactive map would go here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 mx-auto text-accent/50" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Interactive Map Loading...</h3>
                      <p className="text-muted-foreground">
                        This would be integrated with Google Maps SDK for real-time visualization
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="bg-white/90">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90">
                    <Layers className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90">
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-4 shadow-medium">
                  <h4 className="font-medium mb-3">Safety Zones</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-success"></div>
                      <span>Safe Zone - High security, tourist-friendly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-warning"></div>
                      <span>Caution Zone - Extra awareness required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-destructive"></div>
                      <span>Restricted Zone - Avoid for safety</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Zone Information */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 bg-success/10 border-success/20">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-5 w-5 text-success" />
                  <h3 className="font-bold text-success">Safe Zones</h3>
                </div>
                <div className="text-2xl font-bold mb-1">24</div>
                <p className="text-sm text-muted-foreground">Active safe zones in {selectedState}</p>
              </Card>

              <Card className="p-4 bg-warning/10 border-warning/20">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="h-5 w-5 text-warning" />
                  <h3 className="font-bold text-warning">Caution Zones</h3>
                </div>
                <div className="text-2xl font-bold mb-1">8</div>
                <p className="text-sm text-muted-foreground">Areas requiring attention</p>
              </Card>

              <Card className="p-4 bg-destructive/10 border-destructive/20">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <h3 className="font-bold text-destructive">Restricted</h3>
                </div>
                <div className="text-2xl font-bold mb-1">3</div>
                <p className="text-sm text-muted-foreground">Areas to avoid</p>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Location */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Navigation className="h-5 w-5 text-accent" />
                <h3 className="font-bold">Current Location</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Zone Status:</span>
                  <Badge className="bg-success/10 text-success">Safe</Badge>
                </div>
                <div className="text-lg font-medium">India Gate, New Delhi</div>
                <div className="text-sm text-muted-foreground">
                  High tourist area with excellent security coverage
                </div>
              </div>
            </Card>

            {/* Zone List */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Popular Tourist Areas</h3>
              <div className="space-y-3">
                {safetyZones.map((zone, index) => {
                  const Icon = getZoneIcon(zone.zone);
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 ${zone.zone === 'safe' ? 'text-success' : zone.zone === 'caution' ? 'text-warning' : 'text-destructive'}`} />
                        <div>
                          <div className="font-medium text-sm">{zone.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {zone.tourists} tourists • {zone.rating}/10
                          </div>
                        </div>
                      </div>
                      <Badge className={`${getZoneColor(zone.zone)} text-xs`}>
                        {zone.zone}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Emergency Alert */}
            <Card className="p-6 bg-gradient-to-r from-destructive/10 to-warning/10 border-destructive/20">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <h3 className="font-bold text-destructive">Emergency</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                If you're in danger or need immediate assistance
              </p>
              <Button className="w-full bg-gradient-to-r from-destructive to-warning">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Send SOS Alert
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyMap;