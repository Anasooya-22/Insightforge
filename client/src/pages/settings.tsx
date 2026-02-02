import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShieldCheck, User, Bell } from "lucide-react";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-background font-sans subtle-grain">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Profile & Settings</h1>
            <p className="text-muted-foreground mt-1 text-sm">Manage your account and architectural access nodes.</p>
          </div>

          <div className="grid gap-8 max-w-4xl">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><User className="h-5 w-5 text-primary" /> Personal Information</CardTitle>
                <CardDescription>Update your profile and role details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue="Robb Stark" />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Input defaultValue="Product Manager" disabled />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input defaultValue="robb.stark@insightforge.live" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-blue-500" /> Security & Access</CardTitle>
                <CardDescription>Configure role-based access and authentication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                   <h4 className="text-xs font-bold text-blue-600 uppercase mb-1">RBAC Status: Active</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed">Your account has full administrative access to the Study Management and AI Analytics engines.</p>
                </div>
                <Button variant="outline">Change Password</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
