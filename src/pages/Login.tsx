
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "@clerk/clerk-react";
import { LogIn, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn, isLoaded: clerkLoaded } = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clerkLoaded) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      // Start the sign in process using email and password
      const result = await signIn.create({
        identifier: email,
        password,
      });
      
      if (result.status === "complete") {
        // Sign in was successful
        toast.success("Login successful!");
        navigate("/");
      } else {
        // Sign in requires more steps
        console.log("Sign in requires more steps", result);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error("Error signing in:", err);
      setError(err.errors?.[0]?.message || "An error occurred during sign in.");
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignIn = async (provider: "oauth_google" | "oauth_github") => {
    if (!clerkLoaded) return;
    
    try {
      await signIn.authenticateWithRedirect({
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
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-algo-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
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
              {isLoading ? "Logging in..." : "Login"}
              {!isLoading && <LogIn className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-algo-primary hover:underline">
              Sign up
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
              onClick={() => handleOAuthSignIn("oauth_google")}
              disabled={isLoading}
            >
              Google
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleOAuthSignIn("oauth_github")}
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

export default Login;
