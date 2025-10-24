import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Programs from "./pages/programs";
import Volunteer from "./pages/volunteer";
import Contact from "./pages/contact";
import Impact from "./pages/impact";
import Admin from "./pages/admin";
import NotFound from "./pages/not-found";
import LockPage from "./components/lock-page";
import { useState, useEffect, useCallback, useRef } from "react";

const INACTIVITY_TIMEOUT = 10 * 60 * 1000; // 10 minutes in milliseconds

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem("authenticated");
    setIsAuthenticated(false);
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }
  }, []);

  const resetInactivityTimer = useCallback(() => {
    if (!isAuthenticated) return;

    // Clear existing timer
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // Set new timer
    inactivityTimerRef.current = setTimeout(() => {
      handleLogout();
    }, INACTIVITY_TIMEOUT);
  }, [isAuthenticated, handleLogout]);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = sessionStorage.getItem("authenticated");
    setIsAuthenticated(authenticated === "true");
    setIsChecking(false);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    // Start inactivity timer when authenticated
    resetInactivityTimer();

    // Events that reset the inactivity timer
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];

    const handleActivity = () => {
      resetInactivityTimer();
    };

    // Add event listeners
    events.forEach(event => {
      window.addEventListener(event, handleActivity);
    });

    // Cleanup
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [isAuthenticated, resetInactivityTimer]);

  const handleUnlock = () => {
    setIsAuthenticated(true);
  };

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LockPage onUnlock={handleUnlock} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/programs" component={Programs} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/contact" component={Contact} />
            <Route path="/impact" component={Impact} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;