import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  MapPin, 
  AlertTriangle, 
  Hospital, 
  Shield, 
  Siren,
  Clock,
  Users
} from "lucide-react";
import Header from "@/components/Header";

const Emergency = () => {
  const [selectedState, setSelectedState] = useState<string>("");

  const nationalNumbers = [
    { service: "Police", number: "100", icon: Shield, color: "text-info" },
    { service: "Fire Service", number: "101", icon: Siren, color: "text-destructive" },
    { service: "Ambulance", number: "108", icon: Hospital, color: "text-success" },
    { service: "Tourist Helpline", number: "1363", icon: Users, color: "text-warning" }
  ];

  const stateContacts = {
    "delhi": [
      { service: "Delhi Police Control Room", number: "011-2691-4444", area: "New Delhi" },
      { service: "AIIMS Emergency", number: "011-2658-8500", area: "New Delhi" },
      { service: "Delhi Fire Service", number: "011-2341-2222", area: "Delhi" }
    ],
    "mumbai": [
      { service: "Mumbai Police Control", number: "022-2262-0111", area: "Mumbai" },
      { service: "JJ Hospital Emergency", number: "022-2373-5555", area: "Mumbai" },
      { service: "Mumbai Fire Brigade", number: "022-2307-7777", area: "Mumbai" }
    ],
    "bangalore": [
      { service: "Bangalore Police", number: "080-2294-2444", area: "Bangalore" },
      { service: "Victoria Hospital", number: "080-2670-4999", area: "Bangalore" },
      { service: "Fire & Emergency Services", number: "080-2556-6666", area: "Bangalore" }
    ],
    "kolkata": [
      { service: "Kolkata Police", number: "033-2214-3434", area: "Kolkata" },
      { service: "Medical College Hospital", number: "033-2254-8172", area: "Kolkata" },
      { service: "Fire & Emergency Services", number: "033-2244-5566", area: "Kolkata" }
    ],
    "chennai": [
      { service: "Chennai Police", number: "044-2844-0000", area: "Chennai" },
      { service: "Government General Hospital", number: "044-2819-3000", area: "Chennai" },
      { service: "Fire & Rescue Services", number: "044-2857-1122", area: "Chennai" }
    ]
  };

  const states = [
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "kolkata", label: "Kolkata" },
    { value: "chennai", label: "Chennai" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Emergency Alert Section */}
        <div className="mb-8">
          <Card className="p-6 bg-gradient-to-r from-destructive/10 to-warning/10 border-destructive/20">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <div>
                <h1 className="text-2xl font-bold text-destructive">Emergency Contacts</h1>
                <p className="text-muted-foreground">Quick access to verified emergency services across India</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-destructive to-warning text-white" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Emergency SOS
            </Button>
          </Card>
        </div>

        {/* National Emergency Numbers */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-info/10 text-info">
              <Shield className="w-4 h-4 mr-2" />
              National Emergency Numbers
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nationalNumbers.map((emergency, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-large transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-background ${emergency.color}`}>
                    <emergency.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{emergency.service}</h3>
                    <div className="text-2xl font-bold text-foreground">{emergency.number}</div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(`tel:${emergency.number}`)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* State-wise Emergency Contacts */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-warning/10 text-warning">
              <MapPin className="w-4 h-4 mr-2" />
              State & City Emergency Services
            </Badge>
          </div>

          <div className="mb-6">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select your state/city" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedState && stateContacts[selectedState as keyof typeof stateContacts] && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateContacts[selectedState as keyof typeof stateContacts].map((contact, index) => (
                <Card key={index} className="p-6 bg-gradient-card">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">{contact.service}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{contact.area}</span>
                    </div>
                    <div className="text-xl font-bold text-accent">{contact.number}</div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(`tel:${contact.number}`)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </Card>
              ))}
            </div>
          )}

          {!selectedState && (
            <Card className="p-8 text-center bg-muted/50">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Select a State or City</h3>
              <p className="text-muted-foreground">
                Choose your location to view specific emergency contact numbers
              </p>
            </Card>
          )}
        </section>

        {/* Quick Tips */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-success/10 text-success">
              <Clock className="w-4 h-4 mr-2" />
              Emergency Tips
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4 text-success">In Case of Emergency:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Stay calm and assess the situation</li>
                <li>• Call the appropriate emergency number</li>
                <li>• Provide clear location details</li>
                <li>• Stay on the line until help arrives</li>
                <li>• Use the Yatra Sentinal panic button for instant alerts</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-4 text-info">Safety Reminders:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Keep emergency numbers saved in your phone</li>
                <li>• Share your location with trusted contacts</li>
                <li>• Keep important documents digitally backed up</li>
                <li>• Stay aware of your surroundings</li>
                <li>• Follow local safety guidelines and advisories</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Emergency;