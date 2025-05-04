
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, BookOpen, BarChart2, Code, Activity, Brain } from "lucide-react";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 dark:bg-gray-900/90 shadow-sm backdrop-blur-lg" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    } border-b border-border py-3`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-algo-primary text-white h-9 w-9 rounded-lg flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110">
            <Brain className="h-5 w-5" />
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">AlgoViz Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/lessons" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/lessons") && "bg-muted text-primary"
                  )}
                >
                  <BookOpen className="w-4 h-4 mr-1.5" />
                  Lessons
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  isActive("/visualizers") && "bg-muted text-primary"
                )}>
                  <Activity className="w-4 h-4 mr-1.5" />
                  Visualizers
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/visualizers"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-algo-primary/20 via-algo-secondary/20 to-algo-accent/10 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Algorithm Visualizations
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Visualize and understand algorithms with our interactive tools.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/visualizers/sorting"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            <BarChart2 className="w-4 h-4 mr-2" />
                            Sorting
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Bubble, Quick, Merge and more
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/visualizers/searching"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            <Code className="w-4 h-4 mr-2" />
                            Searching
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Linear, Binary, BFS and DFS
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/challenges" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/challenges") && "bg-muted text-primary"
                  )}
                >
                  <Code className="w-4 h-4 mr-1.5" />
                  Challenges
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/quizzes" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/quizzes") && "bg-muted text-primary"
                  )}
                >
                  <BarChart2 className="w-4 h-4 mr-1.5" />
                  Quizzes
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 rounded-full border-2 border-primary hover:border-primary/80 transition-all",
                  userButtonPopoverCard: "shadow-lg border border-border"
                }
              }}
            />
          </SignedIn>
          <SignedOut>
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="outline" asChild className="group">
                <Link to="/login">
                  Login
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              </Button>
              <Button asChild className="bg-algo-primary hover:bg-algo-primary/90">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </SignedOut>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-background/95 backdrop-blur-sm z-40 animate-fade-in">
          <nav className="container py-8">
            <ul className="flex flex-col gap-6 text-lg">
              <li>
                <Link 
                  to="/lessons" 
                  className={`flex items-center py-2 hover:text-algo-primary ${isActive("/lessons") ? "text-algo-primary font-medium" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  Lessons
                </Link>
              </li>
              <li>
                <Link 
                  to="/visualizers" 
                  className={`flex items-center py-2 hover:text-algo-primary ${isActive("/visualizers") ? "text-algo-primary font-medium" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Activity className="mr-3 h-5 w-5" />
                  Visualizers
                </Link>
              </li>
              <li>
                <Link 
                  to="/visualizers/sorting" 
                  className={`flex items-center py-2 pl-8 text-base hover:text-algo-primary ${isActive("/visualizers/sorting") ? "text-algo-primary" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Sorting Algorithms
                </Link>
              </li>
              <li>
                <Link 
                  to="/visualizers/searching" 
                  className={`flex items-center py-2 pl-8 text-base hover:text-algo-primary ${isActive("/visualizers/searching") ? "text-algo-primary" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Searching Algorithms
                </Link>
              </li>
              <li>
                <Link 
                  to="/challenges" 
                  className={`flex items-center py-2 hover:text-algo-primary ${isActive("/challenges") ? "text-algo-primary font-medium" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Code className="mr-3 h-5 w-5" />
                  Challenges
                </Link>
              </li>
              <li>
                <Link 
                  to="/quizzes" 
                  className={`flex items-center py-2 hover:text-algo-primary ${isActive("/quizzes") ? "text-algo-primary font-medium" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <BarChart2 className="mr-3 h-5 w-5" />
                  Quizzes
                </Link>
              </li>
              <SignedIn>
                <li>
                  <Button variant="outline" className="w-full mt-4" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </li>
              </SignedIn>
              <SignedOut>
                <li className="flex gap-4 mt-4">
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                  </Button>
                  <Button asChild className="flex-1 bg-algo-primary hover:bg-algo-primary/90">
                    <Link to="/register" onClick={() => setIsOpen(false)}>Sign Up</Link>
                  </Button>
                </li>
              </SignedOut>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
