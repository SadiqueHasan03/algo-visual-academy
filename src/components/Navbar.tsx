
import { useState } from "react";
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
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border py-3">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-algo-primary text-white h-8 w-8 rounded-md flex items-center justify-center font-bold">A</div>
          <span className="font-bold text-xl hidden sm:inline-block">AlgoViz Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/lessons" className={navigationMenuTriggerStyle()}>
                  Lessons
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Visualizers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/visualizers"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-algo-primary/20 to-algo-secondary/20 p-6 no-underline outline-none focus:shadow-md"
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
                          <div className="text-sm font-medium leading-none">Sorting</div>
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
                          <div className="text-sm font-medium leading-none">Searching</div>
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
                <Link to="/challenges" className={navigationMenuTriggerStyle()}>
                  Challenges
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/quizzes" className={navigationMenuTriggerStyle()}>
                  Quizzes
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-background z-40 animate-fade-in">
          <nav className="container py-8">
            <ul className="flex flex-col gap-6 text-lg">
              <li>
                <Link to="/lessons" className="block py-2 hover:text-algo-primary" onClick={() => setIsOpen(false)}>
                  Lessons
                </Link>
              </li>
              <li>
                <Link to="/visualizers" className="block py-2 hover:text-algo-primary" onClick={() => setIsOpen(false)}>
                  Visualizers
                </Link>
              </li>
              <li>
                <Link to="/visualizers/sorting" className="block py-2 pl-4 text-base hover:text-algo-primary" onClick={() => setIsOpen(false)}>
                  Sorting Algorithms
                </Link>
              </li>
              <li>
                <Link to="/visualizers/searching" className="block py-2 pl-4 text-base hover:text-algo-primary" onClick={() => setIsOpen(false)}>
                  Searching Algorithms
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="block py-2 hover:text-algo-primary" onClick={() => setIsOpen(false)}>
                  Challenges
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="block py-2 hover:text-algo-primary" onClick={() => setIsOpen(false)}>
                  Quizzes
                </Link>
              </li>
              <li className="flex gap-4 mt-4">
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link to="/register" onClick={() => setIsOpen(false)}>Sign Up</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
