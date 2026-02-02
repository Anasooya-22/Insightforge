import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { KPICard } from "@/components/dashboard/kpi-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  BarChart2, 
  Activity, 
  Download, 
  BrainCircuit, 
  ShieldCheck, 
  Layers, 
  RefreshCcw,
  Users,
  Target,
  FileText,
  ArrowRight,
  CheckCircle2,
  X
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [showStudyModal, setShowStudyModal] = useState(false);
  const [step, setStep] = useState(1);

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
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Live Stream Active</span>
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
              <Button 
                onClick={() => { setShowStudyModal(true); setStep(1); }}
                className="gap-2 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all active:scale-95"
              >
                <Plus className="h-4 w-4" />
                Create Study
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

            {/* Decision Support Modules */}
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div variants={item}>
                 <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                        <Target className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-display">Target Demographics</CardTitle>
                      <CardDescription>Define and refine audience segments</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       Configure age, location, and behavior parameters for sub-second pipeline synchronization.
                    </CardContent>
                 </Card>
              </motion.div>
              <motion.div variants={item}>
                 <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
                        <Activity className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-display">Live Response Feed</CardTitle>
                      <CardDescription>Real-time respondent data pipeline</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       Instant visualization of raw data streams arriving from the integration layer.
                    </CardContent>
                 </Card>
              </motion.div>
              <motion.div variants={item}>
                 <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                        <BrainCircuit className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-display">AI-Generated Insights</CardTitle>
                      <CardDescription>Deep pattern analysis & predictions</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       Automated sentiment extraction and decision-ready summaries from the AI Engine.
                    </CardContent>
                 </Card>
              </motion.div>
            </div>

            {/* Charts Area */}
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

      {/* Study Creation Modal (decision-support prototype) */}
      <AnimatePresence>
        {showStudyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStudyModal(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-card border border-border shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-border/50 flex justify-between items-center bg-muted/30">
                <div>
                  <h2 className="text-xl font-display font-bold">Create Research Study</h2>
                  <p className="text-xs text-muted-foreground">Step {step} of 3</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowStudyModal(false)} className="rounded-full">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-8">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="study-name">Study Name</Label>
                      <Input id="study-name" placeholder="e.g., Q3 Market Sentiment Analysis" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="study-desc">Description</Label>
                      <textarea 
                        id="study-desc" 
                        className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Briefly describe the study goals..."
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Target Region</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select region" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="na">North America</SelectItem>
                          <SelectItem value="eu">Europe</SelectItem>
                          <SelectItem value="as">Asia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Age Range</Label>
                      <div className="flex gap-4">
                        <Input type="number" placeholder="Min" />
                        <Input type="number" placeholder="Max" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Demographic Focus</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Students', 'Professionals', 'Retirees', 'Freelancers'].map(tag => (
                          <div key={tag} className="flex items-center gap-2 p-2 rounded border border-border bg-muted/50 text-xs">
                            <input type="checkbox" className="rounded" /> {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-1">Study Ready for Deployment</h3>
                    <p className="text-sm text-muted-foreground mb-6">AI models have been initialized for real-time aggregation.</p>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-left">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-2">
                        <ShieldCheck className="h-3 w-3" /> System Check Pass
                      </div>
                      <ul className="text-[11px] text-muted-foreground space-y-1">
                        <li>• JWT-based Authentication Verified</li>
                        <li>• Data Pipeline Handlers Configured</li>
                        <li>• AI Insights Engine Primed</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="p-6 border-t border-border/50 flex justify-between bg-muted/30">
                <Button variant="ghost" disabled={step === 1} onClick={() => setStep(s => s - 1)}>Back</Button>
                {step < 3 ? (
                  <Button onClick={() => setStep(s => s + 1)} className="gap-2">
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={() => setShowStudyModal(false)} className="bg-primary">Launch Study</Button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
