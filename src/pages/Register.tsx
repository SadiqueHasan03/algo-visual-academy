
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "@clerk/clerk-react";
import { UserPlus, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { signUp, isLoaded: clerkLoaded } = useSignUp();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clerkLoaded) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      // Start the sign up process
      const result = await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });

      // Send email verification if required
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      
      // If sign up was successful
      if (result.status === "complete") {
        toast.success("Registration successful!");
        navigate("/");
      } else {
        // Verification may be needed
        toast.info("Please verify your email address to continue.");
        console.log("Sign up requires verification", result);
      }
    } catch (err: any) {
      console.error("Error signing up:", err);
      setError(err.errors?.[0]?.message || "An error occurred during sign up.");
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignUp = async (provider: "oauth_google" | "oauth_github") => {
    if (!clerkLoaded) return;
    
    try {
      await signUp.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch (err) {
      console.error("OAuth error:", err);
      toast.error("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="container py-12 max-w-md">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-destructive/15 text-destructive p-3 rounded-md flex items-center gap-2 mb-4">
              <AlertCircle className="h-4 w-4" />
              <p className="text-sm">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Sign Up"}
              {!isLoading && <UserPlus className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-algo-primary hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="relative w-full mb-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button 
              variant="outline" 
              onClick={() => handleOAuthSignUp("oauth_google")}
              disabled={isLoading}
            >
              Google
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleOAuthSignUp("oauth_github")}
              disabled={isLoading}
            >
              GitHub
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
