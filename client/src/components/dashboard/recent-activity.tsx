import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const activities = [
  {
    user: "Alice Smith",
    action: "subscribed to",
    target: "Pro Plan",
    time: "2 minutes ago",
    avatar: "AS",
  },
  {
    user: "Bob Jones",
    action: "purchased",
    target: "Enterprise License",
    time: "15 minutes ago",
    avatar: "BJ",
  },
  {
    user: "Charlie Day",
    action: "commented on",
    target: "Q3 Report",
    time: "1 hour ago",
    avatar: "CD",
  },
  {
    user: "Diana Prince",
    action: "updated",
    target: "Profile Settings",
    time: "3 hours ago",
    avatar: "DP",
  },
  {
    user: "Evan Wright",
    action: "deployed",
    target: "v2.4.0",
    time: "5 hours ago",
    avatar: "EW",
  },
];

export function RecentActivity() {
  return (
    <Card className="col-span-3 border-none shadow-sm">
      <CardHeader>
        <CardTitle className="font-display">Recent Activity</CardTitle>
        <CardDescription>Latest actions across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9 bg-primary/10 text-primary border border-primary/20">
                <AvatarFallback>{activity.avatar}</AvatarFallback>
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
