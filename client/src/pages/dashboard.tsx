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
  RefreshCcw,
  FileText,
  Search,
  Layout
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
                  <span className="text-[10px] font-bold uppercase tracking-wider">Live Monitoring</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">
                  <ShieldCheck className="h-3 w-3" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">RBAC Secure</span>
                </div>
              </div>
              <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">InsightForge LIVE</h1>
              <p className="text-muted-foreground mt-1 text-sm max-w-2xl">
                Real-time BI Dashboard for Study Management, Response Aggregation, and AI-Driven Insights.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2 border-border/60 hover:bg-accent/50">
                <Download className="h-4 w-4" />
                Download Report
              </Button>
              <Button className="gap-2 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
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
            {/* KPI Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {kpiData.map((kpi, index) => (
                <motion.div key={index} variants={item}>
                  <KPICard {...kpi} />
                </motion.div>
              ))}
            </div>

            {/* Feature Mapping Area */}
            <div className="grid gap-6 lg:grid-cols-3 mb-8">
              <motion.div variants={item}>
                 <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                        <Layout className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-display">Study Creation</CardTitle>
                      <CardDescription>Interface for survey questions and configurations</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       Map survey questions directly to the Application Layer via Study Management Service.
                    </CardContent>
                 </Card>
              </motion.div>
              <motion.div variants={item}>
                 <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-2">
                        <Activity className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-display">Response Monitoring</CardTitle>
                      <CardDescription>Real-time metrics and respondent pipelines</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       Displays real-time charts synced with the Response Aggregation Service.
                    </CardContent>
                 </Card>
              </motion.div>
              <motion.div variants={item}>
                 <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-2">
                        <BrainCircuit className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-display">AI Visualizations</CardTitle>
                      <CardDescription>Insights derived from the AI Analytics Engine</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       Visualizes complex data patterns processed by the AI Request Handler.
                    </CardContent>
                 </Card>
              </motion.div>
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
                    <h3 className="font-display font-semibold mb-2 text-sm">Modular & Scalable</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Separated concerns between presentation and application layers for maximum growth potential.</p>
                 </motion.div>

                 <motion.div variants={item} className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-emerald-500/30 transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                      <RefreshCcw className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2 text-sm">Real-time Core</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Integrated pipeline for sub-second synchronization of respondent data across nodes.</p>
                 </motion.div>

                 <motion.div variants={item} className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-indigo-500/30 transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                      <BrainCircuit className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2 text-sm">AI Integration</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Direct API connectivity to the analytics engine for automated insight extraction.</p>
                 </motion.div>

                 <motion.div variants={item} className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-blue-500/30 transition-all duration-300 shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-2 text-sm">Secure RBAC</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Role-based access controls enforcing strict isolation and data integrity.</p>
                 </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
