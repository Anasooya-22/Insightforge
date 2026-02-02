import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-background font-sans subtle-grain">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">AI Analytics</h1>
            <p className="text-muted-foreground mt-1 text-sm">Decision-ready patterns derived from deep intelligence engine.</p>
          </div>

          <div className="grid gap-6 mb-8 lg:grid-cols-3">
             <Card className="border-none shadow-sm group hover:shadow-md transition-all">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-2">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Sentiment Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-indigo-600">84/100</div>
                  <p className="text-xs text-muted-foreground mt-1">High positive sentiment across all active segments.</p>
                </CardContent>
             </Card>
             <Card className="border-none shadow-sm group hover:shadow-md transition-all">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mb-2">
                    <Zap className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Growth Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-600">+22.4%</div>
                  <p className="text-xs text-muted-foreground mt-1">Projected increase in response volume over next 30 days.</p>
                </CardContent>
             </Card>
             <Card className="border-none shadow-sm group hover:shadow-md transition-all">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-2">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Analysis Depth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">Level 4</div>
                  <p className="text-xs text-muted-foreground mt-1">Multi-layered correlation mapping active.</p>
                </CardContent>
             </Card>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <RevenueChart />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
