import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { KPICard } from "@/components/dashboard/kpi-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCcw, ShieldCheck, Download, Plus } from "lucide-react";
import { Link } from "wouter";

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
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DashboardHome() {
  return (
    <div className="flex min-h-screen bg-background font-sans subtle-grain">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  <RefreshCcw className="h-3 w-3 animate-spin-slow" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Live Stream Active</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">
                  <ShieldCheck className="h-3 w-3" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Secure Access</span>
                </div>
              </div>
              <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">InsightForge LIVE</h1>
              <p className="text-muted-foreground mt-1 text-sm max-w-2xl">
                Advanced Decision Support System: Study Orchestration & Real-time AI Intelligence.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2 border-border/60 hover:bg-accent/50 group">
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Download Reports
              </Button>
              <Link href="/create-study">
                <Button className="gap-2 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all active:scale-95">
                  <Plus className="h-4 w-4" />
                  Create Study
                </Button>
              </Link>
            </div>
          </div>

          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {kpiData.map((kpi, index) => (
                <motion.div key={index} variants={item}>
                  <KPICard {...kpi} />
                </motion.div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-7">
              <motion.div variants={item} className="lg:col-span-4">
                <RevenueChart />
              </motion.div>
              <motion.div variants={item} className="lg:col-span-3">
                <RecentActivity />
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
