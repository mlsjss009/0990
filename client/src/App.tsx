import { Switch, Route, useLocation } from "wouter";
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
import News from "./pages/news";
import Apply from "./pages/apply";
import Testimonials from "./pages/testimonials";
import Partners from "./pages/partners";
import NotFound from "./pages/not-found";
import LockPage from "./components/lock-page";
import { useState, useEffect, useCallback, useRef } from "react";

const INACTIVITY_TIMEOUT = 10 * 60 * 1000; // 10 minutes in milliseconds

function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsLoading(true);

      // Simulate loading delay
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="text-lg font-semibold text-indigo-600">Loading...</p>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }
    console.log("Session locked due to inactivity");
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
    // Don't persist authentication - always start locked
    setIsAuthenticated(false);
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
          <PageTransition>
            <main className="flex-grow">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/programs" component={Programs} />
                <Route path="/volunteer" component={Volunteer} />
                <Route path="/contact" component={Contact} />
                <Route path="/impact" component={Impact} />
                <Route path="/news" component={News} />
                <Route path="/apply" component={Apply} />
                <Route path="/testimonials" component={Testimonials} />
                <Route path="/partners" component={Partners} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </PageTransition>
          <Toaster />
        </div>
    </QueryClientProvider>
  );
}

export default App;