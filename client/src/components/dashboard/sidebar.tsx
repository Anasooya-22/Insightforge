import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  PieChart,
  LogOut,
  Menu,
  Activity,
  PlusCircle,
  Layers,
  Zap
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/" },
  { icon: PlusCircle, label: "Create Study", href: "/create-study" },
  { icon: Activity, label: "Live Responses", href: "/live-responses" },
  { icon: Zap, label: "Analytics", href: "/analytics" },
  { icon: PieChart, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="hidden md:flex flex-col w-64 border-r border-sidebar-border bg-sidebar text-sidebar-foreground h-screen sticky top-0 left-0">
      <div className="p-6 border-b border-sidebar-border/50">
        <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-primary">
          <div className="h-6 w-6 rounded-sm bg-primary flex items-center justify-center">
            <Layers className="h-3.5 w-3.5 text-white" />
          </div>
          Insight Forge
        </div>
      </div>
      
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all font-sans cursor-pointer group",
              location === item.href 
                ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm" 
                : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
            )}>
              <item.icon className={cn(
                "h-4 w-4 transition-colors",
                location === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )} />
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-sidebar-border/50">
        <div className="bg-sidebar-accent/30 border border-sidebar-border/50 rounded-lg p-4 mb-4 backdrop-blur-sm">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-sm font-display">Status</h4>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded font-medium">LIVE</span>
          </div>
          <p className="text-[10px] text-muted-foreground mb-3 leading-tight">AI Engine active and syncing live streams.</p>
        </div>
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors h-9">
          <LogOut className="h-4 w-4 mr-2" />
          Log out
        </Button>
      </div>
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0 border-r border-sidebar-border">
        <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
          <div className="p-6 border-b border-sidebar-border/50">
            <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-primary">
              <div className="h-6 w-6 rounded-sm bg-primary flex items-center justify-center">
                <Layers className="h-3.5 w-3.5 text-white" />
              </div>
              Insight Forge
            </div>
          </div>
          <div className="flex-1 py-6 px-3 space-y-1">
            {sidebarItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div 
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all font-sans cursor-pointer",
                    location === item.href 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                      : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
