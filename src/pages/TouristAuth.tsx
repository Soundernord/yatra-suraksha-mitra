import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Globe, 
  CreditCard,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  QrCode,
  Upload,
  Loader2
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import QRLogin from "@/components/QRLogin";

const TouristAuth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showQRLogin, setShowQRLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Login fields
    email: "",
    password: "",
    
    // Registration fields
    fullName: "",
    dateOfBirth: "",
    nationality: "",
    passportNumber: "",
    phoneNumber: "",
    emergencyContact1: "",
    emergencyContact2: "",
    accommodation: "",
    visitPurpose: "",
    stayDuration: "",
    preferredLanguage: "",
    medicalConditions: "",
    insuranceProvider: "",
    
    // Agreements
    termsAccepted: false,
    dataProcessingAccepted: false,
    trackingConsent: false
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    toast({
      title: "Login Successful",
      description: "Welcome back to Yatra Sentinal!",
    });
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted || !formData.dataProcessingAccepted) {
      toast({
        title: "Agreement Required",
        description: "Please accept the terms and data processing agreement to continue.",
        variant: "destructive",
      });
      return;
    }

    // Add registration logic here
    toast({
      title: "Registration Successful",
      description: "Your Digital Tourist ID is being created. You'll receive confirmation shortly.",
    });
  };

  const countries = [
    "India", "United States", "United Kingdom", "Canada", "Australia", 
    "Germany", "France", "Japan", "Singapore", "UAE"
  ];

  const languages = [
    "English", "Hindi", "Bengali", "Telugu", "Marathi", "Tamil", 
    "Gujarati", "Urdu", "Kannada", "Malayalam", "Punjabi", "Assamese"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative">
                <Shield className="h-10 w-10 text-accent" />
                <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse-soft"></div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Tourist Authentication
              </h1>
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create your secure Digital Tourist ID or login to access your safety dashboard
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Register
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card className="bg-gradient-card shadow-medium">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <User className="h-5 w-5 text-accent" />
                    Tourist Login
                  </CardTitle>
                  <CardDescription>
                    Access your Digital Tourist ID and safety dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                      </div>
                      <Button variant="link" className="p-0 h-auto text-accent">
                        Forgot password?
                      </Button>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-hero hover:shadow-glow"
                      disabled={isLoading}
                      onClick={(e) => {
                        e.preventDefault();
                        const email = (document.getElementById('email') as HTMLInputElement)?.value;
                        const password = (document.getElementById('password') as HTMLInputElement)?.value;
                        
                        if (email === 'demo@yatra.com' && password === 'demo123') {
                          setIsLoading(true);
                          setTimeout(() => {
                            window.location.href = '/dashboard';
                          }, 2000);
                        } else {
                          toast({
                            title: "Invalid Credentials",
                            description: "Use demo credentials: demo@yatra.com / demo123",
                            variant: "destructive",
                          });
                        }
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing In...
                        </>
                      ) : (
                        <>
                          <Shield className="mr-2 h-4 w-4" />
                          Login to Dashboard
                        </>
                      )}
                    </Button>

                    <div className="text-center space-y-4">
                      <Button 
                        variant="outline" 
                        className="w-full border-accent text-accent hover:bg-accent/10"
                        type="button"
                        onClick={() => setShowQRLogin(true)}
                      >
                        <QrCode className="mr-2 h-4 w-4" />
                        Scan QR Code to Login
                      </Button>
                      
                      <div className="p-4 bg-info/10 rounded-lg text-sm">
                        <p className="text-info font-medium mb-2">Demo Credentials:</p>
                        <p className="text-muted-foreground">Email: demo@yatra.com</p>
                        <p className="text-muted-foreground">Password: demo123</p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Registration Tab */}
            <TabsContent value="register">
              <Card className="bg-gradient-card shadow-medium">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    Create Digital Tourist ID
                  </CardTitle>
                  <CardDescription>
                    Complete your profile to get blockchain-secured Digital Tourist ID
                  </CardDescription>
                  <Badge className="bg-gradient-hero text-white mx-auto">
                    Secure • Private • Blockchain Protected
                  </Badge>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegistration} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <User className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            placeholder="As per passport/ID"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nationality">Nationality *</Label>
                          <Select onValueChange={(value) => handleInputChange("nationality", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select nationality" />
                            </SelectTrigger>
                            <SelectContent>
                              {countries.map(country => (
                                <SelectItem key={country} value={country}>{country}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="passportNumber">Passport/ID Number *</Label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="passportNumber"
                              placeholder="Passport or Aadhaar number"
                              className="pl-10"
                              value={formData.passportNumber}
                              onChange={(e) => handleInputChange("passportNumber", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Phone className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">Contact Information</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email-reg">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email-reg"
                              type="email"
                              placeholder="your.email@example.com"
                              className="pl-10"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber">Phone Number *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="phoneNumber"
                              placeholder="+91 9876543210"
                              className="pl-10"
                              value={formData.phoneNumber}
                              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact1">Emergency Contact 1 *</Label>
                          <Input
                            id="emergencyContact1"
                            placeholder="Name: +91 9876543210"
                            value={formData.emergencyContact1}
                            onChange={(e) => handleInputChange("emergencyContact1", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact2">Emergency Contact 2</Label>
                          <Input
                            id="emergencyContact2"
                            placeholder="Name: +91 9876543210"
                            value={formData.emergencyContact2}
                            onChange={(e) => handleInputChange("emergencyContact2", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Travel Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">Travel Information</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="accommodation">Accommodation *</Label>
                          <Input
                            id="accommodation"
                            placeholder="Hotel name and address"
                            value={formData.accommodation}
                            onChange={(e) => handleInputChange("accommodation", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="visitPurpose">Visit Purpose *</Label>
                          <Select onValueChange={(value) => handleInputChange("visitPurpose", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select purpose" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tourism">Tourism</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="medical">Medical</SelectItem>
                              <SelectItem value="pilgrimage">Pilgrimage</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="stayDuration">Duration of Stay *</Label>
                          <Input
                            id="stayDuration"
                            placeholder="e.g., 7 days"
                            value={formData.stayDuration}
                            onChange={(e) => handleInputChange("stayDuration", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="preferredLanguage">Preferred Language</Label>
                          <Select onValueChange={(value) => handleInputChange("preferredLanguage", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              {languages.map(language => (
                                <SelectItem key={language} value={language}>{language}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">Additional Information</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="medicalConditions">Medical Conditions</Label>
                          <Input
                            id="medicalConditions"
                            placeholder="Any medical conditions or allergies"
                            value={formData.medicalConditions}
                            onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="insuranceProvider">Travel Insurance</Label>
                          <Input
                            id="insuranceProvider"
                            placeholder="Insurance provider and policy number"
                            value={formData.insuranceProvider}
                            onChange={(e) => handleInputChange("insuranceProvider", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Document Upload */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Upload className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">Document Upload</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <Button variant="outline" className="h-20 border-dashed border-accent text-accent hover:bg-accent/10">
                          <div className="text-center">
                            <Upload className="h-6 w-6 mx-auto mb-2" />
                            <div className="text-sm">Upload Passport/ID</div>
                          </div>
                        </Button>
                        
                        <Button variant="outline" className="h-20 border-dashed border-accent text-accent hover:bg-accent/10">
                          <div className="text-center">
                            <Upload className="h-6 w-6 mx-auto mb-2" />
                            <div className="text-sm">Upload Photo</div>
                          </div>
                        </Button>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">Account Security</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password-reg">Create Password *</Label>
                        <Input
                          id="password-reg"
                          type="password"
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Agreements */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">Agreements & Consent</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <Checkbox 
                            id="terms" 
                            checked={formData.termsAccepted}
                            onCheckedChange={(checked) => handleInputChange("termsAccepted", checked)}
                          />
                          <Label htmlFor="terms" className="text-sm leading-relaxed">
                            I accept the <Button variant="link" className="p-0 h-auto text-accent">Terms of Service</Button> and 
                            <Button variant="link" className="p-0 h-auto text-accent">Privacy Policy</Button> *
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox 
                            id="dataProcessing" 
                            checked={formData.dataProcessingAccepted}
                            onCheckedChange={(checked) => handleInputChange("dataProcessingAccepted", checked)}
                          />
                          <Label htmlFor="dataProcessing" className="text-sm leading-relaxed">
                            I consent to processing of my personal data for safety monitoring as per India's DPDP Act *
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox 
                            id="tracking" 
                            checked={formData.trackingConsent}
                            onCheckedChange={(checked) => handleInputChange("trackingConsent", checked)}
                          />
                          <Label htmlFor="tracking" className="text-sm leading-relaxed">
                            I consent to real-time location tracking for safety purposes (optional but recommended)
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-hero hover:shadow-glow text-lg py-6">
                      <Shield className="mr-2 h-5 w-5" />
                      Create Digital Tourist ID
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      Your data is encrypted and stored securely on blockchain. 
                      <br />
                      ID will be ready within 5 minutes after verification.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TouristAuth;