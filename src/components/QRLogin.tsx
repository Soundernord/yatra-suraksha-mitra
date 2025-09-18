import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, Smartphone, Check, Loader2 } from "lucide-react";

interface QRLoginProps {
  onLoginSuccess: () => void;
}

const QRLogin = ({ onLoginSuccess }: QRLoginProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  const handleQRScan = () => {
    setIsScanning(true);
    // Simulate QR scan process
    setTimeout(() => {
      setIsScanning(false);
      setScanSuccess(true);
      setTimeout(() => {
        onLoginSuccess();
      }, 1500);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Badge className="mb-4 bg-accent/10 text-accent">
          <QrCode className="w-4 h-4 mr-2" />
          Secure QR Login
        </Badge>
        <h3 className="text-2xl font-bold mb-2">Scan to Login</h3>
        <p className="text-muted-foreground">
          Open your Yatra Sentinal mobile app and scan the QR code to log in securely
        </p>
      </div>

      <Card className="p-8 bg-gradient-card text-center">
        {!isScanning && !scanSuccess && (
          <div className="space-y-6">
            <div className="w-48 h-48 mx-auto bg-background rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
              <QrCode className="w-24 h-24 text-muted-foreground/50" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span>Open mobile app → Scan QR → Login</span>
              </div>
              <Button 
                onClick={handleQRScan}
                className="bg-gradient-hero"
                size="lg"
              >
                Generate QR Code
              </Button>
            </div>
          </div>
        )}

        {isScanning && !scanSuccess && (
          <div className="space-y-6">
            <div className="w-48 h-48 mx-auto bg-background rounded-xl border-2 border-accent flex items-center justify-center animate-pulse">
              <Loader2 className="w-8 h-8 text-accent animate-spin" />
            </div>
            <div className="space-y-2">
              <p className="font-medium text-accent">Waiting for scan...</p>
              <p className="text-sm text-muted-foreground">
                Please scan the QR code with your mobile app
              </p>
            </div>
          </div>
        )}

        {scanSuccess && (
          <div className="space-y-6">
            <div className="w-48 h-48 mx-auto bg-success/10 rounded-xl border-2 border-success flex items-center justify-center">
              <Check className="w-24 h-24 text-success" />
            </div>
            <div className="space-y-2">
              <p className="font-medium text-success">Authentication Successful!</p>
              <p className="text-sm text-muted-foreground">
                Redirecting to dashboard...
              </p>
            </div>
          </div>
        )}
      </Card>

      <div className="text-xs text-center text-muted-foreground">
        <p>Secure end-to-end encrypted authentication</p>
        <p>Powered by blockchain technology</p>
      </div>
    </div>
  );
};

export default QRLogin;