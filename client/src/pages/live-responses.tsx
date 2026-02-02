import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { Activity, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function LiveResponses() {
  return (
    <div className="flex min-h-screen bg-background font-sans subtle-grain">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Live Response Feed</h1>
              <p className="text-muted-foreground mt-1 text-sm">Sub-second synchronization from respondent pipelines.</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
               <RefreshCcw className="h-3 w-3 animate-spin-slow" /> Live Stream Active
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <RecentActivity />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="border-none shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Activity className="h-5 w-5 text-primary" /> Pipeline Health</CardTitle>
                  <CardDescription>Current throughput and latency metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Respondent Sync Rate</span>
                      <span className="font-bold">98.2%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[98.2%] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">API Latency</span>
                      <span className="font-bold">24ms</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[15%] rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/20">
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-primary">Integration Layer Status</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Respondent data pipeline is currently processing ~1,240 events per minute with zero dropped frames. AI Engine is active.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
