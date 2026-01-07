import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { KPICard } from "@/components/dashboard/kpi-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  BarChart2, 
  Activity, 
  Download, 
  BrainCircuit, 
  Globe, 
  ShieldCheck, 
  Layers, 
  Zap, 
  RefreshCcw 
} from "lucide-react";

const kpiData = [
  {
    title: "Total Responses",
    value: "12,482",
    change: "+12.5%",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 100) + 50 })),
  },
  {
    title: "Active Studies",
    value: "24",
    change: "+3",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 20) + 10 })),
  },
  {
    title: "AI Analysis Efficiency",
    value: "94.2%",
    change: "+2.1%",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 10) + 85 })),
  },
  {
    title: "Secure Nodes",
    value: "100%",
    change: "Stable",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: 100 })),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background font-sans subtle-grain">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {/* Architecture Status Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  <RefreshCcw className="h-3 w-3 animate-spin-slow" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Real-time Stream</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">
                  <ShieldCheck className="h-3 w-3" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">RBAC Secure</span>
                </div>
              </div>
              <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Insight Forge</h1>
              <p className="text-muted-foreground mt-1 text-sm max-w-2xl">
                Modular BI architecture with decoupled AI analytics and secure data synchronization.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2 border-border/60 hover:bg-accent/50">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button className="gap-2 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Deploy Study
              </Button>
            </div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* KPI Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {kpiData.map((kpi, index) => (
                <motion.div key={index} variants={item}>
                  <KPICard {...kpi} />
                </motion.div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="grid gap-4 lg:grid-cols-7">
              <motion.div variants={item} className="lg:col-span-4">
                <RevenueChart />
              </motion.div>
              <motion.div variants={item} className="lg:col-span-3">
                <RecentActivity />
              </motion.div>
            </div>
            
            {/* Architectural Modules */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                 <motion.div variants={item} className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-primary/30 transition-all duration-300 shadow-sm cursor-pointer relative overflow-hidden">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">Modular Core</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Separated concerns between presentation and application layers for maximum scalability.</p>
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
                      <Zap className="h-3 w-3 text-primary" />
                    </div>
                 </motion.div>

                 <motion.div variants={item} className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-emerald-500/30 transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                      <Activity className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">Real-time Stream</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Integrated pipeline for sub-second synchronization of respondent data across all nodes.</p>
                 </motion.div>

                 <motion.div variants={item} className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-indigo-500/30 transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                      <BrainCircuit className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">AI Integration</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Direct API connectivity to the analytics engine for automated insight extraction.</p>
                 </motion.div>

                 <motion.div variants={item} className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-amber-500/30 transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">RBAC Security</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Role-based access controls enforcing strict isolation and data integrity.</p>
                 </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
