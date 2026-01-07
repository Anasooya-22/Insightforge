import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { KPICard } from "@/components/dashboard/kpi-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { motion } from "framer-motion";

const kpiData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 100) + 50 })),
  },
  {
    title: "Subscriptions",
    value: "+2350",
    change: "+180.1%",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 100) + 20 })),
  },
  {
    title: "Bounce Rate",
    value: "12.23%",
    change: "-4.5%",
    trend: "down" as const, // Down is good for bounce rate usually, but visually we want red if it's "bad" or green if it's "good". Let's stick to standard color meaning: Green = Good, Red = Bad.
    // Wait, usually Green UP is good. Red DOWN is bad.
    // For Bounce Rate, lower is better. So a negative change is GOOD (Green).
    // Let's adjust the KPICard logic later if needed, for now let's assume this is "Sales" for simplicity or just interpret colors directly.
    // Let's change this to "Active Now"
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 100) })),
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201 since last hour",
    trend: "up" as const,
    data: Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 100) + 80 })),
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Overview of your key performance indicators.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-background border border-border rounded-md text-sm font-medium hover:bg-accent transition-colors">
                Download Report
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                Add Widget
              </button>
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

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <motion.div variants={item} className="col-span-4">
                <RevenueChart />
              </motion.div>
              <motion.div variants={item} className="col-span-3">
                <RecentActivity />
              </motion.div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
                 {/* Placeholder for future widgets to show layout modularity */}
                 <motion.div variants={item} className="h-64 rounded-lg border border-border border-dashed flex items-center justify-center text-muted-foreground bg-muted/20">
                    <span className="text-sm">Widget Placeholder</span>
                 </motion.div>
                 <motion.div variants={item} className="h-64 rounded-lg border border-border border-dashed flex items-center justify-center text-muted-foreground bg-muted/20">
                    <span className="text-sm">Widget Placeholder</span>
                 </motion.div>
                 <motion.div variants={item} className="h-64 rounded-lg border border-border border-dashed flex items-center justify-center text-muted-foreground bg-muted/20">
                    <span className="text-sm">Widget Placeholder</span>
                 </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
