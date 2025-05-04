
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Lessons from "./pages/Lessons";
import LessonDetails from "./pages/LessonDetails";
import Visualizers from "./pages/Visualizers";
import SortingVisualizer from "./pages/SortingVisualizer";
import SearchingVisualizer from "./pages/SearchingVisualizer";
import Challenges from "./pages/Challenges";
import Quizzes from "./pages/Quizzes";
import QuizDetails from "./pages/QuizDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route 
                path="/lessons" 
                element={
                  <>
                    <SignedIn>
                      <Lessons />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                } 
              />
              <Route 
                path="/lessons/:slug" 
                element={
                  <>
                    <SignedIn>
                      <LessonDetails />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                } 
              />
              <Route 
                path="/visualizers" 
                element={
                  <>
                    <SignedIn>
                      <Visualizers />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                }
              />
              <Route 
                path="/visualizers/sorting" 
                element={
                  <>
                    <SignedIn>
                      <SortingVisualizer />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                }
              />
              <Route 
                path="/visualizers/searching" 
                element={
                  <>
                    <SignedIn>
                      <SearchingVisualizer />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                }
              />
              <Route 
                path="/challenges" 
                element={
                  <>
                    <SignedIn>
                      <Challenges />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                }
              />
              <Route 
                path="/quizzes" 
                element={
                  <>
                    <SignedIn>
                      <Quizzes />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                }
              />
              <Route 
                path="/quizzes/:quizId" 
                element={
                  <>
                    <SignedIn>
                      <QuizDetails />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
