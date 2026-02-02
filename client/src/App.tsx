import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import DashboardHome from "@/pages/dashboard-home";
import CreateStudy from "@/pages/create-study";
import LiveResponses from "@/pages/live-responses";
import Analytics from "@/pages/analytics";
import Reports from "@/pages/reports";
import Settings from "@/pages/settings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={DashboardHome} />
      <Route path="/create-study" component={CreateStudy} />
      <Route path="/live-responses" component={LiveResponses} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/reports" component={Reports} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
