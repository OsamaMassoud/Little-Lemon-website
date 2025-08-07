import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Reserve from "./pages/Reserve";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder component for future pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-background">
    <header className="bg-sage text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-lemon rounded-full flex items-center justify-center">
            <span className="text-2xl">🍋</span>
          </div>
          <h1 className="text-2xl font-markazi font-bold text-white">
            Little Lemon
          </h1>
        </div>
        <a href="/" className="text-white hover:text-lemon transition-colors">
          Back to Home
        </a>
      </div>
    </header>
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-markazi font-bold text-sage mb-4">
        {title}
      </h1>
      <p className="text-muted-foreground mb-8">
        This page is coming soon! Continue prompting to have us build out this
        page content.
      </p>
      <a
        href="/"
        className="inline-block bg-lemon text-sage-dark px-6 py-3 rounded-lg hover:bg-lemon-dark transition-colors"
      >
        Return to Home
      </a>
    </div>
  </div>
);

const App = () => (
  <div className="md:block flex flex-col justify-center items-center">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/menu" element={<PlaceholderPage title="Menu" />} />
            <Route
              path="/about"
              element={<PlaceholderPage title="About Us" />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

createRoot(document.getElementById("root")!).render(<App />);
