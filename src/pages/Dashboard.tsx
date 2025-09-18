import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Settings, 
  Shield, 
  Moon, 
  Sun, 
  MapPin, 
  Phone, 
  Heart, 
  AlertTriangle,
  Edit,
  Eye,
  Lock,
  Smartphone,
  Bell,
  LogOut
} from "lucide-react";
import Header from "@/components/Header";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const stats = [
    { label: "Safety Score", value: "98.5%", icon: Shield, color: "text-success" },
    { label: "Trip Days", value: "5", icon: MapPin, color: "text-info" },
    { label: "Safe Zones", value: "12", icon: Heart, color: "text-warning" },
    { label: "Alerts", value: "0", icon: AlertTriangle, color: "text-muted-foreground" }
  ];

  const profileOptions = [
    { icon: Edit, label: "Edit Profile", description: "Update your personal information" },
    { icon: Eye, label: "View Digital ID", description: "View your blockchain ID" },
    { icon: Lock, label: "Security Settings", description: "Manage passwords and 2FA" },
    { icon: Smartphone, label: "App Preferences", description: "Mobile app settings" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Rahul!</h1>
              <p className="text-muted-foreground">Your safety is our priority</p>
            </div>
            <Badge className="bg-success/10 text-success">
              <Shield className="w-4 h-4 mr-2" />
              Safe Zone
            </Badge>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 bg-gradient-card">
                <div className="flex items-center gap-3">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Settings Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-bold">Settings</h2>
              </div>

              <div className="space-y-6">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    <div>
                      <div className="font-medium">
                        {darkMode ? "Dark Mode" : "Light Mode"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Switch between light and dark themes
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={toggleTheme}
                  />
                </div>

                <Separator />

                {/* Notifications */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5" />
                    <div>
                      <div className="font-medium">Push Notifications</div>
                      <div className="text-sm text-muted-foreground">
                        Receive safety alerts and updates
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>

                <Separator />

                {/* Location Sharing */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <div className="font-medium">Location Sharing</div>
                      <div className="text-sm text-muted-foreground">
                        Share location with emergency contacts
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={locationSharing}
                    onCheckedChange={setLocationSharing}
                  />
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Button className="bg-gradient-hero justify-start h-auto p-4">
                  <AlertTriangle className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Emergency Alert</div>
                    <div className="text-sm opacity-90">Send SOS signal</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">View Safety Map</div>
                    <div className="text-sm text-muted-foreground">Check nearby zones</div>
                  </div>
                </Button>
              </div>
            </Card>
          </div>

          {/* User Profile Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-6 w-6 text-accent" />
                <h2 className="text-xl font-bold">Profile</h2>
              </div>

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-lg">Rahul Sharma</h3>
                <p className="text-muted-foreground">Tourist ID: TS-2024-001</p>
                <Badge className="mt-2 bg-success/10 text-success">Verified</Badge>
              </div>

              <div className="space-y-3">
                {profileOptions.map((option, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    className="w-full justify-start h-auto p-3"
                  >
                    <option.icon className="h-5 w-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {option.description}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              <Separator className="my-6" />

              <Button variant="outline" className="w-full text-destructive hover:bg-destructive/10">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </Card>

            {/* Emergency Contacts */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-5 w-5 text-warning" />
                <h3 className="font-bold">Emergency Contacts</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Police:</span>
                  <span className="font-medium">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ambulance:</span>
                  <span className="font-medium">108</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tourist Helpline:</span>
                  <span className="font-medium">1363</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;