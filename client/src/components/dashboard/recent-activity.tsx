import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const activities = [
  {
    user: "AI Engine",
    action: "identified sentiment shift in",
    target: "Millennial Study",
    time: "2 minutes ago",
    avatar: "AI",
    type: "system"
  },
  {
    user: "Data Pipeline",
    action: "synced 500 new responses from",
    target: "Global Outreach",
    time: "15 minutes ago",
    avatar: "DP",
    type: "system"
  },
  {
    user: "Charlie Day",
    action: "approved AI summary for",
    target: "Q3 Insights",
    time: "1 hour ago",
    avatar: "CD",
    type: "user"
  },
  {
    user: "Diana Prince",
    action: "updated aggregation logic for",
    target: "Customer Feedback",
    time: "3 hours ago",
    avatar: "DP",
    type: "user"
  },
  {
    user: "Report Service",
    action: "generated PDF report for",
    target: "Internal Audit",
    time: "5 hours ago",
    avatar: "RS",
    type: "system"
  },
];

export function RecentActivity() {
  return (
    <Card className="col-span-3 border-none shadow-sm h-full">
      <CardHeader>
        <CardTitle className="font-display">Live Feed</CardTitle>
        <CardDescription>Real-time system and user events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className={`h-9 w-9 ${activity.type === 'system' ? 'bg-primary/5 text-primary border-primary/10' : 'bg-muted text-muted-foreground border-muted-foreground/10'} border`}>
                <AvatarFallback className="text-[10px] font-bold">{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user} <span className="text-muted-foreground font-normal">{activity.action}</span> <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
