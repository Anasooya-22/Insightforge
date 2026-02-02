import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, BrainCircuit, Target, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function CreateStudy() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen bg-background font-sans subtle-grain">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Create Research Study</h1>
              <p className="text-muted-foreground mt-1 text-sm">Step {step} of 3: {step === 1 ? 'Core Parameters' : step === 2 ? 'Targeting' : 'Finalize'}</p>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="p-8">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="study-name">Study Name</Label>
                      <Input id="study-name" placeholder="e.g., Q3 Market Sentiment Analysis" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="study-desc">Description</Label>
                      <textarea 
                        id="study-desc" 
                        className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Briefly describe the study goals and objectives..."
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Target Region</Label>
                        <Select>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Select region" /></SelectTrigger>
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
                          <Input type="number" placeholder="Min" className="h-12" />
                          <Input type="number" placeholder="Max" className="h-12" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 pt-4">
                      <Label className="flex items-center gap-2"><Target className="h-4 w-4 text-primary" /> Demographic Focus</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Students', 'Professionals', 'Retirees', 'Freelancers'].map(tag => (
                          <div key={tag} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer text-sm">
                            <input type="checkbox" className="rounded border-primary/20" /> {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                    <div className="h-20 w-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">Study Orchestration Ready</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">AI models have been initialized and data pipeline nodes are on standby for real-time deployment.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                      <div className="p-4 rounded-xl border border-border bg-muted/30 flex flex-col items-center gap-2">
                         <BrainCircuit className="h-5 w-5 text-indigo-500" />
                         <span className="text-[11px] font-bold uppercase tracking-wider">AI Primed</span>
                      </div>
                      <div className="p-4 rounded-xl border border-border bg-muted/30 flex flex-col items-center gap-2">
                         <Target className="h-5 w-5 text-emerald-500" />
                         <span className="text-[11px] font-bold uppercase tracking-wider">Nodes Ready</span>
                      </div>
                      <div className="p-4 rounded-xl border border-border bg-muted/30 flex flex-col items-center gap-2">
                         <CheckCircle2 className="h-5 w-5 text-blue-500" />
                         <span className="text-[11px] font-bold uppercase tracking-wider">RBAC Verified</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="p-6 border-t border-border/50 flex justify-between bg-muted/10">
                <Button variant="ghost" disabled={step === 1} onClick={() => setStep(s => s - 1)}>Back</Button>
                {step < 3 ? (
                  <Button onClick={() => setStep(s => s + 1)} className="gap-2 px-8 h-11">
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={() => setStep(1)} className="bg-primary px-8 h-11">Launch Research Study</Button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
