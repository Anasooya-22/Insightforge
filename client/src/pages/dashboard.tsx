import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { KPICard } from "@/components/dashboard/kpi-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, BarChart2, Activity, Download } from "lucide-react";

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
    title: "Avg. Completion Rate",
    value: "68.2%",
    change: "+4.1%",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 30) + 60 })),
  },
  {
    title: "AI Insights Generated",
    value: "154",
    change: "+42",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 50) + 100 })),
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
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Live Monitoring</span>
              </div>
              <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Insight Forge Dashboard</h1>
              <p className="text-muted-foreground mt-1 text-sm">Real-time response aggregation and AI-driven insights.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Report
              </Button>
              <Button className="gap-2 shadow-sm bg-primary">
                <Plus className="h-4 w-4" />
                New Study
              </Button>
            </div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
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
            
            <div className="grid gap-4 md:grid-cols-3">
                 <motion.div variants={item} className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <BarChart2 className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">Study Creation</h3>
                    <p className="text-sm text-muted-foreground">Configure new surveys and study parameters with AI assistance.</p>
                 </motion.div>
                 <motion.div variants={item} className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                      <Activity className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">Live Responses</h3>
                    <p className="text-sm text-muted-foreground">Monitor respondent data pipeline and demographic synchronization.</p>
                 </motion.div>
                 <motion.div variants={item} className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                      <Plus className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">AI Config</h3>
                    <p className="text-sm text-muted-foreground">Adjust sentiment analysis thresholds and aggregation logic.</p>
                 </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
